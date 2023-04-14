import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Home, Products } from "./pages";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/products", element: <Products /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
