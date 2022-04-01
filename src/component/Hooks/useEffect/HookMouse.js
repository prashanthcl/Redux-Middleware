import React,{useEffect} from 'react';
function HookMouse(props){

    const[x,setX]=React.useState(0);
    const[y,setY]=React.useState(0);

    const logMousePosition= (e)=>{
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        window.addEventListener('mouseover',logMousePosition)
        return ()=>{
            window.removeEventListener('mouseover',logMousePosition)
        }
    },[])
  
    return(
        <>
        X-{x} and Y-{y}
      
        </>
    )
}
export default HookMouse;