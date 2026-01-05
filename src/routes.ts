import { lazy } from "react";

const ProductPage = lazy(() => import("./views/products"));
const CartPage = lazy(() => import("./views/carts"));
const HomePage = lazy(() => import ('./views/home'))

export { ProductPage, CartPage, HomePage };
