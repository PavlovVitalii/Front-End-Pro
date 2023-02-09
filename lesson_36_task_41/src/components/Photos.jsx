import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectPhotos, fetchPhotos } from "../rdx/reducer";

const Photos = () => {
  const { albumId } = useParams();
  const dispatch = useDispatch();
  const photos = useSelector(selectPhotos);

  useEffect(() => {
    dispatch(fetchPhotos(albumId));
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
