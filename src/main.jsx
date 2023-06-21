import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./main.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import Root, { loader as rootLoader } from "./routes/root";


import * as React from "react";
import * as ReactDOM from "react-dom";

import {
  createBrowserRouter,
  RouterProvider,
  action as rootAction,
} from "react-router-dom";

import Root, { rootLoader } from "./routes/root";
import Team, { teamLoader } from "./routes/team";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      loader: rootLoader,
      action: rootAction,
      children: [
        {
          path: "contacts/:contactId",
          element: <Contact />,
        },
      ],
    },
    
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
