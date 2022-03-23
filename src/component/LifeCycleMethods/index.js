import React from 'react';

class LifeCycleMethods extends React.Component{
    // 1. Mounting Phase
     constructor(props){
         super(props);
         this.state={count:0}
         this.inpuRef = React.createRef();
         this.handleClick = this.handleClick.bind(this);
     }
     static getDerivedStateFromProps(props,state){
        return {}
     }
     
     handleClick(){
         this.setState((state)=>{
             return {count:state.count+1}
         })
        //  this.setState({count:this.state.count+1})
     }
    render(){
        const{count}=this.state;
        return(
            <>
            <h1>Count: {count}</h1>
            <button onClick={this.handleClick}>Click</button>
            </>
        )
    }
    componentDidMount(){

    }
    // 2. Unmounting Phase

    // static getDerivedStateFromProps(props,state){
    //     return{ }
    // }
    shouldComponentUpdate(nextProps,nextState){
        return true;
    }
    // render(){

    // }
    getSnapshotBeforeUpdate(prevProps,prevState){
        return null
    }
    componentDidUpdate(prevProps,prevState,snapshot){
    }

    // 3. Unmounting Phase
    componentWillUnmount(){

    }
    // 4. Error Handling
    static getDerivedStateFromError(error){

    }
    componentDidCatch(error,info){

    }
    
}
export default LifeCycleMethods;