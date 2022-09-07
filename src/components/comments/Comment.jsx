import React from "react";
import styled from "styled-components";
import post from "../../redux/modules/post";
import { useDispatch } from "react-redux";
import { deleteCommentDB } from "../../redux/modules/comment";

export const Comment = ({ comment }) => {
  const dispatch = useDispatch();

  const commentOne = comment;
  const id = comment.id;
  console.log(commentOne);

  // 댓글 삭제하기
  const deleteComment = () => {
    dispatch(deleteCommentDB(id));
  };

  // 댓글 수정하기 _작성해야됨

  return (
    <ContentWrap>
      <span>{comment.name}</span>
      <span>{comment.createAt}</span>
      <>
        <SmallBtn
        // onClick={() => {
        //   navigate(`/edit/${postId}`);
        // }}
        >
          수정
        </SmallBtn>
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
