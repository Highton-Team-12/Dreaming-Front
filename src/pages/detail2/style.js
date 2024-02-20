import styled from "styled-components";

export const DetailWrapper = styled.div`
  width: 100%;
  height: 91vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DetailContainer = styled.div`
  width: 800px;
  height: 700px;

  padding: 50px;
`;

export const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 40px;

  span {
    color: white;
    font-size: 24px;
    font-weight: 700;
  }
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 500px;
  color: white;
  margin-top: 50px;
  font-weight: 500;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 50px;
`;

export const PassButton = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  border: 0;
  background-color: #288be1;
  color: white;

  &:hover {
    opacity: 80%;
  }

  &:active {
    opacity: 60%;
  }
`;

export const OutButton = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  border: 0;
  background-color: #df454a;
  color: white;

  &:hover {
    opacity: 80%;
  }

  &:active {
    opacity: 60%;
  }
`;
