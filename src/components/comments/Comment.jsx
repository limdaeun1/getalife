import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteCommentDB } from "../../redux/modules/comment";
import { putCommentDB } from "../../redux/modules/comment";

export const Comment = ({ comment }) => {
  const dispatch = useDispatch();

  const commentOne = comment;
  const id = commentOne.id;
 

  // 댓글 삭제하기
  const deleteComment = () => {
    dispatch(deleteCommentDB(id));
  };

  // 댓글 수정하기
  // const onClickUpdate = () => {
  //   const content = commentRef.current.value;
  //   if (content === "") {
  //     setInputs({ ...inputs, help: "댓글을 입력해주세요!" });
  //     return false;
  //   }
  //   if (content === commentObj.content) {
  //     toggleUpdate();
  //     return false;
  //   }
  //   const _commentObj = {
  //     _id: commentObj._id,
  //     content,
  //   };
  //   dispatch(putCommentDB(_commentObj));
  //   setUpdate(false);
  // };

  return (
    <ContentWrap>
      <span>{comment.author}</span>
      <span>{comment.createAt}</span>
      <>
        <SmallBtn>수정</SmallBtn>
        <SmallBtn onClick={deleteComment}>삭제</SmallBtn>
      </>
      <div>{comment.content}</div>
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
