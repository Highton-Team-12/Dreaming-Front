import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import * as S from "./style";
import { toast } from "react-toastify";

const DetailPage = () => {
  const navigation = useNavigate;
  return (
    <>
      <Header />
      <S.DetailWrapper>
        <S.DetailContainer>
          <S.ImgContainer>
            <S.Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAAD29vaUlJR6enrx8fEpKSnIyMj7+/vf39+pqanLy8tOTk7r6+v4+PjCwsKhoaEkJCRGRka6uroQEBA7OzszMzOGhoaMjIzT09Ph4eHt7e0XFxeAgIBnZ2etra1ycnJqamouLi4cHBxVVVVfX18+Pj6YmJgeKdU5AAAGeUlEQVR4nO2caZuqPAyGAUVxA51xAxdcxvH//8NX2rI0jcpxFOt7PfcXj4eAeaS0SRrHcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2EgQnzftZbS6YTFuayx6jFHUNtgNXub0v5DOXMF0410zObkUU2LfsHHd4Usdr0lQ8X4a8zZj0/cNtekxAl3/1d7XIBxqLrGjKmZ83xEb78AYdV/ufg02uk9rZqCyztO73WZsFo0ouIMxthiv9ozzS2Lzzdj8NqLgHjvDr4CapIzzdAYZMTZu0pCG25h+RcSCnUFGxOiLsfluSsNNmO/+rFsEdZxfMja7hiTcgZkl27rFoobzXcZmYoz298Ao1Be6iHF+RpxfMTZMRPAeQtO1fvV4Led/GJu+YwvmUqctdHWcPzM2pwYl3MGIx47Voy3G+S25AhfwuGGDEu7gHYlv1WlywPh+JM57E8boSnj7HshUsq8cCqc1nN8yNq0mBdxHS3p+qtOkmTIZq2WtgOftdMtbpQWlTMrk/pBz2YDnRib9JryxiFsObW0ZYGcQku+FM8aGhn12MEqSkZ43BfMaznMpk5Ea24qZdJiZFZcy0YDHWjjnv4iNxSnTfZI6zg8Zm/Qt7j5AnZSpTsBjLXVSJi7gsSVluguX782J8x43jq2K1m7g13GeG6Pjt7j7AFzKZDjPrCY04LGWevkek/xf3ROwDC5a4+rE4/lEY2hL3eIe4ZpRyNb6A1+jaUcf5gPyvb9h7RbZs7B2i+xpfE6+9yB1UqaPhk2ZjFAzib8HyacEoDpsvkdWuaAv047Z2KKSaG1q5Hu9srYx+ZQwu4TbItvrJnq882lTEJcyHfRojQ7jT6lYSPwaBe49OUwLN3bDFbhJymSGA0y86o0XdvRBUeoUuM2kt21cx+u4Nm0elnAp05RGa+ZtNofp7tq9fTdcymQ0NJlV8A7NG/ONGutC2T0j0EyZGIVESVFmnVsWD3BbZMw8adZvSNdTpTNlb57+RtgCN7NFZoYEREe1zGpV1sylTFxDkzkd6VFN98axt1J/i4wO04N2lJZZralM1ekJUtAlX18UqH46Db2LFRetXfv69QRSD3nMmMGSCjGXMl2PSao3XE+suJjBDHnewL92Fa42MjiY7vQGTDZwt2EjI1y2DO5Mgv5g3BoP6GLSZS7Uai0/pdAPAAAAAAAAAOD/QuBdyN+El3+H9D8vb1ejZDTyb5yRvWgEjqNezHMuufJoVF7Pkabam2c2A/TXnckwv2Dr2JlkVaJ42unM82S9t/iV5YmflqhDpdkZTuWMk+Msjh2Ndewk7uUl3ynNLjjJRURb8Xuh4zavGfiTi2n+JvyadNbPbJnOCmFFiTCrzWRFe9HlK8st3r5aXsk+OWuOmuenZ8XsIVNZjWWBMS/NiWqUVJhU+qi/5GfIeqqyDQ83K15PVDgVn062r/tK4exhhTG1KxTKD3TCeaMKfVk/+1mmaWs/v64wGVyIs/7TYxRn//avKJTf2HyT9jdyw2pUKFS9AQ0rFNuav8rPIG5fUyjJysLF08YrFEXYs/i8QOwcn0qF8kLNKhR7T7SQf0dhPkWyCsUDXvxNgqUap8W+xu5lCley1TVcEIXn4lEhCueeOmNzW2Es7bxIKRTPa3El8SPOhVI4VOJfolCjqrDN3EKz0fSGQg1PDtJdeamTHA5C4UA8Ef2GFW7dvFU9mP1emA3/pjCYudofzshGwDRXKH+O03UaVbgrFcqDk78pFCIqTZs7eUlfSvPFL4/j3xcoPHQlYqBUFWZTwdGrKOwohYeBOmN/W2Eq7QZjpVANy5zslm4LhXJiWz+77yb77KKtgM6lYndabhNF3U1FYd25tIjalMK+HI8KMf+kpcJyN7yx1UL+XFTt3KcPKKSrhfhNlApenCQLJ6ZhRWHR+9Hcii+/1FPkh1739ASFaq+4lYRhIlvFsq+vVJj3jzUYl5Jp5fhXhfRvM4nWk4pC1RzWoEKyQd/6s0K9y08+41WFcs14+lyaK1wo58XgVE+LX3b77Hv5GZ389I1baZLKFE5ZhSJaU0d6RWvGSR3WFPrPnkuTKIqKTrze5U02060ur1HZgDZIl5tlOrh1hmCUHcm/LS+7Ri5XXLAIjlbRebM4FwedIDu6ql7ls3qMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAP/wHSpFWaOceRHwAAAABJRU5ErkJggg==" />
            <span>하이톤 너무 좋아요!!</span>
          </S.ImgContainer>
          <S.ContentWrapper>해커톤 밥 맛있다.</S.ContentWrapper>
          <S.ButtonsContainer>
            <S.PassButton>수락 / 댓글 달기</S.PassButton>
            <S.OutButton
              onClick={() => {
                setTimeout(() => {
                  window.location.href = "/";
                }, 1000);
                toast.error("거절하였습니다.");
              }}
            >
              거절하기
            </S.OutButton>
          </S.ButtonsContainer>
        </S.DetailContainer>
      </S.DetailWrapper>
    </>
  );
};

export default DetailPage;
