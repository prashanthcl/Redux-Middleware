import React from "react";
import "./dashboard.css";
import {history} from '../../history';
import ProfilePic from '../../images/logo192.png';
function Dashboard(props) {
  const handleDebouncing = (evt)=>{
    // console.log("Debouncing called!!!",props)
    // console.log("History",history)
    props.history.push("/reactdebounce")
  }
  const handleReduxThunk = ()=>{
    props.history.push("/reduxthunk")
  }
  const handleFunctionalComp = ()=>{
    props.history.push('/funccomp')
  }
  const handleClassComp = ()=>{
    props.history.push('/classcomp')
  }
  function handlePropsComp(){
    props.history.push('/props')
  }
  const handleStateComp = ()=>{
    props.history.push('/state')
  }
  function handleConditionalRendering(){
    props.history.push('/condRendering')
  }
  const handleLifeCycle = ()=>{
    props.history.push('/lifecycle')
  }
  const handleErrorBoundary = ()=>{
    props.history.push('/errorboundary');
  }
  function handleFocusInput(){
    props.history.push('/focusInput');
  }
  const handlePortal = ()=>{
    props.history.push('/portal');
  }
  function handleHoc(){
    props.history.push('/hoc');
  }
  function handleContext(){
    props.history.push('/context');
  }
  const handleCounter = ()=>{
    props.history.push('/counter')
  }
  function handleUseEffect(){
    props.history.push('/useEffect')
  }
  const handleUseContext = ()=>{
    props.history.push('/usecontext')
  }
  const handleUseReducer = ()=>{
    props.history.push('/usereducer')
  }
  const handleUseCallback = ()=>{
    props.history.push('/usecallback')
  }
  return (
    <React.Fragment>
      <div >
        <header className="header">
          <div className="header__search">React.JS Concepts</div>
          <div className="header__avatar"><a href={ProfilePic}>
           <img src={ProfilePic} alt="Paris"></img></a></div>
        </header>
        {/* <aside className="sidenav">
          <ul className="sidenav__list">
            <li className="sidenav__list-item">Item One</li>
            <li className="sidenav__list-item">Item Two</li>
            <li className="sidenav__list-item">Item Three</li>
            <li className="sidenav__list-item">Item Four</li>
            <li className="sidenav__list-item">Item Five</li>
          </ul>
        </aside> */}
        <main className="main">
          {/* <div className="main-header"> */}
            <button id="rcorners1" title="debouncing" onClick={handleDebouncing}>Debouncing</button>
           
            <button id="rcorners1" title="FunCComp" onClick={handleFunctionalComp}>Functional Component</button>
            <button id="rcorners1" title="ClassComp" onClick={handleClassComp}>Class Component</button>
            <button id="rcorners1" title="propsComp" onClick={handlePropsComp}>Props</button>
            <button id="rcorners1" title="propsComp" onClick={handleStateComp}>Use Of State</button>
            <button id="rcorners1" title="propsComp" onClick={handleConditionalRendering}>Conditional Rendering</button>
            <button id="rcorners1" title="lifecycle" onClick={handleLifeCycle}>LifeCycle Methods-(class Component)</button>
            <button id="rcorners1" title="errorboundary" onClick={handleErrorBoundary}>Error Boundary</button>
            <button id="rcorners1" title="focusInput" onClick={handleFocusInput}>CreateRef</button>
            <button id="rcorners1" title="portal" onClick={handlePortal}>Portal</button>
            <button id="rcorners1" title="hoc" onClick={handleHoc}>HOC(Higher Order Component)</button>
            <button id="rcorners1" title="context" onClick={handleContext}>context(props drilling)</button>
            {/* <button id="rcorners1">Error Handling</button> */}
            <button id="rcorners1" title="counter" onClick={handleCounter}>useState</button>
            <button id="rcorners1" title="counter" onClick={handleUseEffect}>useEffect</button>
            <button id="rcorners1" title="counter" onClick={handleUseContext}>useContext</button>
            <button id="rcorners1" title="reducer" onClick={handleUseReducer}>useReducer</button>
            <button id="rcorners1" title="callback" onClick={handleUseCallback}>useCallback</button>
            <button id="rcorners1">useMemo</button>
            {/* <button id="rcorners1">useReducer</button> */}
            <button id="rcorners1" title="useRef" onClick={()=>props.history.push('/useref')}>useRef</button>
            <button id="rcorners1" title="customHook" onClick={()=>props.history.push('/customhook')}>Custom Hook</button>
            <button id="rcorners1" title="Redux" onClick={handleReduxThunk}>Redux-thunk(Middleware)</button>
            <button id="rcorners1" title="reduxsaga" onClick={()=>props.history.push('/reduxsaga')}>Redux-Saga</button>
          {/* </div> */}
        </main>
        <footer className="footer">
          {/* <div className="footer__copyright">&copy; </div>
          <div className="footer__signature"></div> */}
        </footer>
      </div>
    </React.Fragment>
  );
}
export default Dashboard;
