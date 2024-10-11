import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomePage from "./pages/homepage";
import ReadTime from "./pages/readtime";
import LatestNews from "./pages/latestnews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "justupdatedNews/:titleid",
    element: <ReadTime />,
  },
  {
    path: "latestnewshappening/:titleid",
    element: <LatestNews />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);