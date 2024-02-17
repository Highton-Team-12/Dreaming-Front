import { LogoIcon } from "../../assets";
import Header from "../../components/Header";
import * as S from "./style";

const MyPage = () => {
  return (
    <>
      <Header />
      <S.MyPageWrapper>
        <S.MyPageContainer>
          <S.ProfileDot>
            <LogoIcon size="big" />
          </S.ProfileDot>
          <S.BackGroundColor></S.BackGroundColor>
          <S.MenuContainer>
            <S.NickNameContainer>
              <span>Admin</span>
            </S.NickNameContainer>
            <S.AdminComment>
              <span>관리자 인증이 된 계정입니다.</span>
            </S.AdminComment>
            <S.OutContainer>
              {/* <S.AdminOutItem>로그아웃</S.AdminOutItem> */}
            </S.OutContainer>
          </S.MenuContainer>
        </S.MyPageContainer>
      </S.MyPageWrapper>
    </>
  );
};

export default MyPage;
