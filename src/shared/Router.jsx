import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Loginpage from "../pages/Loginpage";
import Main from "../pages/Main";
import Mypage from "../pages/Mypage";
import Signuppage from "../pages/Signuppage";
import Write from "../pages/Write";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="detail" element={<Detail />} />
        <Route path="login" element={<Loginpage />} />
        <Route path="mypage" element={<Mypage />} />
        <Route path="signup" element={<Signuppage />} />
        <Route path="write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;