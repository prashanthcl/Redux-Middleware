import { useState } from "react";
import ReuseComp from "../reusableComp";
import ClassCompImage from '../../images/funcComp.PNG';
function FunctionalComponent(props){
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
        <h2>Welcome to Functional Component---Stateless Component</h2>
        {display && <img src={ClassCompImage} alt="ClassComponent" ></img>}
        </>
    )
}
export default FunctionalComponent;