/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { supabase } from "@lib/supabase";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "@components/general/Loader";
import NotFound from "../NotFound";
import {
  ProductPage,
  ProductDiv,
  ProductImg,
  ProductDescription,
  ProductPrice,
  CartNotify,
  BackArrow,
  ProductReviews,
} from "@/styles/Body.styled";
import { formatMoney } from "@/utils";

const Product: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState<any[]>([]);
  const [copied, setCopied] = useState(false);
  const [loadingProduct, setLoadingProduct] = useState(true);

  const { addToCart, loading, cartItems } = useCartStore();

  useEffect(() => {
    supabase
      .from("products")
      .select("*")
      .then(({ data }) => {
        setProducts(data || []);
        setLoadingProduct(false);
      });
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (copied) {
      timer = setTimeout(() => {
        setCopied(false);
      }, 800);
    }

    return () => clearTimeout(timer);
  }, [copied]);


  const selectedProduct = products.find((p) => p.id == id);

const isInCart = cartItems.some(
  (item: any) => item.product?.id == selectedProduct?.id
);

  if (loadingProduct || loading) return <Loader />;

  if (!selectedProduct) return <NotFound />;

  return (
    <>
      <ProductPage>
        <BackArrow onClick={() => navigate(-1)}>
          Back
        </BackArrow>
        <ProductDiv>
          <ProductImg>
            <img src={selectedProduct.image_url} alt={selectedProduct.name} />
          </ProductImg>
          <ProductDescription>
            <h1>{selectedProduct.name}</h1>

            <p>{selectedProduct.description}</p>

            <ProductPrice>
              <p>
                <span>Price: </span>₦{formatMoney(selectedProduct.price)}
              </p>
              <p>
                <span>Stock: </span>
                {selectedProduct.stock_quantity}
              </p>
            </ProductPrice>

            {isInCart ? (
              <CartNotify>
                Already in Cart!{" "}
                <span onClick={() => navigate("/cart")}>View cart here</span>
              </CartNotify>
            ) : (
              <button onClick={() => addToCart?.(selectedProduct.id)}>
                Add to Cart
              </button>
            )}
          </ProductDescription>
        </ProductDiv>

        <ProductReviews>
          <h3>Review!</h3>
          There no reviews yet.
        </ProductReviews>
      </ProductPage>
    </>
  );
};

export default Product;
