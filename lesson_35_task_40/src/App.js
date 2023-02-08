import "./App.css";
import InputForm from "./components/Input";
import React from "react";
import ToDoItem from "./components/ToDoItem";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ITEM , TO_DO_IS_DONE} from "./rdx/reducer";

function App() {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const addToDo = (value) => {
    if (value) {
      dispatch({
        type: ADD_ITEM,
        payload: [
          ...items,
          { id: nanoid(), title: value.trim(), isDone: false },
        ],
      });
    }
  };

  const toDoIsDone = (id) => {
    dispatch({
      type: TO_DO_IS_DONE,
      payload: items.map((el) => {
        if (el.id !== id) {
          return el;
        }
        return { ...el, isDone: !el.isDone };
      }),
    });
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
