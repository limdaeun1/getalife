import React from 'react'
import styled from "styled-components";

const Card = () => {
  return (
    <CardWrap>
    <CardImg src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MDdfMjAg%2FMDAxNjU5ODU1MTM5OTk2.x996AIK9wxByUxBDMC0EAfU62x7jjGQco9SRFNe4jIQg.-isWOQKwehWILiZQDB3ArtGhO2QMzoX0zzvIQ7NxbsUg.JPEG.raoncatgm%2FKakaoTalk_20220804_182629251_10.jpg&type=sc960_832" alt="card image" />
    <Textbox>
    <Text>
      닉네임
    <Date>좋아요갯수</Date>
    </Text>
    <Title>
      제목
    </Title>
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
`;

const Textbox = styled.div`
  height: 20%;
  width: 100%;
  object-fit: cover;
`
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
