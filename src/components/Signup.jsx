import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logid, setLogId] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPasswor2] = useState("");
  const [nickname, setNickname] = useState("");

  const logidCheck = (logid) => {
    //
  };

  const passwordCheck = (password) => {
    let reg1 = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
    return reg1.test(password);
  };

  const nicknameCheck = (nickname) => {
    let reg2 = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,10}$/; //"닉네임은 한글, 영문, 숫자만 가능하며 2-10자리 가능. "
    return reg2.test(nickname);
  };
  return (
    <StContainer>
      <StContain>
        <StText>SIGNUP</StText>

        <StInput type="text" placeholder="아이디 입력" />
        {/* <button>중복확인</button> */}

        <StInput type="password" placeholder="비밀번호 입력" />
        <StInput type="password" placeholder="비밀번호 확인" />

        <StInput type="text" placeholder="닉네임 입력" />
        <StButton>회원가입</StButton>
      </StContain>
    </StContainer>
  );
};

export default Signup;

const StContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #607bc7;
`;

const StContain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 70vh;
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
  height: 2.3rem;
  border: none;
  margin-top: 35px;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;
