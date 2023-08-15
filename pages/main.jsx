import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

import News from "../components/News.jsx";
import "./_app.js"
import Home from "./index.js"

// setup router
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
    path: "news",
    element: <News />,
    },
]);

const root = ReactDOM.createRoot(documen.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);