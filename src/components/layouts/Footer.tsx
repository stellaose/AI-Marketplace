import { FooterDiv, FooterName, Copyright } from "@/styles/Header.styled";
import React from "react";

const Footer: React.FC = () => {
  return (
    <FooterDiv>
      <FooterName>AI Marketplace</FooterName>
      <Copyright>© 2026</Copyright>
    </FooterDiv>
  );
};

export default Footer;
