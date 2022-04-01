import React,{useContext} from 'react';
import {context} from './componentC';

function ComponentF(props){
    const Consumer = context.Consumer;
    const contextVal = useContext(context);
    console.log(contextVal)
    return(
        <>
        {/* <Consumer>
            {
                ele=>{
                    return <>{ele}</>
                }
            }

        </Consumer> */}
        
        {contextVal}
        </>
    )
}
export default ComponentF;