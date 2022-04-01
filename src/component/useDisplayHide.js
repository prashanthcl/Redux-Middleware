import React from 'react';
function useDisplayHide(){

    const[display,setDisplay] = React.useState(false);

        const openSourceCode = ()=>{
                setDisplay(true)
        }

        const hideSourceCode = ()=>{
            setDisplay(false)
        }

        return[display,openSourceCode,hideSourceCode]
  
}
export default useDisplayHide;