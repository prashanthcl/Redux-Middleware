import React from 'react';
class StateComponent extends React.Component{
    state={
        message:'Welcome Visitor',
        count:0
    }
    handleMessage(){
        const{message}=this.state
        if(!message.includes('Thanks')){
            this.setState({message:'Thanks'})
        }
        else{
            this.setState({message:'Welcome Visitor'})
        }
          
        }
        handleIncrement(){
        //   this.state.count = this.state.count +1
        //   console.log(this.state.count)
          this.setState({count:this.state.count+1},()=>{
            console.log("Async",this.state.count)
          })
          console.log("sync",this.state.count)

        }
    render(){
        return(
            <>
        <h1>{this.state.message}--Concept of State in class Component</h1>
        <button onClick={this.handleMessage.bind(this)}>Subscribe/Unsubscribe</button>
        <div>
            <h2>Count:{this.state.count}</h2>
        <button onClick={this.handleIncrement.bind(this)}>Increment</button>
        </div>
      
            </>
        )
    }
}
export default StateComponent;