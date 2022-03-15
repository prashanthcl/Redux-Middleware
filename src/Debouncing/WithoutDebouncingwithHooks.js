import axios from 'axios'
import React, { useState } from 'react'
function WithoutDebouncingWithHooks(props){
        const[input,setInput]=useState('')
        const[isLoading,setLoading]=useState(false)
        const[errorMsg,setErrorMsg]=useState('')
        const[result,setResult]=useState([])


        const handleInputChange = (evt)=>{
            const inputText = evt.target.value
            setInput(inputText)
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
        return(
            <>
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
export default WithoutDebouncingWithHooks