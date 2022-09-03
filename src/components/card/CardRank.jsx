import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const CardRank = () => {

  const navigate = useNavigate();

  return (
    <>
    <Rank>
      
      <div>
      <Amg src="https://i.imgur.com/Nx9wqLI.png"></Amg>
      <Img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MDdfMjAg%2FMDAxNjU5ODU1MTM5OTk2.x996AIK9wxByUxBDMC0EAfU62x7jjGQco9SRFNe4jIQg.-isWOQKwehWILiZQDB3ArtGhO2QMzoX0zzvIQ7NxbsUg.JPEG.raoncatgm%2FKakaoTalk_20220804_182629251_10.jpg&type=sc960_832"></Img>
      </div>
      <div>
      <Amg src="https://i.imgur.com/p97LhwX.png"></Amg>
      <Img src="data:image/jpeg;base64,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"></Img>
      </div>
      <div>
      <Amg src="https://i.imgur.com/t3aHn5i.png"></Amg>
      <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwjIiKiqfsKwom-KmgbgaE0VkbHt0YLPwW1A&usqp=CAU"></Img>
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