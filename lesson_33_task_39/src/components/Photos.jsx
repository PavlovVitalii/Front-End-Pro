import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Photos = () => {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .then((response) => response.json())
      .then((data) => setPhotos(data.map((el) => el)));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Album ID</th>
          <th>Title</th>
          <th>Icon</th>
        </tr>
      </thead>
      <tbody>
        {photos.map((el) => {
          return (
            <tr key={el.id}>
              <td>{el.albumId}</td>
              <td>{el.title}</td>
              <td>
                <img src={el.thumbnailUrl} alt={`icon: ${el.id}`} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Photos;
