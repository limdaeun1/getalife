import React from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import { BsHeartFill } from "react-icons/bs";

const Card = ({ post }) => {
  const navigate = useNavigate();

  return (
    <CardWrap
      onClick={() =>
        navigate("/detail/" + post.id, {
          state: {
            id: post.id,
          },
        })
      }
    >
      <CardImg src={post.imgUrl} alt="card image" />
      <Textbox>
        <Text>
          {post.name}
          <Date>
            {post.heart} <BsHeartFill color="#ff3636d2" />
          </Date>
        </Text>
        <Title>{post.title}</Title>
        {/* <Text style={{ width: "100%" }}>
     내용
    </Text> */}
      </Textbox>
    </CardWrap>
  );
};
export default Card;

const CardWrap = styled.article`
  transition: all 0.5s;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
  }
  height: 300px;
  width: 350px;
  border-radius: 10px;
  cursor: pointer;
`;

const CardImg = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  border-radius: 10px;
  /* color: #d6a9ff */
`;

const Textbox = styled.div`
  height: 20%;
  width: 100%;
  object-fit: cover;
`;
const Title = styled.div`
  font-weight: bold;
  padding: 5px 0px 0 20px;
`;
const Text = styled.div`
  padding: 5px 10px 0 20px;
  position: relative;
`;

const Date = styled.div`
  color: silver;
  position: absolute;
  right: 15px;
  top: 15px;
`;
