import styled from "styled-components";

export const MyPageWrapper = styled.div`
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyPageContainer = styled.div`
  width: 31.25rem;
  height: 50rem;
  background-color: white;
  border-radius: 1.0625rem;
  margin-top: 1.25rem;
`;

export const ProfileDot = styled.div`
  position: absolute;
  background-color: #262635;
  border-radius: 100%;
  border: 0.1875rem solid #788cf4;
  width: 11.375rem;
  height: 11.375rem;
  margin-left: 9.8125rem;
  margin-top: 6.875rem;

  svg {
    position: relative;
    left: 1.6875rem;
    top: 1.4375rem;
  }
`;

export const BackGroundColor = styled.div`
  width: 100%;
  height: 12.5rem;
  background: linear-gradient(
    to bottom,
    rgba(100, 114, 240, 0.9) 0%,
    rgba(159, 197, 255, 0.9) 100%
  );
  border-width: 0.0625rem;
  border-color: #000;
  box-shadow: 0rem 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.25);
  border-radius: 1.0625rem 1.0625rem 0 0;
`;

export const MenuContainer = styled.div`
  width: 100%;
  height: 37.5rem;
  background-color: #11111a;
`;

export const NickNameContainer = styled.div`
  width: 100%;
  height: 8.9375rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  span {
    color: white;
    font-size: 1.5625rem;
    font-weight: bold;
    position: relative;
    left: 0.0625rem;
  }
`;

export const OutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const AdminComment = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 4.375rem;

  span {
    font-size: 1.0625rem;
    font-weight: 600;
  }
`;

export const AdminOutItem = styled.button`
  color: white;
  font-weight: bold;
  font-size: 1.0625rem;
  width: 25rem;
  height: 2.5rem;
  background-color: #c55151;
  outline: none;
  border: 0;
  border-radius: 0.375rem;
  margin-top: 18.75rem;

  &:hover {
    opacity: 90%;
  }

  &:active {
    opacity: 60%;
  }
`;
