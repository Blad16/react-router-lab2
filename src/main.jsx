import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./main.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import Root, { loader as rootLoader } from "./routes/root";
import EditContact from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";


import * as React from "react";
import * as ReactDOM from "react-dom";

import {
  loader as contactLoader,
  createBrowserRouter,
  RouterProvider,
  action as rootAction,
  action as editAction,
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
          loader: contactLoader,
        },
        {
          path: "contacts/:contactId/edit",
          element: <EditContact />,
          loader: contactLoader,
          action: editAction,
        },
        {
          path: "contacts/:contactId/destroy",
          action: destroyAction,
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
