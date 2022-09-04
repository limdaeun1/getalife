import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//import signupDB

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logid, setLogId] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [nickname, setNickname] = useState("");

  const logidCheck = (logid) => {
    let reg = /^[a-z]+[a-z0-9]{5,19}$/g; // 영문자로 시작하는 영문자 또는 숫자 6~20자
    return reg.test(logid);
  };

  const passwordCheck = (password) => {
    let reg1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // 최소 8 자, 하나 이상의 대문자, 하나의 소문자 및 하나의 숫자
    return reg1.test(password);
  };

  const nicknameCheck = (nickname) => {
    let reg2 = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,10}$/; // 한글, 영문, 숫자만 가능하며 2-10자리 가능
    return reg2.test(nickname);
  }; // test _대응되는 문자열이 있는지 검사하는 메소드, true OR false를 반환

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!logid || !password || !password2 || !nickname) {
      // ?? : pass2에 왜 ! 쓰는지
      return alert("내용을 입력하세요");
    }
    if (!logidCheck(logid)) {
      return alert("아이디를 형식에 맞게 입력하세요");
    }
    if (!passwordCheck(password)) {
      return alert("비밀번호를 형식에 맞게 입력학세요");
    }
    if (!nicknameCheck(nickname)) {
      return alert("닉네임을 형식에 맞게 입력하세요");
    }
    if (password !== password2) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다");
    }
    // dispatch(SignupDB(logid, nickname, password));
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
        {/* <button>중복확인</button> */}

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

        <StButton type="submit" onClick={() => navigate("/login")}>
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
