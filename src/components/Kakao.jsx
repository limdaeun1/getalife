import React from 'react'
import axios from 'axios'
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
const Kakao = () => {
    const dispatch = useDispatch();
    
    const kakaoLogin = () => {
       
          axios({
            method: "GET",
            url: "http://13.125.102.125:8080/api/member/kakao",
          })
            .then((res) => {
              console.log(res); // 토큰이 넘어올 것임
              
            //   const ACCESS_TOKEN = res.data.accessToken;
              
            //   localStorage.setItem("token", ACCESS_TOKEN);    //예시로 로컬에 저장함    
              
            //   history.replace("/main") // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
              
              }).catch((error) => {
              console.log("소셜로그인 에러", error);
            //   window.alert("로그인에 실패하였습니다.");
            //   history.replace("/login"); 
        })
      }    

      

      // useEffect(() => {                 
      //   dispatch(kakaoLogin);
      // }, [dispatch]);
  
  
    return (
      <>
    <div>Kakao로그인중</div>
    <button onClick={kakaoLogin}>토큰받기</button>
    </>
  )
}

export default Kakao