import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import CommentList from "../components/comments/CommentList";
import Addcomment from "../components/comments/Addcomment";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostOneDB, deletePostDB } from "../redux/modules/post";
import Like from "../components/Like";
import { editLikeAX } from "../redux/modules/post";

let num = 0
const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams(); //post의 id  //새로고침해도 안날라가게 하기위해 state말고 params로 따옴
  const userId = useSelector((state) => state.user.user.name); //app.js에 있는 로그인상태체크 함수 덕분에 새로고침해도 계속 state에 userid가 있음
  const post = useSelector((state) => state.post.postOne); //스토어에서 가져오기위해서는 시간필요
  const is_Login = useSelector((state) => state.user.is_login);
  // console.log(userId) //콘솔에 바로 띄울라하면 시간차 있음 페이지에서 userid쓸려고 불러올때는 시간상 괜찮을듯?
  const heart = useSelector((state) => state.post.postOne.heart);
  const [like, setLike] = useState(false);

  useEffect(() => {
    dispatch(getPostOneDB(id));
  }, [dispatch, id]);

  const deletePost = () => {
    dispatch(deletePostDB(id));
  };

  
  
  const toggleLike = (id) => {
    if (is_Login) {
      
     
      dispatch(editLikeAX(id,num));
    } else {
      window.alert("로그인 후 좋아요를 눌러주세요!");
    }
   num++
  };
  
  return (
    <>
      <Header />
      <Layout>
        <MainBody>
          <ContentWrap>
            <PostImg src={post.imgUrl} alt="post image" />
            <Wrap>
              <h2>{post.title}</h2>
              <Likebox>
                <Like
                  onClick={() => {
                    toggleLike(id);
                  }}
                />
                <p>{heart}</p>
              </Likebox>
              <div>{post.createdAt}</div>
              <span>{post.name}</span>
              {post.name === userId && (
                <span>
                  <SmallBtn
                    onClick={() => {
                      navigate(`/edit/${id}`);
                    }}
                  >
                    수정
                  </SmallBtn>
                  <SmallBtn onClick={deletePost}>삭제</SmallBtn>
                </span>
              )}
              <p>{post.content}</p>

              <Hr />
              <h2>댓글</h2>
            </Wrap>
            {post.name === userId && <Addcomment postId={id} />}
            <CommentList postId={id} />
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

const Likebox = styled.div`
  /* display: flex; */
  float: right;
  margin: 10px;
  p {
    margin-left: 11px;
  }
`;
