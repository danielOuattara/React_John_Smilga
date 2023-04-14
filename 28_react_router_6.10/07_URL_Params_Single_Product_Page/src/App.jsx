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
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "products", element: <Products />, loader: productsLoader },
      {
        path: "products/:productId",
        element: <SingleProduct />,
        loader: singProductLoader,
      },
    ],
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
