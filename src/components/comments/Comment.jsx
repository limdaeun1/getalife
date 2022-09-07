import React from "react";
import styled from "styled-components";
import post from "../../redux/modules/post";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { deletePostDB } from "../../redux/modules/post";
import comment from "../../redux/modules/comment";

export const Comment = ({ commentObj }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const commentObj = { content: "실패" };

  const postId = post.id; // const postId = location.state.postId; _서버에서 받아와야함 //
  //console.log(postId); // 0_가짜 데이터

  // 댓글 삭제하기
  const deletePost = () => {
    dispatch(deletePostDB(postId));
  };

  // 댓글 수정하기 _작성해야됨

  return (
    <ContentWrap>
      <span>{post.name}</span>
      <span>{post.createAt}</span>
      <>
        <SmallBtn
        // onClick={() => {}} // 댓글 수정
        >
          수정
        </SmallBtn>
        <SmallBtn onClick={deletePost}>삭제</SmallBtn>
      </>
      <div>{commentObj.content}</div>
    </ContentWrap>
  );
};

export default Comment;

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
