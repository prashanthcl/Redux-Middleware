import React from "react";
// import {history} from '../history'
// import useCustomHideShowSourceCode from './useDisplayHide'
function ReuseComp(props) {
  // const [display,openSourceCode,hideSourceCode] = useCustomHideShowSourceCode()
  return (
    <>
      <header style={{ padding: "20px", marginLeft: "85%" }}>
        <button onClick={props.setDisplay}>Source Code </button>
        <button onClick={props.setClose}>Close</button>


{/* 
         <button onClick={openSourceCode}>Source Code </button>
         <button onClick={hideSourceCode}>Close</button> */}
      </header>
    </>
  );
}
export default ReuseComp;
