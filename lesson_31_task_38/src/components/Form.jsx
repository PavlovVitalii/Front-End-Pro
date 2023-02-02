import React from "react";
import { useState } from "react";

const Form = ({ addUser }) => {
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const cacelClick = () => {
    document.querySelector(".modal_container").style.visibility = "hidden";
    setUser({});
  };

  const addClick = () => {
    document.querySelector(".modal_container").style.visibility = "hidden";
    setUser({});
    addUser(user);
  };
  return (
    <div className="modal_container">
      <div className="modal_item">
        <input
          type="text"
          placeholder="Enter name"
          name="userName"
          onChange={handleChange}
          value={user.userName || ""}
        />
        <input
          type="text"
          placeholder="Enter surname"
          name="userSurname"
          onChange={handleChange}
          value={user.userSurname || ""}
        />
        <input
          type="number"
          placeholder="Enter phone"
          name="phone"
          onChange={handleChange}
          value={user.phone || ""}
        />
        <button className="ok_btn" onClick={addClick}>
          Ok
        </button>
        <button className="cancel_btn" onClick={cacelClick}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Form;
