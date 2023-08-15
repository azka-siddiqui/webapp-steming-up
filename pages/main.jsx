import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { News } from "../components/News.jsx";
import { Landing } from "../components/Landing.jsx"

// setup router
const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
    },
    {
    path: "/news",
    element: <News />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);