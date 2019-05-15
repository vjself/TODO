import axios from "axios";

const initialState = {
  todos: []
};

const GET_TODOS = "GET_TODOS";
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const MARK_COMPLETE = "MARK_COMPLETE";
const EDIT_TODO = "EDIT_TODO";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS + "_FULFILLED":
      return { todos: action.payload };
    case ADD_TODO + "_FULFILLED":
      return { todos: action.payload };
    case DELETE_TODO + "_FULFILLED":
      return { todos: action.payload };
    case MARK_COMPLETE + "_FULFILLED":
      return { todos: action.payload };
    case EDIT_TODO + "_FULFILLED":
      return { todos: action.payload };
    default:
      return state;
  }
}

export const getTodos = () => {
  let data = axios
    .get("https://practiceapi.devmountain.com/api/tasks")
    .then(res => res.data);
  return {
    type: GET_TODOS,
    payload: data
  };
};

export const addToDo = title => {
  let data = axios
    .post("https://practiceapi.devmountain.com/api/tasks", {
      title
    })
    .then(res => res.data);
  return {
    type: ADD_TODO,
    payload: data
  };
};

export const deleteToDo = id => {
  let data = axios
    .delete(`https://practiceapi.devmountain.com/api/tasks/${id}`)
    .then(res => res.data);
  return {
    type: ADD_TODO,
    payload: data
  };
};

export const editToDo = (id, title, description) => {
  console.log(id, description, title);
  let data = axios
    .patch(
      `https://practiceapi.devmountain.com/api/tasks/${id}, ${{
        title,
        description
      }}`
    )
    .then(res => res.data);
  return {
    type: EDIT_TODO,
    payload: data
  };
};

export const markComplete = id => {
  let data = axios
    .put(`https://practiceapi.devmountain.com/api/tasks/${id}`)
    .then(res => res.data);
  return {
    type: MARK_COMPLETE,
    payload: data
  };
};
