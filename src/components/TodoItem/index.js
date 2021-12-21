import { useDispatch } from "react-redux";
import { removeTodo } from "./../../actions/todoAction";

function TodoItem({ data }) {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <span>Title: {data.title}</span>
        <button onClick={() => dispatch(removeTodo(data.id))}>Xóa</button>
      </div>
    </>
  );
}

export default TodoItem;
