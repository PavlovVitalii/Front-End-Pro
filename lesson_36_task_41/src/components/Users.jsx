import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchUsers } from "../rdx/reducer";
import { useDispatch, useSelector } from "react-redux";
import {selectUsers} from "../rdx/reducer"


const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

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
