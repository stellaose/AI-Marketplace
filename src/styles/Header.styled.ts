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
