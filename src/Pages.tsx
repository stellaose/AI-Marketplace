import { createBrowserRouter } from "react-router-dom";
import { ProductsPage, CartPage, HomePage, ProductDetailPage } from "./routes";
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
        element: <ProductsPage />,
      },
      {
        path: "/product/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
