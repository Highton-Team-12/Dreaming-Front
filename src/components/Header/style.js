import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100vw;
  height: 5rem;
  justify-content: center;
  display: flex;
`;

export const HeaderContainer = styled.div`
  width: 72.5rem;
  display: flex;
  gap: 16.875rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  cursor: pointer;
  margin-top: 1.25rem;
`;
export const MenuContainer = styled.div`
  display: flex;
  gap: 50px;
`;

export const MenuItem = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const LoginItem = styled.button`
  width: 3.95rem;
  height: 1.75rem;
  border-radius: 4.5rem;
  font-size: 0.875rem;
  border: none;
  color: white;
  cursor: pointer;
  background-color: #11111a;
  font-weight: bold;

  &:hover {
    background-color: white;
    color: #6472f0;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;

  &:hover {
    svg {
      path {
        fill: #6472f0;
      }
    }
  }
`;
