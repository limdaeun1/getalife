import React, { useEffect } from "react";
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { getPostRank } from "../../redux/modules/post";
import Spinner from "../Spinner";

const CardRank = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cardrank = useSelector((state) => state.post.rankList);
  // console.log(cardrank)

  useEffect(() => {                  //컴포넌트 실행되면 post리스트 정보 가져옴
    dispatch(getPostRank());
  }, [dispatch]);

  if(cardrank.length==0) { return <Spinner/>}

  return (
    <>
    <Rank>
      
      <div>
      <Amg src="https://i.imgur.com/Nx9wqLI.png"></Amg>
      <Img src={cardrank[0]?.imgUrl}></Img>
      </div>
      <div>
      <Amg src="https://i.imgur.com/p97LhwX.png"></Amg>
      <Img src={cardrank[1]?.imgUrl}></Img>
      </div>
      <div>
      <Amg src="https://i.imgur.com/t3aHn5i.png"></Amg>
      <Img src={cardrank[2]?.imgUrl}></Img>
      </div>
     
    </Rank>
    <But><button onClick={() => navigate("/write")}>글 작성하러 가기</button></But>
    <Hr/>
    </>
    
  )
}

export default CardRank

const Hr = styled.hr`
  border: none;
  border-top: solid 2px #ddd;
`;

const Rank = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  padding-left: 120px;
  padding-right: 120px;
  border-radius: 25px;
  background-color: #dce1e7e0;
  height: 300px;
  
  
  div{
    width: 500px;
    
    align-items: center;
    display: flex;
  }
  `

  
const Img = styled.img`
   object-fit: cover;
    width:10rem;
    height: 10rem;
    /* margin: 0.5em 1.5em 0.5em 1em; */
    border-radius: 20%;
    width: 200px;
    height: 200px;
    
`

const Amg = styled.img`
  object-fit: cover;
    width:10rem;
    height: 10rem;
    margin: 0.5em 1.5em 0.5em 1em;
    border-radius: 50%;
`

const But = styled.div`
  margin-top: 10px;
  justify-content: center;
  display: flex;
 button {
 margin: auto 5px;
  padding: 10px 15px;
  font-weight: 400;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s;
  color: #fff;
  border: 0;
  background-color: #000000;
  &:hover {
    background-color: #666666;
  }
}
  
`