import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Root from "./routes/Root.jsx";
import ErrorPage from "./error-page.jsx";
import Shop from "./routes/shop.jsx";
import Index from "./routes/Index.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route 
    path="/" 
    element={<Root />} 
    errorElement={<ErrorPage />}
  >
    <Route errorElement={<ErrorPage />}>
      <Route index element={<Index />} />
      <Route 
        path="/shop" 
        element={<Shop />} 
      />
    </Route>
  </Route>
  
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
