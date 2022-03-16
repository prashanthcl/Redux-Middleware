import React,{Fragment} from 'react'
class Message extends React.Component {
    
    constructor(props){
      super(props)
      this.state={
        pFlag:false
      }
    }
    handlParagrahp(evt){
        const{pFlag}=this.state
        if(pFlag){
            this.setState({pFlag:false})
        }
        else{
            this.setState({pFlag:true})
        }
        
    }
    render() {
      const {pFlag} = this.state
      return (<React.Fragment>
            <a href="#" onClick={this.handlParagrahp.bind(this)}>Want to buy a new car?</a>
           {pFlag && <p>Call +11 22 33 44 now!</p>}
          </React.Fragment>);
    }
  }


  export default Message