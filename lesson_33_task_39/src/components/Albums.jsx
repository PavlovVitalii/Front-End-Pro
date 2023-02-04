import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Albums = () => {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
      .then((response) => response.json())
      .then((data) => {
        setAlbums(data);
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>User ID</th>
          <th>Title</th>
          <th>Photos</th>
        </tr>
      </thead>
      <tbody>
        {albums.map((el) => {
          return (
            <tr key={el.id}>
              <td>{el.userId}</td>
              <td>{el.title}</td>
              <td>
                <Link to={`/photos/${el.id}`}>Photos</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Albums;
