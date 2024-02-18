import styled from "styled-components";

export const MainWrapper = styled.div`
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  width: 100vw;
  height: 100vh;
`;

export const ImgContainer = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 46px;
  margin-top: 330px;

  span {
    font-size: 48px;
    color: white;
    font-weight: 500;
    display: flex;
    justify-content: center;
  }
`;

export const StartButton = styled.button`
  width: 499.46px;
  height: 83px;
  color: 23.3px;
  background-color: #2e2e3c;
  border: 0;
  border-radius: 23.3px;
  font-size: 20.3px;
  font-weight: 700;
  color: white;

  &:hover {
    border: 2px solid #788cf4;
  }
`;
