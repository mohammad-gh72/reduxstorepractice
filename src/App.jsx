import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import LandingPage from "./pages/LandingPage";
import { loader as loaderFeaturedProducts } from "./pages/LandingPage";
import { loader as loaderProducts } from "./pages/Products";
import { loader as loaderSingleProduct } from "./pages/SingleProduct";
import { action as signupAction } from "./pages/Signup";
import { action as loginAction } from "./pages/Login";
import { ApiError } from "./components";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        element: <LandingPage />,
        index: true,
        loader: loaderFeaturedProducts,
        errorElement: <ApiError />,
      },
      {
        element: <Products />,
        path: "/products",
        loader: loaderProducts,
        errorElement: <ApiError />,
      },
      {
        element: <SingleProduct />,
        path: "/pr/:id",
        loader: loaderSingleProduct,
        errorElement: <ApiError />,
      },
    ],
  },
  { path: "login", element: <Login />, action: loginAction },
  {
    path: "signup",
    element: <Signup />,

    action: signupAction,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
