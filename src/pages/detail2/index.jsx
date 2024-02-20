import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import * as S from "./style";
import { toast } from "react-toastify";

const DetailPage2 = () => {
  const navigation = useNavigate;
  return (
    <>
      <Header />
      <S.DetailWrapper>
        <S.DetailContainer>
          <S.ImgContainer>
            <S.Img src="https://i.namu.wiki/i/nkyyzYnI9mu0oKoO3WshDwLPBRLWPeLAMrqCeTSU9L5mv7AUyWrVKOV_kYsJ0rGCzD6V6w4ox0IMSus8sQ5IBg.webp" />
            <span>홀란드 오늘 축구 볼 사람 있나요?</span>
          </S.ImgContainer>
          <S.ContentWrapper>축구 같이 봐요!!</S.ContentWrapper>
          <S.ButtonsContainer>
            <S.OutButton
              onClick={() => {
                setTimeout(() => {
                  window.location.href = "/";
                }, 1000);
                toast.error("삭제하였습니다. ");
                localStorage.setItem("ListConfirm", "1");
              }}
            >
              삭제하기
            </S.OutButton>
          </S.ButtonsContainer>
        </S.DetailContainer>
      </S.DetailWrapper>
    </>
  );
};

export default DetailPage2;
