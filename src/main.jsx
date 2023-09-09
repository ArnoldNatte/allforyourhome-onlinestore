import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Root from "./routes/root.jsx";
import ErrorPage from "./error-page.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route 
    path="/" 
    element={<Root />} 
    errorElement={<ErrorPage />}
  >
  </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
