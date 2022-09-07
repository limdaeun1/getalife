import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { postCommentDB } from "../../redux/modules/comment";

const Addcomment = (postId) => {
  const dispatch = useDispatch();

  const commentList = useSelector((state) => state); // state 경로 나중에 다시 설정하기
  console.log(commentList);

  const [comment, setComment] = useState("");

  // onChangeComment
  const onChangeComment = (event) => {
    setComment(event.target.value);
  };

  // 댓글 작성하기
  const onClickWrite = () => {
    const commentObj = {
      postId: postId.postId,
      content: comment,
    };

    dispatch(postCommentDB(commentObj));
    setComment("");
  };

  return (
    <>
      <CommentWrap>
        <div>
          <Input
            value={comment}
            onChange={onChangeComment}
            placeholder="댓글 달기..."
          />
          <MainBtn onClick={onClickWrite}>입력</MainBtn>
        </div>
      </CommentWrap>

      <CommentWrap>
        {commentList[0] ? "" : "작성된 댓글이 없습니다.🥲"}
      </CommentWrap>
    </>
  );
};

export default Addcomment;

const CommentWrap = styled.div`
  max-width: 500px;
  @media screen and (width: 900) {
    max-width: 500px;
  }
  p {
    color: red;
  }
`;
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
