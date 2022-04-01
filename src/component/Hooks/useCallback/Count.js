import React,{memo} from 'react';
function Count({text,count}){
    return(
        <>
        <h2>{text}-{count}</h2>
        </>
    )
}
export default memo(Count);