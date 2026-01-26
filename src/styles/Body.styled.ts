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

export const BackArrow = styled.div`
  margin: 1rem 0 4rem;
  cursor: pointer;
  background-color: var(--grey-color);
  border: 1px solid var(--black-color);
  width: fit-content;
  padding: 0.5rem 1rem;
  border-radius: 100px;

  &&:hover {
    background-color: var(--black-color);
    color: var(--grey-color);
    border: 1px solid var(--grey-color);
  }
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
  min-height: calc(100vh - 80px); /* Adjust for footer height */
`;

export const ProductPage = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 56px 32px;
`;

export const ProductDiv = styled.div`
  display: flex;
  align-items: start;
  /* max-width: 1000px; */
  margin: 1rem auto 0;
  gap: 2rem;
`;

export const ProductImg = styled.section`
  max-width: 400px;
  width: 100%;
  height: auto;
  border-radius: 12px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const ProductDescription = styled.div`
  flex: 1;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  button {
    background-color: var(--main-color);
    color: #fff;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const CartNotify = styled.p`
  color: green;
  font-weight: 600;
  margin-block: 1rem;

  span {
    color: var(--main-color);
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const ProductPrice = styled.p`
  margin-block: 2rem;

  p {
    font-size: 1rem;

    span {
      font-weight: 600;
    }
  }
`;

export const ProductReviews = styled.div`
  margin-top: 6rem;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const CartSection = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

export const CartTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

export const CartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CartImg = styled.div`
  width: 130px;
  height: auto;
  flex-shrink: 0;

  img {
    width: 100px;
    height: auto;
  }
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  svg {
    color: var(--main-red);
    margin-inline: 2rem;
    cursor: pointer;
  }
`;

export const CartItemName = styled.p`
  flex: 1;
  font-size: 1.2rem;
  font-weight: 500;
`;

export const CartItemPrice = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-inline: 2rem;

  p {
    cursor: pointer;
    font-size: 1rem;
    user-select: none;
  }
`;

export const EmptyCartDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-block: 8rem;
  column-gap: 1rem;

  p {
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

export const CartTotalDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #ccc;

  p {
    font-size: 1.2rem;
    font-weight: 600;
  }

  button {
    background-color: var(--main-red);
    color: #fff;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
`;
