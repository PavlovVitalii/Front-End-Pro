import { useDispatch, useSelector } from "react-redux";
import style from "./Input.module.css";
import { ADD_VALUE } from "../rdx/reducer";

const TITLE = "Перелік завдань";
const BUTTON_TITLE = "Зберегти";

const InputForm = ({ addToDo }) => {
  const inputValue = useSelector((state) => state.inputValue);
  const dispatch = useDispatch();

  const handleClick = () => {
    addToDo(inputValue);
    dispatch({ type: ADD_VALUE, payload: "" });
  };

  const handleChange = (e) => {
    dispatch({ type: ADD_VALUE, payload: e.target.value });
  };

  return (
    <div className={style.item}>
      <h2>{TITLE}</h2>
      <div className={style.input_form}>
        <input type="text" value={inputValue} onChange={handleChange}></input>
        <button onClick={handleClick}>{BUTTON_TITLE}</button>
      </div>
    </div>
  );
};
export default InputForm;
