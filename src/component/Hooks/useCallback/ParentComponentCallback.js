import React, { useState,useCallback } from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';
function ParentComponentCallBack(props){
    const[age,setAge]=useState(25);
    const[salary,setSalary]=useState(2500000);

    const incrAge = useCallback(()=>{
        setAge(age +1)
    },[age])
    const incrSalary = useCallback(()=>{
        setSalary(salary + 100000);
    },[salary])
    return(
        <>
      <h2>Usecallback function</h2>
        <Title/>
        <Count text="Age" count={age}/>
        <Button handleClick={incrAge}>Increment Age</Button>
        <Count text="Salary" count={salary}/>
        <Button handleClick={incrSalary}>Increment Salary</Button>
        </>
    )
}
export default ParentComponentCallBack;