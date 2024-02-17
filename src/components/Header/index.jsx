import * as S from "./style";
import { HomeIcon, ChatIcon, NoticeIcon, MyIcon, LogoIcon } from "../../assets";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const accessToken = localStorage.getItem("accessToken");

  return !accessToken ? (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.LogoContainer onClick={() => navigate(`/`)}>
          <LogoIcon size="small" />
        </S.LogoContainer>
        <S.MenuContainer>
          <S.MenuWrapper onClick={() => navigate(`/`)}>
            <HomeIcon />
            <S.MenuItem>홈</S.MenuItem>
          </S.MenuWrapper>
          <S.MenuWrapper onClick={() => (window.location.href = "my")}>
            <MyIcon />
            <S.MenuItem>마이</S.MenuItem>
          </S.MenuWrapper>
          <S.MenuWrapper onClick={() => (window.location.href = "chat")}>
            <ChatIcon />
            <S.MenuItem>대화</S.MenuItem>
          </S.MenuWrapper>
          <S.MenuWrapper onClick={() => (window.location.href = "notice")}>
            <NoticeIcon />
            <S.MenuItem>문의</S.MenuItem>
          </S.MenuWrapper>
        </S.MenuContainer>
        <S.LoginContainer>
          <S.LoginItem onClick={() => (window.location.href = "signin")}>
            로그인
          </S.LoginItem>
          <S.LoginItem onClick={() => (window.location.href = "signup")}>
            회원가입
          </S.LoginItem>
        </S.LoginContainer>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  ) : null;
};

export default Header;
