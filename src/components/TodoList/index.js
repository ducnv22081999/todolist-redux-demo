import { useSelector } from "react-redux";
import TodoItem from "./../TodoItem";
function TodoList() {
  const list = useSelector((state) => state.todoReducer.todos);
  return (
    <>
      <h1>Todo List</h1>
      {list.map((todo, index) => (
        <TodoItem key={index} data={todo} />
      ))}
    </>
  );
}

export default TodoList;
