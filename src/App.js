import React from 'react';
import Dashboard from './component/Dashboard/index';
import Debounce from './Debouncing/DebouncingWithHooks';
import FindDuplicate from './component/test/findDuplicateEle';
import Users from './component/User/user';
import userActivityThunk from './component/ReduxThunkNew/userActivityThunk';
import{Routes,Route,BrowserRouter,HashRouter,Switch} from 'react-router-dom';
import {history} from './history';
import FunctionalComponent from './component/FunctionalComponent';
import ClassComponent from './component/ClassComponent';
import PropsComponent from './component/Props/ParentComponent';
import StateComponent from './component/State';
import CondionalRenderingComponent from './component/ConditionalRendering';
import LifeCycleMethods from './component/LifeCycleMethods';
import HeroName from './component/ErrorBoundary/HeroName';
import FocusInputComponent from './component/Refs/focusInput';
import PortalComponent from './component/Portal';
import ClickCounter from './component/HOC/clickCounter';
import ComponentA from './component/Context/ComponentA';
import CounterOne from './component/Hooks/useState/counterOne';
import HookMouse from './component/Hooks/useEffect/MouseContainer';
import UseContext from './component/Hooks/useContext/componentC';
import CounterOneUseReducer from './component/Hooks/useReducer/CounterOne';
import ParentCallback from './component/Hooks/useCallback/ParentComponentCallback';
import UseRefComponent from './component/Hooks/useRef';
import CustomHookComponent from './component/Hooks/customHooks/counter';
import UserActivity from './component/ReduxSagaNew/userActivity'
function App(){
    return(
        <>
        {/* <Dashboard/> */}
        <HashRouter history={history}>
            <Switch>
            {/* <Routes history={history}> */}
            <Route path="/" component={Dashboard} exact/>
            <Route path="/reactdebounce" component={Debounce} exact />
            <Route path="/reduxthunk" component={userActivityThunk} exact/>
            <Route path="/funccomp" component={FunctionalComponent} exact/>
            <Route path="/classcomp" component={ClassComponent} exact/>
            <Route path="/props" component={PropsComponent} exact/>
            <Route path="/state" component={StateComponent} exact/>
            <Route path="/condRendering" component={CondionalRenderingComponent} exact/>
            <Route path="/lifecycle" component={LifeCycleMethods} exact/>
            <Route path="/errorboundary" component={HeroName} exact/>
            <Route path="/focusInput" component={FocusInputComponent} exact/>
            <Route path="/portal" component={PortalComponent} exact/>
            <Route path="/hoc" component={ClickCounter} exact/>
            <Route path="/context" component={ComponentA} exact/>
            <Route path="/counter" component={CounterOne} exact/>
            <Route path="/useEffect" component={HookMouse} exact/>
            <Route path="/usecontext" component={UseContext} exact/>
            <Route path="/usereducer" component={CounterOneUseReducer} exact/>
            <Route path="/usecallback" component={ParentCallback} exact/>
            <Route path="/useref" component={UseRefComponent} exact/>
            <Route path="/customhook" component={CustomHookComponent} exact/>
            <Route path="/reduxsaga" component={UserActivity} exact/>
            {/* </Routes> */}
            </Switch>
            </HashRouter>
        </>
    )
}
export default App