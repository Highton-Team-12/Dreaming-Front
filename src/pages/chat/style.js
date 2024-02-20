import styled from "styled-components";

export const NoticeWrapper = styled.div`
  width: 100vw;
  height: 89%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoticeContainer = styled.div`
  width: 800px;
  height: 700px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 60px;
`;

export const NoticeTitleContainer = styled.div`
  width: 100%;
`;

export const NoticeTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: white;
`;

export const NoticeItemContainer = styled.div`
  overflow: scroll;
  width: 100%;
`;

export const NoticeItem = styled.div`
  color: black;
  height: 140px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid grey;
  opacity: 70%;
  cursor: pointer;
`;

export const NoticeImg = styled.img`
  width: 100px;
  height: 100px;
  background-color: black;
  border-radius: 10px;
`;

export const NoticeMenu = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  text-indent: 10px;
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export const NoticeContent = styled.div`
  width: 700px;
  height: 40px;
  display: flex;
  align-items: center;
  text-indent: 10px;
  color: white;
`;
export const NoticeBar = styled.div`
  display: flex;
  flex-direction: column;
`;
