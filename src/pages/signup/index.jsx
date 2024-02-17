import React, { useState } from "react";
import { LogoIcon } from "../../assets";
import * as S from "../signin/style";

const SignUpPage = () => {
  const [adminCode, setAdminCode] = useState("");

  return (
    <>
      <S.SignInWrapper>
        <S.SignInContainer>
          <S.LogoContainer>
            <LogoIcon size="big" />
          </S.LogoContainer>
          <S.InputContainer>
            <S.InputTitle placeholder="Admin 코드를 입력해주세요." />
          </S.InputContainer>
          <S.NextButton style={{ position: "relative", bottom: "110px" }}>
            관리자 승인 받기
          </S.NextButton>
        </S.SignInContainer>
      </S.SignInWrapper>
    </>
  );
};

export default SignUpPage;
