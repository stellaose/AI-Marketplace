import React from "react";
import { PiEmptyBold } from "react-icons/pi";
import { Button, NotFoundBody } from "@styles/Body.styled";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <NotFoundBody>
      <PiEmptyBold size={40} />
      <p>Oops! Seems like you have missed your way. Let's get back on track!</p>

      <Button onClick={() => navigate("/")}>Return to homepage</Button>
    </NotFoundBody>
  );
};

export default NotFound;
