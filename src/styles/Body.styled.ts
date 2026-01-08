import styled from "styled-components";

export const NotFoundBody = styled.div`
  height: 80svh;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const Button = styled.div`
  background-color: var(--main-color);
  padding: 1rem 2rem;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  width: fit-content;
`;

export const LoaderDiv = styled.div`
  height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: auto;
    width: 120px;
  }
`;

export const AppBody = styled.div`
  padding-top: 60px; 
  min-height: calc(100vh - 120px); /* Adjust for footer height */
`;
