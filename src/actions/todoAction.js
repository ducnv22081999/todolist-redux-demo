import { ADD_TODO, REMOVE_TODO } from "./../contants/todoContant";

const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

export { addTodo, removeTodo };
