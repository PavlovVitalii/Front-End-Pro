import React, { useState } from "react";
import style from "./Input.module.css";

const TITLE = "Перелік завдань";
const BUTTON_TITLE = "Зберегти";

const InputForm = ({ addToDo }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    addToDo(value);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={style.item}>
      <h2>{TITLE}</h2>
      <div className={style.input_form}>
        <input type="text" value={value} onChange={handleChange}></input>
        <button onClick={handleClick}>{BUTTON_TITLE}</button>
      </div>
    </div>
  );
};
export default InputForm;
