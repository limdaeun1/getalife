import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StContainer>
      <p>게더라이프</p>
      <p>GET A LIFE</p>
    </StContainer>
  );
};

export default Header;

const StContainer = styled.div`
  width: calc(100%-300px);
  border: 1px solid #ddd;
  border-radius: 15px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;