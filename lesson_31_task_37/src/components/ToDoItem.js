import React from "react";
import style from "./ToDoItem.module.css";

const DONE = "Зроблено";
const NOT_DONE = "Не зроблено";

const ToDoItem = ({ id, title, isDone, toDoIsDone }) => {
  if (isDone) {
    return (
      <div className={style.item_done} onClick={handleClick}>
        <div id={id} className={style.title_item}>
          {title}
        </div>
        <div className={style.todo_item}>{DONE}</div>
      </div>
    );
  }

  return (
    <div className={style.item}>
      <div id={id} className={style.title_item} onClick={handleClick}>
        {title}
      </div>
      <div className={style.todo_item}>{NOT_DONE}</div>
    </div>
  );

  function handleClick(e) {
    toDoIsDone(e.target.id);
  }
};

export default ToDoItem;
