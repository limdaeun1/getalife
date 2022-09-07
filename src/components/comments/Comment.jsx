import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteCommentDB } from "../../redux/modules/comment";
import { putCommentDB } from "../../redux/modules/comment";

export const Comment = (comment) => {
  const dispatch = useDispatch();

  const seletedCmt = useSelector((state) => state.comment.commentList);

  const [update, setUpdate] = useState(false);
  const [inputs, setInputs] = useState("");

  const id = comment.comment.id;
  const post = useSelector((state) => state.post.postOne);

  // input 상태 관리
  const onChangeInput = (event) => {
    console.log(event);

    setInputs(event.target.value);
    console.log(inputs);
  };

  // 수정 영역 토글하기
  const toggleUpdate = () => {
    setUpdate((prev) => !prev);
  };

  // 댓글 수정하기
  const onClickUpdate = () => {
    console.log(inputs);
    const updatedComment = {
      commentId: comment.comment.id,
      postId: post.id,
      content: inputs,
    };
    console.log(updatedComment);

    dispatch(putCommentDB(updatedComment));
    setUpdate(false);
  };

  // 댓글 삭제하기
  const deleteComment = () => {
    dispatch(deleteCommentDB(id));
  };
  console.log(comment);
  return (
    <ContentWrap>
      <span>{comment.comment.author}</span>
      <span>{comment.comment.createAt}</span>
      <>
        <SmallBtn onClick={toggleUpdate}>{update ? "닫기" : "수정"}</SmallBtn>
        <SmallBtn onClick={deleteComment}>삭제</SmallBtn>
      </>
      <div>{comment.comment.content}</div>
      {update ? (
        <>
          <Input name="comment" onChange={onChangeInput} />
          <MainBtn onClick={onClickUpdate}>입력</MainBtn>
        </>
      ) : null}
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

export const Input = styled.input`
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

export const MainBtn = styled.button`
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
