import React from "react";

const Login = () => {
  return (
    <>
      <h1>로그인</h1>
      <label>ID</label>
      <input type="text" />
      <label>PW</label>
      <input type="text" />
      <button>로그인</button>
      <button>회원가입</button>
      <p>다른 계정으로 로그인</p>
    </>
  );
};

export default Login;
