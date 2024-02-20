import styled from "styled-components";

export const DetailWrapper = styled.div`
  width: 100%;
  height: 91vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DetailContainer = styled.div`
  width: 50rem;
  height: 43.75rem;

  padding: 3.125rem;
`;

export const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2.5rem;

  span {
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

export const Img = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 0.625rem;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 31.25rem;
  color: white;
  margin-top: 3.125rem;
  font-weight: 500;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 3.125rem;
`;

export const PassButton = styled.button`
  width: 12.5rem;
  height: 3.125rem;
  border-radius: 0.625rem;
  font-size: 1rem;
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
  width: 12.5rem;
  height: 3.125rem;
  border-radius: 0.625rem;
  font-weight: 600;
  font-size: 1rem;
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
