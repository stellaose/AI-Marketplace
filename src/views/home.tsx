import React from "react";
import { HomeDiv, WelcomeTxt, TitleTxt, Title, Txt } from "@styles/App.styled";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  // const navigate = useNavigate();
  return (
    <>
      <HomeDiv>
        <WelcomeTxt>
          <TitleTxt>
            <Title>Welcome!</Title> This store was created using React
            Typescript and Supabase
          </TitleTxt>
          <Link to={"/products"}>
            <Txt>View all products here</Txt>
          </Link>
        </WelcomeTxt>
      </HomeDiv>
    </>
  );
};

export default Home;
