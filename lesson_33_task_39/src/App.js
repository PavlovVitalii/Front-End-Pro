import Users from "./components/Users";
import Albums from "./components/Albums";
import Photos from "./components/Photos";
import React from "react";
import "./App.css";
import "@picocss/pico";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Users />,
    },
    {
      path: "/albums/:userId",
      element: <Albums />,
    },
    {
      path: "/photos/:albumId",
      element: <Photos />,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
