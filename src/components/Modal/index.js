import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import uuid from "uuid-v4";
import { addTodo } from "./../../actions/todoAction";

function Modal() {
  const [titleInput, setTitleInput] = useState("");
  const dispatch = useDispatch();
  const titleInputRef = useRef();
  const handleAdd = () => {
    if (titleInput !== "") {

      dispatch(addTodo(      { id: uuid(), title: titleInput }      ));


      setTitleInput("");
      titleInputRef.current.focus();
    } else {
      alert("Bạn chưa nhập title!!");
      titleInputRef.current.focus();
    }
  };
  return (
    <>
      <h1>ADD TODO</h1>
      <input
        value={titleInput}
        ref={titleInputRef}
        onChange={(e) => setTitleInput(e.target.value)}
      />
      <div>
        <button onClick={handleAdd}>ADD</button>
      </div>
    </>
  );
}

export default Modal;
