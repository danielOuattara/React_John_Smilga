import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Error, Home, Products } from "./pages";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/products", element: <Products /> },
  { path: "*", element: <Error /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
