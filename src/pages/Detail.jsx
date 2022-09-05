import React, { useEffect, useRef, useState } from "react";

import Header from "../components/Header";
import Layout from "../components/Layout";
import CommentList from "../components/comments/CommentList";
import Addcomment from "../components/comments/Addcomment";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();

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
              <span>
                <SmallBtn
                  onClick={() => {
                    navigate(`/edit/${postId}`);
                  }}
                >
                  수정
                </SmallBtn>
                <SmallBtn>삭제</SmallBtn>
              </span>
              <p>내용</p>
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
