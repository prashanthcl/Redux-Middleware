import React from 'react';
import ForwardChildInput from './ForwardInput';
class ForwardParentInputComp extends React.Component{
    constructor(props){
        super(props);
        this.state={};
        this.inputRef = React.createRef();
    }
    handleForwardRef(){
        this.inputRef.current.focus()
    }
    render(){
        return(
            <>
            <ForwardChildInput ref={this.inputRef}/>
            <button onClick={this.handleForwardRef.bind(this)}>Focus Input-ForwardRef</button>
            </>
        )
    }
}
export default ForwardParentInputComp;