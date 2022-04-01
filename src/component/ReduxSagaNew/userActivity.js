import React, { useEffect } from "react";
import { getPostData, getToDo } from "../ReduxSagaNew/Actions/index";
import { connect } from "react-redux";
import {store} from '../ReduxSagaNew/Store'
function UserActivity(props) {
  const { postDataRes, toDoListRes } = props;
    console.log(store.getState().PostDetailReducer.postDataResult);
  useEffect(() => {
      return()=>{
       
      }
  }, []);

  const getPostDetailData = () => {
    store.getState().toDoResult.toDoResult=[];
    props.getPostData();
  };
  function handleDelete(ind) {
    postDataRes.splice(ind, 1);
  }
  function getToDoList() {
    store.getState().PostDetailReducer.postDataResult=[];
    props.getToDo();
  }
  return (
    <>
      <button onClick={getPostDetailData}>GetPOSTS Data</button>Count:
      {postDataRes.length}
      <br />
      <button onClick={getToDoList}>Load ToDo List/button</button> Count:
      {toDoListRes.length}
      <ul>
        {postDataRes.length > 0
          ? postDataRes.map((posts, ind) => {
              return (
                <li key={posts.id}>
                  {posts.title}
                  <div>
                    <button onClick={() => handleDelete(ind)}>Delete</button>
                  </div>
                </li>
              );
            })
          : toDoListRes.map((posts, ind) => {
              return (
                <li key={posts.id}>
                  {posts.title}
                  <div>
                    <button onClick={() => handleDelete(ind)}>Delete</button>
                  </div>
                </li>
              );
            })}
      </ul>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    postDataRes: state.PostDetailReducer.postDataResult,
    toDoListRes: state.toDoResult.toDoResult,
  };
};

export default connect(mapStateToProps, { getPostData, getToDo })(UserActivity);
