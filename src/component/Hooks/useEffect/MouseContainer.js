import React, { useState } from 'react';
import HookMouse from './HookMouse';
import HookCounter from './HookCounter';
function MouseContainer(props){
    const[display,setDisplay]=useState(false);
    return(
        <>
        <button onClick={()=>setDisplay(!display)}>Toogle Display</button>
      {display &&  <HookMouse/>}<br/>
      <HookCounter/>
        </>
    )
}
export default MouseContainer