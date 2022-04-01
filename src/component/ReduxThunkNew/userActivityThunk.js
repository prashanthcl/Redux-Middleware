import React from 'react';
import {getToDoListThunk} from './Actions/index'
import {connect} from 'react-redux';
function UserActivityThunk(props){

    const{toDoListThunkRes} = props;

    const handleToDoList = ()=>{
        props.getToDoListThunk()
    }

    return(
        <>
        <button onClick={handleToDoList}>GETTODO-Thunk</button>
        {toDoListThunkRes!==undefined && console.log(toDoListThunkRes.length)}
        <ul>
            {
    toDoListThunkRes.map((posts, ind) => {
        return (
          <li key={posts.id}>
            {posts.title}
            {/* <div>
              <button onClick={() => handleDelete(ind)}>Delete</button>
            </div> */}
          </li>
        );
      })
            }
        </ul>
    
        </>
    )
}

const mapStateToProps = state=>{
    return{
        toDoListThunkRes: state.toDoListThunk
    }
}

export default connect(mapStateToProps,{getToDoListThunk}) (UserActivityThunk);