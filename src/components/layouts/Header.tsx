import React from "react";
import {
  HeaderBody,
  HeaderDiv,
  Section,
  CartDiv,
  CartSection,
} from "../../styles/Header.styled";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "@/store/cartStore";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems } = useCartStore();

  return (
    <>
      <HeaderBody>
        <HeaderDiv>
          <Section>
            <p>AI-Marketplace</p>
            <CartDiv onClick={() => navigate("/cart")}>
              <IoCartOutline size={30} />
              {
                cartItems.length > 0 && (
                  <CartSection>
                    <p>{cartItems.length}</p>
                  </CartSection>
                )
              }
             
            </CartDiv>
          </Section>
        </HeaderDiv>
      </HeaderBody>
    </>
  );
};

export default Header;
