import React,{useState} from 'react'
import ChildComponent from './childComponent';
import ReuseComp from "../reusableComp";
import ClassCompImage from '../../images/parentlatest.PNG';
import ClassCompImage1 from '../../images/childComplatest.PNG';
function ParentComponent(props){
    const[display,setDisplay]=useState(false)
    const handleDisplay = ()=>{
        setDisplay(true)
    }
    const handleClose = ()=>{
        setDisplay(false)
    }
    return(
        <>
          <ReuseComp setDisplay={handleDisplay} setClose={handleClose}/>
        <ChildComponent name={`"Prashant Kumar Singh" `}/>
        {display && <img src={ClassCompImage} alt="ClassComponent" ></img>}
        {display && <img src={ClassCompImage1} alt="ClassComponent" ></img>}
        </>
    )
}
export default ParentComponent;