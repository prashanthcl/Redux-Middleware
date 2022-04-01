import React, { useEffect, useState } from 'react';
function HookCounter(props){
    const[count,setCount]=useState(0)
    useEffect(()=>{
        console.log(`UseEffect updating document`)
        document.title= `You clicked ${count} times`
    },[count])
    return(
        <>
        <button onClick={()=>setCount(prevCount=>prevCount+1)}>Clicked {count} times</button>
        </>
    )
}
export default HookCounter;