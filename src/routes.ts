import { lazy } from "react";

const ProductsPage = lazy(() => import("./views/products"));
const ProductDetailPage = lazy(() => import("./views/product"));
const CartPage = lazy(() => import("./views/carts"));
const HomePage = lazy(() => import("./views/home"));

export { ProductsPage, CartPage, HomePage, ProductDetailPage };
