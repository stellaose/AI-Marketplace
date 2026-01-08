import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { AppBody } from "@/styles/Body.styled";

const AppLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <AppBody>
        <Outlet />
      </AppBody>
      <Footer />
    </div>
  );
};

export default AppLayout;
