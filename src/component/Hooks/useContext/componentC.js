import React,{createContext} from 'react';
import ComponentD from './componentD';
export const context = createContext();
export const Provider = context.Provider;
function ComponentC(props){
    return(
        <>
        <Provider value="Prashant Kumar Singh">
        <ComponentD/>
        </Provider>
     
        </>
    )
}
export default ComponentC;