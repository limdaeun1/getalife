import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { postCommentDB, getCommentListDB } from "../../redux/modules/comment";

const Addcomment = () => {
  const dispatch = useDispatch();

  const userId = "lyn"; //= useSelector((state) => state.user.user.userId);
  const name = useSelector((state) => state.user.user.name);
  const commentList = {
    postId: 0,
    title: "",
    content: "",
  }; // = useSelector((state) => state.comment.commentList);

  const commentRef = useRef(""); // 잘 안 먹히고 있는 것 같음
  const [comment, setComment] = useState("");
  const [help, setHelp] = useState("");

  // onChangeComment
  const onChangeComment = (event) => {
    setComment(event.target.value);
  };

  // 댓글 작성하기
  const onClickWrite = () => {
    if (commentRef.current.value === "") {
      setHelp("댓글을 입력해주세요!");
      return false;
    }

    const commentObj = {
      postId: 0, // 해당 게시글 아이디 확인
      name: "닉네임",
      userId: "", // logid ? _해당 유저 아이디 확인
      content: commentRef.current.value,
    }; // 원래 키 값만 있었음. 임시 데이터 넣은 것

    dispatch(postCommentDB(commentObj));
    setComment("");
    setHelp("");
  };

  return (
    <>
      {userId && (
        <CommentWrap>
          <div>
            <Input
              ref={commentRef}
              value={comment}
              onChange={onChangeComment}
              placeholder="댓글 달기..."
            />
            <MainBtn onClick={onClickWrite}>입력</MainBtn>
          </div>
          <p>{help}</p>
        </CommentWrap>
      )}

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
