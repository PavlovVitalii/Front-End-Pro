const initialState = {
  users: [],
  albums: [],
  photos: [],
};

export const USERS = "users";
export const ALBUMS = "albums";
export const PHOTOS = "photos";

export const usersAction = (users) => {
  return {
    type: USERS,
    payload: users,
  };
};

export const albumsAction = (albums) => {
  return {
    type: ALBUMS,
    payload: albums,
  };
};

export const photosAction = (photos) => {
  return {
    type: PHOTOS,
    payload: photos,
  };
};

export const selectUsers = (state) => state.users;
export const selectAlbums = (state) => state.albums;
export const selectPhotos = (state) => state.photos;

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS:
      return { ...state, users: action.payload };
    case ALBUMS:
      return { ...state, albums: action.payload };
    case PHOTOS:
      return { ...state, photos: action.payload };

    default:
      return state;
  }
};

export const fetchUsers = () => {
  return (dispatch, getState) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        dispatch(usersAction(data));
      });
  };
};

export const fetchAlbums = (userId) => {
  return (dispatch, getState) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(albumsAction(data));
      });
  };
};

export const fetchPhotos = (albumId) => {
  return (dispatch, getState) => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .then((response) => response.json())
      .then((data) => dispatch(photosAction(data)));
  };
};
