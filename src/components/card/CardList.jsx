import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from './Card'
import styled from 'styled-components'

const CardList = () => {
  
    const dispatch = useDispatch();
    const postList = useSelector((state) => state.post.postList);

  
    return (
    <>
    <MainBody>
    <MainGrid>
    <Card/>
    {/* {postList.map((post, index) => {
          return <Card post={post} key={index} />;
        })} */}
    </MainGrid>
    </MainBody>
    
    </>
  )
}

export default CardList

const MainGrid = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 30px;
`;

const MainBody = styled.div`
  width: 90%;
  margin: 10px auto;
  @media screen and (max-width: 900px) {
    width: 95%;
  }
`;