import React from "react";
import Loading from "@assets/marketplace-loader.svg";
import { LoaderDiv } from "@styles/Body.styled";

const Loader: React.FC = () => {
  return (
    <LoaderDiv>
      <img src={Loading} alt="" />
    </LoaderDiv>
  );
};

export default Loader;
