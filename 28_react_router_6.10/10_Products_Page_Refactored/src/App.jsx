/* refactoring products
-------------------------------------------------- */
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Error,
  Home,
  SharedLayout,
  Products,
  SingleProduct,
  productsLoader,
  singProductLoader,
  Login,
  Dashboard,
  ProtectedRoute,
  SharedProducts,
} from "./pages";

function App() {
  const [user, setUser] = useState(null);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SharedLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        {
          path: "products",
          element: <SharedProducts />,

          children: [
            { index: true, element: <Products />, loader: productsLoader },
            {
              path: ":productId",
              element: <SingleProduct />,
              loader: singProductLoader,
            },
          ],
        },

        { path: "login", element: <Login setUser={setUser} /> },
        {
          path: "dashboard",
          element: <ProtectedRoute user={user} />,
          children: [
            {
              index: true,
              element: <Dashboard user={user} />,
            },
          ],
        },
      ],
      errorElement: <Error />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
