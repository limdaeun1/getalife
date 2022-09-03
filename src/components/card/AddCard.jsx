import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const AddCard = () => {

  const navigate = useNavigate();

  return (
    <>
    <TitleInput
    type="text"
    placeholder="제목 입력..."
    />
  <Textarea
    rows="8"
    placeholder="내용 입력..."
    />
 <Btn onClick={() => navigate("/")}>작성(수정)하기</Btn>
 </>
  )
}

export default AddCard

const TitleInput = styled.input`
  margin-top: 15px;
  width: 500px;
  height: 30px;
  outline: none;
  border: 2px solid #e6e3e3;
  border-radius: 5px;
  padding: 10px;
  &:focus {
    border: 2px solid gray;
  }
`;

const Textarea = styled.textarea`
  width: 500px;
  outline: none;
  border: 2px solid #e6e3e3;
  border-radius: 5px;
  padding: 0 6px;
  margin: 20px 0;
  padding: 10px;
  &:focus {
    border: 2px solid gray;
  }
`;

const Btn = styled.button`
  width: 500px;
  height: 36px;
  margin-bottom: 20px;
  font-size: 14px;
  background-color: #000000;
  border: none;
  border-radius: 7px;
  color: white;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    background-color: #666666;
  }
`;