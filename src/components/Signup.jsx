import React from "react";

const Signup = () => {
  return (
    <div>
      <h1>회원가입</h1>
      <label>ID</label>
      <input type="text" />
      <button>중복확인</button>
      <label>PW</label>
      <input type="text" />
      <label>PW 확인</label>
      <input type="text" />
      <label>닉네임</label>
      <input type="text" />
      <button>회원가입</button>
    </div>
  );
};

export default Signup;
