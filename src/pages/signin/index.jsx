import React, { useState } from "react";
import { LogoIcon } from "../../assets";
import { AxiosApi } from "../../libs/AxiosApi";
import * as S from "./style";
import { ToastContainer, toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigate();

  console.log(email);
  console.log(password);

  const onCreate = async () => {
    try {
      if (email && password) {
        const response = await AxiosApi.post("/user/admin", {
          email,
          password,
        });

        localStorage.setItem("accessToken", response.data.accessToken);

        console.log("POST request successful:", response.data);
        navigation("/");
        toast.success("로그인이 성공하였습니다.");
      } else {
        console.error("Title and content are required");
        toast.error("로그인에 실패하였습니다.");
      }
    } catch (error) {
      console.error("Error while sending POST request:", error);
      toast.error("로그인에 실패하였습니다.");
    }
  };

  return (
    <>
      <S.SignInWrapper>
        <S.SignInContainer>
          <S.LogoContainer>
            <LogoIcon size="big" />
          </S.LogoContainer>
          <S.InputContainer>
            <S.InputTitle
              placeholder="이메일을 입력해주세요"
              onChange={(e) => setEmail(e.target.value)}
            />
            <S.InputTitle
              placeholder="비밀번호를 입력해주세요"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </S.InputContainer>
          <S.NextButton onClick={onCreate}>로그인</S.NextButton>
        </S.SignInContainer>
      </S.SignInWrapper>
    </>
  );
};

export default SignInPage;
