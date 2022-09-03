import React from 'react'
import styled from 'styled-components'

const Addcomment = () => {
  return (
    <CommentWrap>
            <div>
              <Input placeholder="댓글 달기..."/>
              <MainBtn>입력</MainBtn>
            </div>
    </CommentWrap>

)}

export default Addcomment

const CommentWrap = styled.div`
max-width: 500px;
@media screen and (width: 900) {
max-width: 500px;}
p {color: red;}
`
const MainBtn = styled.button`
  margin: auto 5px;
  padding: 10px 15px;
  font-weight: 400;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s;
  color: #fff;
  border: 0;
  background-color: #000000;
  &:hover {
    background-color: #666666;
  }
`;

const Input = styled.input`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  border: solid 1px #ddd;
  padding: 10px;
  transition: border-color 300ms ease-in-out;
  outline: none;
  @media screen and (max-width: 700px) {
    width: 77%;
  }
  &:focus {
    border: solid 2px black;
  }
`;