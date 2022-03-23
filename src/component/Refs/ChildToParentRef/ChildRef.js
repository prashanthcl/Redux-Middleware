import React from 'react';
class ChildRefComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={};
        this.inputRef = React.createRef();
    }

    focusInput(){
        this.inputRef.current.focus()
    }

    render(){
        return(
            <>
            <input type="text" ref={this.inputRef}/>
            </>
        )
    }
}
export default ChildRefComponent;