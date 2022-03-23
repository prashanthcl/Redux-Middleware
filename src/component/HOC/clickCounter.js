import React from 'react';
import HoverCounterComponent from './hoverCounter';
import withCounter from './withCounter';
function ClickCounter(props){

    // const[count,setCount]=React.useState(0);
    // const handleCount = ()=>{
    //     setCount(count+1)
    // }
    return(
        <>
    <button onClick={props.hocupdateCount}>Count:{props.hocCounter}</button><br/>
    <HoverCounterComponent/>
        </>
    )
}
export default withCounter(ClickCounter);