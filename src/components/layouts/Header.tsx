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

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderBody>
        <HeaderDiv>
          <Section>
            <p>AI-Marketplace</p>
            <CartDiv onClick={() => navigate("/cart")}>
              <IoCartOutline size={30} />
              <CartSection>
                <p>5</p>
              </CartSection>
            </CartDiv>
          </Section>
        </HeaderDiv>
      </HeaderBody>
    </>
  );
};

export default Header;
