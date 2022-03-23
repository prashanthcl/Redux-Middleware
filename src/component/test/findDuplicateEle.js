import React, { useState } from 'react'
function FindDuplicate(props){
    const arrEle = [5,3,4,2,3,7,5,6]
    // const [arr,setArr] = useState(initalArr)
    const[dupEle,setDupEle]= useState([])

    const findDuplicate = ()=>{
        // console.log(arrEle)
     const result = arrEle.filter((item,index)=> (
         console.log(item,index),
        arrEle.indexOf(item)!==index)
     )
     console.log(result)
     setDupEle(result)
    }

    return(
        <>
        <h2>Finding Duplicate Elements from an Array</h2>
        <h3>{`[5,3,4,2,3,7,5,6]`}</h3>
        <button onClick={ findDuplicate }>Show Duplicate</button>
        <ul>
            {dupEle.map((ele,ind)=>{
                return <li key={ind}>{ele}</li>
            })}
        </ul>
        </>
    )
}
export default FindDuplicate