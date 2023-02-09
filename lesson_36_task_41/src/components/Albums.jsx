import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAlbums, fetchAlbums} from "../rdx/reducer";


const Albums = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const albums = useSelector(selectAlbums);

  useEffect(() => {
    dispatch(fetchAlbums(userId));
    
  }, [dispatch]);

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
