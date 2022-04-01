import React, { useEffect, useState } from 'react';
import axios from 'axios';
function DataFetching(){
    const[error,setError]=useState()
    const[isLoading,setLoading]=useState(true)
    const[data,setData]=useState({})
    useEffect( ()=>{

      axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((response)=>{
            setLoading(false)
            setData(response)
            setError('')
        })
        .catch((error)=>{
            setLoading(false)
            setError('Try after some time')
            setData([])
        })
        
    },[])
    return(
        
        <>
        {/* {console.log(data)} */}
        {error ? error :null}
        {isLoading ? <div>Loading...</div> :  data.data.title}
        </>
    )
}
export default DataFetching;