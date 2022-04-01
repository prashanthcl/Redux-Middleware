import React from 'react';
function UseRefComponent(props){
    const inputRef = React.useRef();
    const handleFocusInput = ()=>{
        inputRef.current.focus()
    }
    return(
        <>
        <input type="text" ref={inputRef}/>
        <button onClick={handleFocusInput}>Focus Input</button>
        </>
    )
}
export default UseRefComponent;