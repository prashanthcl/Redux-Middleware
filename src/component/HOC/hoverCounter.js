import React from 'react';
import withCounter from './withCounter'
function HoverCounterComponent(props){
    // const[count,setCount] = React.useState(0);
    // function handleHoverClicked(){
    //     setCount(count+1)
    // }
return(
    <>
    <button onMouseOver={props.hocupdateCount}>Hover-Clicked-{props.hocCounter}</button>
    </>
)
}
export default withCounter(HoverCounterComponent);