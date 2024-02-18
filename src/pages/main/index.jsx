import React, { useEffect } from "react";
import Header from "../../components/Header";
import * as S from "./style";
import { useLocation } from "react-router-dom";

const MainPage = () => {
  const location = useLocation();

  console.log(window.location.pathname);

  const accessToken = localStorage.getItem("accessToken");

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

        {!accessToken ? (
          <S.ImgContainer>
            <div>
              <span>당신의 꿈을 현실로 만들어주는</span>
              <span>특별한 서비스 드리밍</span>
            </div>
            <S.StartButton onClick={() => (window.location.href = "signin")}>
              꿈꾸러 가기
            </S.StartButton>
          </S.ImgContainer>
        ) : null}
      </S.MainWrapper>
    </>
  );
};

export default MainPage;
