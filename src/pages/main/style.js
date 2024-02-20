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
  gap: 2.875rem;
  margin-top: 20.625rem;

  span {
    font-size: 3rem;
    color: white;
    font-weight: 500;
    display: flex;
    justify-content: center;
  }
`;

export const StartButton = styled.button`
  width: 31.2162rem;
  height: 5.1875rem;
  color: 1.4563rem;
  background-color: #2e2e3c;
  border: 0;
  border-radius: 1.4563rem;
  font-size: 1.2688rem;
  font-weight: 700;
  color: white;

  &:hover {
    border: 0.125rem solid #788cf4;
  }
`;
