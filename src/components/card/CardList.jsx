import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from './Card'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { getPostListDB } from "../../redux/modules/post";
import Spinner from "../Spinner";

const CardList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const postList = useSelector((state) => state.post.postList);

    useEffect(() => {                  //컴포넌트 실행되면 post리스트 정보 가져옴
      dispatch(getPostListDB());
    }, [dispatch]);
    

    if(postList.length==0) { return <Spinner/>}
  
    return (
    <>
    <MainBody>
    <MainGrid >
    
    {postList?.map((post) => {
          return <Card post={post} key={post.id} />;
        })}
      
    </MainGrid>
    </MainBody>
    
    </>
  )
}

export default CardList

const MainGrid = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 60px;
`;

const MainBody = styled.div`
  width: 75%;
  margin: 10px auto;
  @media screen and (max-width: 900px) {
    width: 95%;
  }
`;