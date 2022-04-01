import { GET_TODO_LIST } from "../Actions/Types";

const initialState = {
  toDoListThunk: [],
};

const toDoReducerThunk = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO_LIST:
      return {
        ...state,
        toDoListThunk: action.payload,
      };
      default: return state;
  }
 
};

export default toDoReducerThunk;
