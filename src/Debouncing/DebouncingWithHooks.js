import React, { useEffect,useRef,useState } from 'react'
import axios from 'axios'
import _ from 'lodash'
import CommonHeader from '../component/commonHeader'
function DebouncingWithHooks(props){
    const[input,setInput]=useState('')
        const[isLoading,setLoading]=useState(false)
        const[errorMsg,setErrorMsg]=useState('')
        const[result,setResult]=useState([])
        const inputRef = useRef()

        useEffect(()=>{
            inputRef.current = _.debounce(searchText,500)
        },[])

        const searchText = (inputText)=>{
            axios.get(`https://www.reddit.com/search.json?q=${inputText}`)
            .then((response)=>{
                setResult(response.data.data.children)
                setLoading(false)
                setErrorMsg('')
            })
            .catch(()=>{
                setLoading(false)
                setErrorMsg('Something went wrong. Try after some time')
            })
        }

        const handleInputChange = (evt)=>{
            const inputText = evt.target.value
            setLoading(true)
            setInput(inputText)
            inputRef.current(inputText)
        }

    return(
        <>
        {/* <CommonHeader/> */}
  <input type="text" placeholder='Search here...' value={input} onChange={handleInputChange}/>
            {errorMsg && <p>{errorMsg}</p>}
            {isLoading && <p>Loading...</p>}
            <ul>
                {
                    result.map((result,index)=>{
                        return <li key={index}>{result.data.title}</li>
                    })
                }
            </ul>
        </>
    )
}
export default DebouncingWithHooks