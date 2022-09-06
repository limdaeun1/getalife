import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostOneDB, deletePostDB } from "../redux/modules/post";
import { getCommentListDB } from "../redux/modules/comment";

import Header from "../components/Header";
import Layout from "../components/Layout";
import CommentList from "../components/comments/CommentList";
import Addcomment from "../components/comments/Addcomment";

const Detail = () => {
  const post = {
    id: 0,
    title: "제목",
    createAt: "날짜",
    name: "닉네임",
    content: "내용",
  }; // 임시 데이터, 서버 연결 후 지울 예정

  const location = useLocation(); // const postId = location.state.postId;
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.user.user.userId);

  const postId = post.id; // const postId = location.state.postId; _서버에서 받아와야함 //
  //console.log(postId); // 0_가짜 데이터

  // 해당 게시물과 댓글 목록 불러오기
  useEffect(() => {
    dispatch(getPostOneDB(postId));
    dispatch(getCommentListDB(postId));
  }, [dispatch, postId]);

  // 게시글 삭제하기
  const deletePost = () => {
    dispatch(deletePostDB(postId));
  };

  return (
    <>
      <Header />
      <Layout>
        <MainBody>
          <ContentWrap>
            <PostImg src={post.imageUrl} alt="post image" />
            <Wrap>
              <h2>{post.title}</h2>
              <div>{post.createAt}</div>
              <span>{post.name}</span>
              {post.userId === userId && (
                <span>
                  <SmallBtn>수정</SmallBtn>
                  <SmallBtn onClick={deletePost}>삭제</SmallBtn>
                </span>
              )}
              <p>{post.content} _데이터 받아와야함</p>
              <Hr />
              <h2>댓글</h2>
            </Wrap>
            <Addcomment />
            <CommentList />
          </ContentWrap>
        </MainBody>
      </Layout>
    </>
  );
};

export default Detail;

const MainBody = styled.div`
  width: 70%;
  margin: 10px auto;
  @media screen and (max-width: 900px) {
    width: 95%;
  }
`;

const ContentWrap = styled.article`
  max-width: 800px;
  margin: 0 auto;
  div {
    margin: 15px auto;
  }
`;

const Wrap = styled.div`
  max-width: 500px;
  @media screen and (width: 900) {
    max-width: 500px;
  }
  div {
    color: silver;
  }
`;

const PostImg = styled.img`
  width: 100%;
  max-height: 800px;
  object-fit: scale-down;
`;

const Hr = styled.hr`
  border: none;
  border-top: solid 1px #ddd;
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
