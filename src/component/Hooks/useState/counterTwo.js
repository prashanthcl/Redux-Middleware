import React, { useState } from 'react';
function CounterTwo(props){
const initialCount=0;
const[count,setCount]=useState(initialCount)
return(
    <React.Fragment>
         <h2>Count:{count}</h2>
        <button onClick={()=>setCount(prevCount=>prevCount+1)}>increment</button>
        <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
        <button onClick={()=>setCount(initialCount)}>Reset</button>
    </React.Fragment>
)
}
export default CounterTwo;