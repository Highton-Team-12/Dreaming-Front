import styled from "styled-components";

export const NoticeWrapper = styled.div`
  width: 100vw;
  height: 89%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoticeContainer = styled.div`
  width: 50rem;
  height: 43.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  padding: 3.75rem;
`;

export const NoticeTitleContainer = styled.div`
  width: 100%;
`;

export const NoticeTitle = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: white;
`;

export const NoticeItemContainer = styled.div`
  overflow: scroll;
  width: 100%;
`;

export const NoticeItem = styled.div`
  color: black;
  height: 8.75rem;
  display: flex;
  align-items: center;
  border-bottom: 0.0625rem solid grey;
  opacity: 70%;
  cursor: pointer;
`;

export const NoticeImg = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  background-color: black;
  border-radius: 0.625rem;
`;

export const NoticeMenu = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  text-indent: 0.625rem;
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
`;

export const NoticeContent = styled.div`
  width: 43.75rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  text-indent: 0.625rem;
  color: white;
`;
export const NoticeBar = styled.div`
  display: flex;
  flex-direction: column;
`;
