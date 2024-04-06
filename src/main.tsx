import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import {
  createBrowserRouter,
  RouterProvider,
  HashRouter,
} from "react-router-dom";

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

const router = createBrowserRouter([
  {
    path: "/coffeeroaster-subscription-site/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/coffeeroaster-subscription-site/about",
        element: <About />,
      },
      {
        path: "/coffeeroaster-subscription-site/plan",
        element: <Plan />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter basename="/coffeeroaster-subscription-site">
      <RouterProvider router={router} />
    </HashRouter>
  </React.StrictMode>
);
