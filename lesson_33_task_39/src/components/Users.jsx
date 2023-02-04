import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(
          data.map((el) => {
            return {
              id: el.id,
              name: el.name,
            };
          })
        );
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>User Name</th>
          <th>Posts</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <Link to={`/albums/${user.id}`}>Albums</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Users;
