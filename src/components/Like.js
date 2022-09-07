import React from "react";

import styled from "styled-components";
import Heart from "../Img/Heart.png";
import emptyHeart from "../Img/emptyHeart.png";

const Like = ({ heart, onClick }) => {
  const heart_url = heart ? Heart : emptyHeart;
  // console.log(heart);

  return <HeartI src={heart_url} onClick={onClick} />;
};

const HeartI = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
  :hover {
    width: 36px;
    height: 36px;
  }
`;

export default Like;