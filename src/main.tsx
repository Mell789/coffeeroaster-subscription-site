import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { createHashRouter, RouterProvider } from "react-router-dom";

import "./font.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./default.css";
import "./csslibrary.css";
import "./Media.css";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Plan from "./pages/Plan.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/plan",
        element: <Plan />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
