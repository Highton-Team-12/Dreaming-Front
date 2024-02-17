import React, { useState } from "react";
import { LogoIcon } from "../../assets";
import * as S from "./style";
import Header from "../../components/Header";

const NoticeDatas = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1IwK6-SxM83UpFVY6WtUZxXx-phss_gAUfdKbkTfau6VWVkt",
    title:
      "안녕하세요 광주고등학교를 다니는 학생입니다. 마이페이지 수정이 안 됩니다.",
    content: "하이요 ㅋ ",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1IwK6-SxM83UpFVY6WtUZxXx-phss_gAUfdKbkTfau6VWVkt",
    title: "2",
    content:
      "안녕하세요 저는 지금 현재 광주고등학교에 다니고 있는 학생입니다. 저는 개발자가 꿈인데 대학교를 안 가고 바로 취업을 하고 싶습니다. 무엇을 해야할까요?? ",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1IwK6-SxM83UpFVY6WtUZxXx-phss_gAUfdKbkTfau6VWVkt",
    title: "3",
    content:
      "안녕하세요 저는 지금 현재 광주고등학교에 다니고 있는 학생입니다. 저는 개발자가 꿈인데 대학교를 안 가고 바로 취업을 하고 싶습니다. 무엇을 해야할까요?? ",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1IwK6-SxM83UpFVY6WtUZxXx-phss_gAUfdKbkTfau6VWVkt",
    title: "4",
    content:
      "안녕하세요 저는 지금 현재 광주고등학교에 다니고 있는 학생입니다. 저는 개발자가 꿈인데 대학교를 안 가고 바로 취업을 하고 싶습니다. 무엇을 해야할까요?? ",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1IwK6-SxM83UpFVY6WtUZxXx-phss_gAUfdKbkTfau6VWVkt",
    title: "5",
    content:
      "안녕하세요 저는 지금 현재 광주고등학교에 다니고 있는 학생입니다. 저는 개발자가 꿈인데 대학교를 안 가고 바로 취업을 하고 싶습니다. 무엇을 해야할까요?? ",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1IwK6-SxM83UpFVY6WtUZxXx-phss_gAUfdKbkTfau6VWVkt",
    title: "6",
    content:
      "안녕하세요 저는 지금 현재 광주고등학교에 다니고 있는 학생입니다. 저는 개발자가 꿈인데 대학교를 안 가고 바로 취업을 하고 싶습니다. 무엇을 해야할까요?? ",
  },
];

const NoticePage = () => {
  return (
    <>
      <Header />
      <S.NoticeWrapper>
        <S.NoticeContainer>
          <S.NoticeTitleContainer>
            <S.NoticeTitle>문의 확인</S.NoticeTitle>
          </S.NoticeTitleContainer>
          <S.NoticeItemContainer>
            {NoticeDatas.map((data, index) => (
              <S.NoticeItem key={index}>
                <S.NoticeImg src={data.img} />
                <S.NoticeBar>
                  <S.NoticeMenu>{data.title}</S.NoticeMenu>
                  <S.NoticeContent>
                    {data.content.length > 50
                      ? data.content.substring(0, 50) + "..."
                      : data.content}
                  </S.NoticeContent>
                </S.NoticeBar>
              </S.NoticeItem>
            ))}
          </S.NoticeItemContainer>
        </S.NoticeContainer>
      </S.NoticeWrapper>
    </>
  );
};

export default NoticePage;
