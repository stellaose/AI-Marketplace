import styled from "styled-components";

export const HomeDiv = styled.div`
  padding: 20rem 0 0;
`;

export const WelcomeTxt = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

export const TitleTxt = styled.p`
  text-align: center;
  font-size: 2rem;
  width: 80vw;
  margin-inline: auto;
  font-weight: 600;
`;

export const Title = styled.span`
  color: var(--green-color);
`;

export const Txt = styled.p`
  font-size: 1.5rem;
  cursor: pointer;
  font-weight: 500;
  color: var(--main-red);

  &:hover {
    text-decoration: underline;
  }
`;

export const ProductSect = styled.div`
  max-width: 1440px;
  margin: 2rem auto 0;
`;

export const ProductTitle = styled.h3`
  font-size: 1.6rem;
  text-align: center;
`;
export const ProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const ProdDiv = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const ProdCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.7rem;
  border: 1px solid var(--tertiary-color);
  padding: 1rem 0.7rem;
  border-radius: 0.5rem;
  width: 280px;
  cursor: pointer;
`;

export const ProdCardSect = styled.div`
  padding: 1rem 0.5rem 0;
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--tertiary-color);
  row-gap: 0.5rem;
`;

export const ProdImg = styled.img`
  width: 120px;
  margin-inline: auto;
`;

export const CardName = styled.p`
  font-size: 20px;
  font-weight: 600;
  width: 100%;
  height: 3rem;
  text-overflow: ellipsis;
  text-overflow: hidden;

  &:hover {
    text-decoration: underline;
  }
`;

export const CardDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  svg {
    color: var(--green-color);

    &:hover {
      color: var(--black-color);
    }
  }
`;

export const CardPrice = styled.p`
  font-size: 15px;
  width: 80%;
`;
