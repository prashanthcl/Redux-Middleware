import React, { useState } from 'react';
function CounterThree(props){

    const[name,setName]=useState({firstname:'',lastname:''})

    // const handleInputChange = (e)=>{
    //     setName({...name,firstname:e.target.value})
    // }


    return(
        <>
        <div>
            <label>FirstName</label>
            <input type="text" name="firstname" value={name.firstname} onChange={(e)=>setName({...name,firstname:e.target.value})}/>
        </div>
        <div>
            <label>LastName</label>
            <input type="text" name="lastname" value={name.lastname} onChange={(e)=>setName({...name,lastname:e.target.value})}/>
        </div>
        <div>
            <h2>Your First Name is:{name.firstname}</h2>
            <h2>Your Last Name is:{name.lastname}</h2>
        </div>
        </>
    )
}
export default CounterThree;