import React from 'react';
import useCounterFun from './useCounter';
function CustomHookCounter(props){
    // const initialCount=0
    // const[count,setCount] = React.useState(initialCount)
    
    const initialVal = 0
    const[count,increment,decrement,reset] = useCounterFun(initialVal)
    
    return(
        <>
        <h2>Count:{count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}
export default CustomHookCounter;