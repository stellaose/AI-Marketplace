import Loader from "@components/general/Loader";
import { useCartStore } from "@/store/cartStore";
import React from "react";
import {
  CartItem,
  CartItemName,
  CartImg,
  CartList,
  CartSection,
  CartTitle,
  CartItemPrice,
  QuantityControl,
  EmptyCartDiv,
  BackArrow,
  CartTotalDiv,
} from "@styles/Body.styled";
import { formatMoney } from "@/utils";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Carts: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems, loading, updateQuantity, removeFromCart } = useCartStore();
  
  const total = cartItems?.reduce((acc: number, item: { product: { price: number }, quantity: number }) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  if (loading) return <Loader />;

  return (
    <>
      <CartSection>
        <BackArrow onClick={() => navigate(-1)}>
          Back
        </BackArrow>
        {cartItems.length === 0 ? (
          <EmptyCartDiv>
            <MdOutlineRemoveShoppingCart size={50} />
            <p>Your cart is empty</p>
          </EmptyCartDiv>
        ) : (
          <>
            <CartTitle>Items on your cart</CartTitle>
            <CartList>
              {cartItems.map(
                (item: {
                  id: string;
                  product_id: string;
                  quantity: number;
                  product: {
                    image_url: string;
                    name: string;
                    price: number;
                  };
                }) => (
                  <CartItem key={item.id}>
                    <CartImg>
                      <img src={item?.product?.image_url} alt="" />
                    </CartImg>
                    <CartItemName>{item?.product?.name}</CartItemName>
                    <QuantityControl>
                      <p
                        onClick={() =>
                          updateQuantity(item?.id, item?.quantity - 1)
                        }
                      >
                        -
                      </p>
                      <p>{item?.quantity}</p>
                      <p
                        onClick={() =>
                          updateQuantity(item?.id, item?.quantity + 1)
                        }
                      >
                        +
                      </p>
                    </QuantityControl>
                    <CartItemPrice>
                      ₦{formatMoney(item?.product?.price * item?.quantity)}
                    </CartItemPrice>

                    <div onClick={() => removeFromCart(item?.id)}>
                      <FaRegTrashAlt />
                    </div>
                  </CartItem>
                ),
              )}
              </CartList>{" "}
              
              <CartTotalDiv>
                {total && (
                  <>
                    <h3>Total:</h3>
                    <h3>₦{formatMoney(total)}</h3>
                  </>
                )}
                
              </CartTotalDiv>
          </>
        )}
      </CartSection>
    </>
  );
};

export default Carts;
