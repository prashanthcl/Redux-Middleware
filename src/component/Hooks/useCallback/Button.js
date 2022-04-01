import React,{memo} from 'react';
function Button({handleClick,children}){
    return(
        <>
        <button onClick={handleClick}>{children}</button>
        </>
    )
}
export default memo(Button);