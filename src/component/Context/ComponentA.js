import React from 'react';
import {Provider} from './Context'
import ComponentB from './ComponentB';

    const obj= {
        name:'Prashant Kumar Singh',
        CompName:'HCL Technologies Limited'
    }
class ComponentA extends React.Component{

    render(){

        return(
            <>
            <Provider value={obj}>
              <ComponentB/>  
            </Provider>
            </>
        )
    }
}
export default ComponentA;