import React, { useEffect } from "react";
import Header from "../../components/Header";
import * as S from "./style";
import { useLocation } from "react-router-dom";

const MainPage = () => {
  const location = useLocation();

  console.log(window.location.pathname);

  useEffect(() => {
    if (location.pathname === "/") {
      const script = document.createElement("script");
      script.src = "https://app.embed.im/snow.js";
      script.defer = true;

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [location]);

  return (
    <>
      <S.MainWrapper>
        <Header />
      </S.MainWrapper>
    </>
  );
};

export default MainPage;
