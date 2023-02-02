import React, { useState, useEffect } from "react";
import Form from "./Form";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) =>
        setUsers(
          data.map((el) => {
            return {
              id: el.id,
              userName: el.name.split(" ")[0],
              userSurname: el.name.split(" ")[1],
              phone: el.phone,
            };
          })
        )
      );
  }, []);

  const handleDelete = (e) => {
    setUsers(users.filter((el) => el.id !== Number(e.target.id)));
  };

  const showModal = () => {
    document.querySelector(".modal_container").style.visibility = "visible";
  };

  const addUser = (user) => {
    setUsers([...users, { ...user, id: users.length + 1 }]);
    console.log(users);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Phone</th>
            <th>Remove button</th>
          </tr>
        </thead>
        <tbody>
          {users.map((el) => {
            return (
              <tr key={el.id}>
                <td>{el.userName}</td>
                <td>{el.userSurname}</td>
                <td>{el.phone}</td>
                <td>
                  <button
                    className="remove_btn"
                    onClick={handleDelete}
                    id={el.id}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={showModal}>Add User</button>
      <Form addUser={addUser} />
    </>
  );
};

export default Users;
