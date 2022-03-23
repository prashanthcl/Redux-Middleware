import React from 'react';
class CallBackRefFocusInput extends React.Component{
    constructor(props){
        super(props);
        this.state={}
        this.cbRef = null;
        this.setCbRef= element=>{
            this.cbRef = element
        }
        this.handleFocus = this.handleFocus.bind(this);
    }
    handleFocus(){
        this.cbRef.focus()
    }
    render(){
        return(
            <>
            <input type="text" ref={this.setCbRef}></input>
            <button onClick={this.handleFocus}>Focus Input(CallBackRef)</button>
            </>
        )
    }
}
export default CallBackRefFocusInput;