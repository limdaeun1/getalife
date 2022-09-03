import React from 'react'
import styled from 'styled-components';

const Comment = () => {
  return (
    <ContentWrap>
    <span>닉네임</span>
    <span className="time">날짜</span>
      <>
        <SmallBtn> 수정</SmallBtn>
        <SmallBtn >삭제</SmallBtn>
      </>
    <div>내용</div>
   </ContentWrap>
);
};


export default Comment

const ContentWrap = styled.div`
  max-width: 500px;
  border: solid 1px #ddd;
  border-radius: 10px;
  padding: 15px;
  width: 100%;
  span {
    margin-right: 20px;
  }
  p {
    color: red;
  }
  .time {
    color: silver;
  }
`;

const SmallBtn = styled.button`
  cursor: pointer;
  transition: all 0.5s;
  background-color: white;
  border: 0;
  color: gray;
  font-size: medium;
  &:hover {
    color: black;
  }
`;