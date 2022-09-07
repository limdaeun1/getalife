import React from "react";
import styled from "styled-components";
import post from "../../redux/modules/post";
import { useDispatch } from "react-redux";
import { deleteCommentDB } from "../../redux/modules/comment";

export const Comment = ({ commentObj }) => {
  const dispatch = useDispatch();
  // const commentObj = { content: "실패" };

  const id = post.id; // const postId = location.state.postId; _서버에서 받아와야함 //
  //console.log(postId); // 0_가짜 데이터

  // 댓글 삭제하기
  const deleteComment = () => {
    dispatch(deleteCommentDB(id));
  };

  // 댓글 수정하기 _작성해야됨

  return (
    <ContentWrap>
      <span>{post.name}</span>
      <span>{post.createAt}</span>
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
