import React from "react";
class CondionalRenderingComponent extends React.Component {
    state={
        isLoggedIn:false
    }
    handleLoggedInValue(){
      this.setState({isLoggedIn:!this.state.isLoggedIn})
    }
  render() {
    //   Case1: if else conditional Rendering
    if(this.state.isLoggedIn){
        return <>
        <h2>Welcome Prashant Kumar Singh</h2>
        <button onClick={()=>this.handleLoggedInValue()}>LoggedInValue--Change</button>
        </>
    }
    else{
        return <>
    <h2>Welcome Guest</h2>
    <button onClick={this.handleLoggedInValue.bind(this)}>LoggedInValue--Change</button>
        </>
    }
    //  Case2: Element Variable
    // let message;
    // if(this.state.isLoggedIn){
    //     message=<div>Welcome Prashant Kumar Singh</div>
    // }
    // else{
    //     message=<div>Welcome Guest</div>
    // }
    // return(
    //   <>
    //    <div>{message}</div> 
    //    <button onClick={this.handleLoggedInValue.bind(this)}>LoggedInValue--Change</button>
    //   </>
    // )
    //  Case3: Ternary Conditional Operator
    // return(
    //     <>
    //     {this.state.isLoggedIn ? <div>Welcome Prashant Kumar Singh</div> : <div>Welcome Guest</div>}
    //     <button onClick={this.handleLoggedInValue.bind(this)}>LoggedInValue--Change</button>
    //     </>
    // )
    // Case4: Short Circuit Approadh
    // return(
    //   <>
    //     {this.state.isLoggedIn && <div>Welcome Prashant</div>}
    //     <button onClick={this.handleLoggedInValue.bind(this)}>LoggedInValue--Change</button>
    //   </>
    // )
  }
}
export default CondionalRenderingComponent;