import styled from "styled-components";

export const HeaderBody = styled.div`
  background-color: var(--primary-color);
  padding: 12px 32px;
  position: fixed;
  left: 0;
  right: 0;
`;

export const HeaderDiv = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: var(--black-color);
    font-weight: 700;
    font-size: 28px;
  }
`;

export const CartDiv = styled.div`
  position: relative;
  cursor: pointer;
`;

export const CartSection = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  p {
    background-color: red;
    font-size: 10px;
    color: white;
    width: 14px;
    height: 14px;
    display: flex;
    font-weight: 400;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
  }
`;

export const FooterDiv = styled.div`
  background-color: var(--main-color);
  padding: 40px 32px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const FooterName = styled.p`
  color: var(--primary-color);

  text-align: center;
  font-size: 40px;
  font-weight: 500;
`;

export const Copyright = styled.div`
  text-align: end;
  color: white;
  font-weight: 300;
`;
