import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <StContainer>
      <StContain>
        <StText>LOGIN</StText>
        <StInput type="text" placeholder="아이디" />

        <StInput type="password" placeholder="비밀번호" />

        <StButton>로그인</StButton>

        <StButton>회원가입</StButton>
        <Stp>다른 계정으로 로그인</Stp>
        <StBKakao>카카오로 시작하기</StBKakao>
      </StContain>
    </StContainer>
  );
};

export default Login;

const StContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #607bc7;
`;

const StContain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 60vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.164);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const StText = styled.div`
  font-size: 30px;
  margin-top: 60px;
  margin-bottom: 20px;
  color: white;
`;

const StInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 1px 10px 0 rgba(31, 38, 135, 0.18);
  border-radius: 2rem;
  width: 80%;
  height: 1rem;
  padding: 1rem;
  margin: 1em;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #2b088ed7;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #ffffff;
    font-weight: 100;
    font-size: 1rem;
  }
`;

const StButton = styled.button`
  background: linear-gradient(to right, #2b33c0 0%, #03217b90 79%);
  letter-spacing: 0.2rem;
  width: 40%;
  height: 3rem;
  border: none;
  margin-top: 15px;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;

const Stp = styled.div`
  font-size: 12px;
  margin-top: 15px;
  color: #ffffffdb;
`;

const StBKakao = styled.button`
  background: #fbe200e8;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 40%;
  height: 3rem;
  border: none;
  margin-top: 15px;
  margin-bottom: 50px;
  color: #000000;
  border-radius: 2em;
  cursor: pointer;
`;
