import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();  

  return (
    <StContainer>
      <Img onClick={() => navigate("/")} 
      src="data:image/png;base64,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"></Img >
      <Logo src="https://i.imgur.com/RJtMeEy.png" alt="profile"/>
      <But>
        <button onClick={() => navigate("/login")} >로그인</button>
      </But>
    </StContainer>
  );
};

export default Header;

const StContainer = styled.header`
  /* width: calc(100%-300px); */
  border: 1px solid #ddd;
  border-radius: 15px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`


const Logo= styled.img`
    margin-top: 10px;
    width: 170px;
    height: 70px;
    `
 

const Img = styled.img`
   width: 50px;
  height: 50px;
  margin-left: 20px;
`

const But = styled.div`
  
`