import React from 'react';
import Input from './ChildRef';
class ParentRef extends React.Component{
    constructor(props){
        super(props);
        this.state={}
        this.compRef = React.createRef()
    }
    handleFocusInput(){
        this.compRef.current.focusInput()
    }
    render(){
        return(
            <>
           <Input ref={this.compRef}/>
            <button onClick={()=>this.handleFocusInput()}>FocusInput(child to Parent)</button>
            <h2>{this.props.color}</h2> 
            </>
        )
    }
}
export default ParentRef;
ParentRef.defaultProps={
    color:'red'
}