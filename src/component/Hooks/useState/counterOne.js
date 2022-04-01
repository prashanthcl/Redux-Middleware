import React from 'react'
import CounterFour from './counterFour';
import CounterThree from './counterThree';
import CounterTwo from './counterTwo';
import ToDoTask from './toDoTask';
function CounterOne(props){

    const[count,setCount] = React.useState(0);

    return(
        <React.Fragment>
            <button onClick={()=>setCount(count+1)}>Counter:{count}</button><br/>
            <CounterTwo/><br/>
            <CounterThree/><br/>
            <CounterFour/><br/>
            <ToDoTask/>
        </React.Fragment>
    )
}
export default CounterOne;