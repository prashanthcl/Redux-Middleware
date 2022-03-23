import React from 'react'
import ChildComponent from './childComponent';
function ParentComponent(props){
    return(
        <>
        <ChildComponent name={`"Prashant Kumar Singh" `}/>
        </>
    )
}
export default ParentComponent;