import React, { useState } from 'react';
function CounterFour(props){

    const[item,setItem]=useState([])

    const addItem = ()=>{
        setItem([...item,{id:item,value:Math.floor(Math.random()*10)+1}])
    }

   
    return(
        <>
        <div>
        <button onClick={addItem}>AddItem</button>
        </div>
       
        <ul>
            {
                item.map((value)=>{
                    return <li key={value.id}>{value.value}</li>
                })
            }
        </ul>
        </>
    )
}
export default CounterFour;