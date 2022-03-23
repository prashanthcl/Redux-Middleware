import React from 'react';
import ComponentD from './ComponentD';
class ComponentC extends React.Component{
    render(){
        return(
            <>
            <h2>Component C is called</h2>
            <ComponentD/>
            </>
        )
    }
}
export default ComponentC;