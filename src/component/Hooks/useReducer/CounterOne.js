import React, { useReducer } from 'react';
// import DataFetching from './DataFetching/DataFetchingOne';
const initialState = 0;
const reducer = (state,action)=>{

    switch(action.type){
        case 'inc':return state + 1;
        case 'dec':return state - 1;
        case 'reset':return initialState;
        default: return state;
    }
}
function CounterOne(){
     
        const[count,dispatch]=useReducer(reducer,initialState)

    return(
        <>
        <h2>Count:{count}</h2>
        <button onClick={()=>dispatch({type:'inc'})}>Increment</button>
        <button onClick={()=>dispatch({type:'dec'})}>Decrement</button>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button> <br/>
        {/* <DataFetching/> */}
        </>
    )
}
export default CounterOne;