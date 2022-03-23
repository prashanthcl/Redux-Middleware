import React from 'react';
import ComponentC from './ComponentC';
class ComponentB extends React.Component{
    render(){
        return(
            <>
            <h2>Component B is called</h2>
            <ComponentC/>
            </>
        )
    }
}
export default ComponentB;