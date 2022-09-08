import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Loginpage from "../pages/Loginpage";
import Main from "../pages/Main";
import Mypage from "../pages/Mypage";
import Signuppage from "../pages/Signuppage";
import Write from "../pages/Write";
import { useSelector } from "react-redux";
import Kakao from "../components/Kakao";

const Router = () => {

  // const isLogin = useSelector((state) => state.user.is_login);
 

  return (
    <BrowserRouter>
      <Routes>
             
        <Route path="write" element={<Write />} />
        <Route path="edit/:id" element={<Write />} />
        <Route path="mypage" element={<Mypage />} />
        
        <><Route path="login" element={<Loginpage />} />
        <Route path="signup" element={<Signuppage />} />
        </>
      
        <Route path="detail/:id" element={<Detail />} />
        <Route path="/" element={<Main />} />
        <Route path="/token" element={<Kakao />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;