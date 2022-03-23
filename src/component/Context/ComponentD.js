import React from 'react';
import {Consumer} from './Context'
class ComponentD extends React.Component{
    render(){
        return(
            <>
               <h2>Component D is called</h2>
               <Consumer>
                   {
                       (element)=><div>Full Name: {element.name}-CompanyName: {element.CompName}</div>
                   }
               </Consumer>
            </>
        )
    }
}
export default ComponentD;