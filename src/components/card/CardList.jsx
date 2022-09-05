import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from './Card'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const CardList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const postList = useSelector((state) => state.post.postList);

  
    return (
    <>
    <MainBody>
    <MainGrid onClick={() => navigate("/detail")}>
    <Card onClick={() => navigate("/detail")}/>
    {/* {postList.map((post, index) => {
          return <Card post={post} key={index} />;
        })} */}
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
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