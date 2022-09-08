import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupDB } from "../redux/modules/user";

const Signup = () => {
  const dispatch = useDispatch();
  const [logid, setLogId] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (password !== password2) {
      return window.alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }
    dispatch(signupDB(logid, nickname, password, password2));
    navigate("/login");
  };

  return (
    <StContainer>
      <StContain>
        <StText>SIGNUP</StText>

        <StInput
          id="id"
          type="text"
          placeholder="ID : 영문자 또는 숫자 6~20자(영문자로 시작)"
          onChange={(e) => {
            setLogId(e.target.value);
          }}
          required
        />

        <StInput
          id="pw"
          type="password"
          placeholder="PW : 8자 이상(대소문자 포함) "
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />

        <StInput
          id="pw2"
          type="password"
          placeholder="PW 입력 확인"
          onChange={(e) => {
            setPassword2(e.target.value);
          }}
          required
        />

        <StInput
          id="nic"
          type="text"
          placeholder="NICKNAME : 2-10자(한글, 영문, 숫자 가능)"
          onChange={(e) => {
            setNickname(e.target.value);
          }}
          required
        />

        <StButton type="submit" onClick={handleSignUp}>
          회원가입
        </StButton>
      </StContain>
    </StContainer>
  );
};

export default Signup;

const StContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url("—Pngtree—retro pixel christmas illustration background_960176.jpg");
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
