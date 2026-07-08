
import { createHashRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotesLayout from "./NotesLayout";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";


export const router = createHashRouter([

  {

    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // Dynamic Course Route
      {
        path: "notes/:course",
        element: <NotesLayout />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,

  },

]); 