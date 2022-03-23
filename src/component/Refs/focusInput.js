import React from 'react';
import CallBackRefFocusInput from './callbackRef';
import ChildTOParentFocusInput from './ChildToParentRef/ParentRef';
import ForwardParentInputComp from './ForwardRefs/ForwardParentInput';
class FocusInputComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
        this.focusInputRef = React.createRef();
        this.handleFocus = this.handleFocus.bind(this);
    }
    handleFocus(){
        this.focusInputRef.current.focus()
    }
    render(){
        return(
            <>
            <input type="text" ref={this.focusInputRef}></input>
            <button onClick={this.handleFocus}>Focus Input</button> <br/>
            <CallBackRefFocusInput/><br/>
            <ChildTOParentFocusInput/><br/>
            <ForwardParentInputComp/>
            </>
        )
    }
}
export default FocusInputComponent;