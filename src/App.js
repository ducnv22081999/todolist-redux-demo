import Modal from "./components/Modal";
import TodoList from "./components/TodoList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div>
        <Modal />
        <TodoList />
      </div>
    </div>
  );
}
