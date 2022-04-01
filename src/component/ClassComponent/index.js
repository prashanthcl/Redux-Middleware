
import React from 'react';
import ClassCompImage from '../../images/ClassComp.PNG';
import ReuseComp from '../reusableComp';

class ClassComponent extends React.Component{

    state={
        display:false
    }

    handleDisplay(){
        this.setState({display:true})
    }
    handleClose(){
        this.setState({display:false})
    }
    render(){

        return(
            <React.Fragment>
                {/* <header style={{padding:"20px",marginLeft:'85%'}}>
                    <button onClick={this.showSourceCode.bind(this)}>Source Code </button>
                    <button onClick={this.cancelSourceCode.bind(this)}>Close</button>
                </header>
            */}
               <ReuseComp setDisplay={this.handleDisplay.bind(this)} setClose={this.handleClose.bind(this)}/>
                <i><h2>Welcome to Class Component---- StateFull Component</h2></i>
                <header>
                <h2>Header Section</h2>
                </header>
                <main>
                    <aside>
                    <h2>Text</h2>
                    </aside>
                    <aside>
                
                    </aside>
                </main>
                <footer>
                {`Welcome to Footer Section`}
                </footer>
                {this.state.display && <img src={ClassCompImage} alt="ClassComponent" ></img>}
                </React.Fragment>
        )
    }
}
export default ClassComponent;