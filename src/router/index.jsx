import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/main";
import SignInPage from "../pages/signin";
import SignUpPage from "../pages/signup";
import NoticePage from "../pages/notice";
import MyPage from "../pages/my";
import ChatPage from "../pages/chat";
import DetailPage from "../pages/detail";
import DetailPage2 from "../pages/detail2";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/signin" element={<SignInPage />}></Route>
      <Route path="/signup" element={<SignUpPage />}></Route>
      <Route path="/notice" element={<NoticePage />}></Route>
      <Route path="/my" element={<MyPage />}></Route>
      <Route path="/chat" element={<ChatPage />}></Route>
      <Route
        path="/notice/12732291iasd-a2kqows"
        element={<DetailPage />}
      ></Route>
      <Route path="/notice/1" element={<DetailPage2 />}></Route>

      {/* <Route path="/signup" element={<MainPage />}></Route>
      <Route path="/notice" element={<MainPage />}></Route>
      <Route path="/chat" element={<MainPage />}></Route> */}
    </Routes>
  );
};

export default Router;
