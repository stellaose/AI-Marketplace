/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { supabase } from "@lib/supabase";
import { useCartStore } from "@store/cartStore";
import {
  ProdCardDiv,
  ProdCardSect,
  CardName,
  CardPrice,
  ProdDiv,
  ProductDiv,
  ProductSect,
  ProductTitle,
  ProdImg,
  CardDiv,
} from "@/styles/App.styled";
import { formatMoney } from "@/utils";
import { useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import Loader from "@components/general/Loader";

const Products: React.FC = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<any[]>([]);
  const addToCart = useCartStore((s) => s.addToCart);
  const loading = useCartStore((s) => s.loading);

  useEffect(() => {
    supabase
      .from("products")
      .select("*")
      .then(({ data }) => setProducts(data || []));
  }, []);

  if(loading) return <Loader/>
  return (
    <>
      <ProductSect>
        <ProductDiv>
          <ProductTitle>All Products</ProductTitle>

          <ProdDiv>
            {products.map((data) => (
              <div key={data?.id}>
                <ProductCard
                  onClick={() => navigate(`/products/${data?.id}`)}
                  image={data?.image_url}
                  name={data?.name}
                  price={data?.price}
                  onAdd={() => addToCart(data?.id)}
                />
              </div>
            ))}
          </ProdDiv>
        </ProductDiv>
      </ProductSect>
    </>
  );
};

export default Products;

const ProductCard: React.FC<{
  image: string;
  name: string;
  price: string | number;
  onAdd: () => void;
  onClick: () => void;
}> = ({ image, name, price, onAdd, onClick }) => {
  return (
    <>
      <ProdCardDiv>
        <ProdImg src={image} alt="" onClick={onClick} />
        <ProdCardSect>
          <CardName onClick={onClick}>{name}</CardName>
          <CardDiv onClick={onAdd}>
            <CardPrice>₦{formatMoney(price)}</CardPrice>
            <IoCartOutline size={24} />
          </CardDiv>
        </ProdCardSect>
      </ProdCardDiv>
    </>
  );
};
