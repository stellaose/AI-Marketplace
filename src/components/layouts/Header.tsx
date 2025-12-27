import React from "react";
import { HeaderBody, HeaderDiv, Section } from "../../styles/Header.styled";

const Header: React.FC = () => {
  return (
    <>
      <HeaderBody>
        <HeaderDiv>
          <Section>
            <p>AI-Marketplace</p>
          </Section>
        </HeaderDiv>
      </HeaderBody>
    </>
  );
};

export default Header;
