import { createBrowserRouter } from "react-router-dom";
import { ProductPage, CartPage, HomePage } from "./routes";
import NotFound from "./NotFound";
import AppLayout from "@components/layouts/AppLayout";

export const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
