import InputForm from "./components/Input";
import "./App.css";
import ToDoItem from "./components/ToDoItem";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [items, setItems] = useState([]);

  const addToDo = (value) => {
    if (value) {
      setItems([
        ...items,
        { id: nanoid(), title: value.trim(), isDone: false },
      ]);
    }
  };

  const toDoIsDone = (id) => {
    setItems(
      items.map((el) => {
        if (el.id !== id) {
          return el;
        }
        return { ...el, isDone: !el.isDone };
      })
    );
  };

  return (
    <div className="container">
      <InputForm addToDo={addToDo}></InputForm>
      {items.map((el) => {
    
        return (
          <ToDoItem
            id={el.id}
            title={el.title}
            key={el.id}
            isDone={el.isDone}
            toDoIsDone={toDoIsDone}
          ></ToDoItem>
        );
      })}
    </div>
  );
}

export default App;
