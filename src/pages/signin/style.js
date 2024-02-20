import styled from "styled-components";

export const SignInWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  justify-content: center;
  align-items: center;
`;

export const SignInContainer = styled.div`
  width: 28.125rem;
  height: 31.25rem;
  /* background-color: white; */
  border-radius: 1.25rem;
  padding: 1.875rem;
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 8.125rem;
  display: flex;
  justify-content: center;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 12.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.25rem;
`;

export const InputTitle = styled.input`
  width: 27.5rem;
  height: 3.5625rem;
  border-radius: 1rem;
  border: none;
  outline: none;
  text-indent: 1.125rem;
  color: white;
  font-size: 1rem;

  background-color: #2e2e3c;

  &:hover {
    border: 0.0625rem solid #c8deff;
  }
`;

export const NextButton = styled.button`
  width: 27.5rem;
  height: 3.5625rem;
  background-color: #c8deff;
  border-radius: 1rem;
  font-size: 1rem;
  color: black;
  border: none;
  font-weight: 700;

  &::placeholder {
    font-size: 1rem;
    color: #5c5c61;
  }

  &:hover {
    opacity: 90%;
  }

  &:active {
    opacity: 70%;
  }
`;
