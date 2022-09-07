import React, { useEffect , useState } from "react";
import { useDispatch , useSelector } from 'react-redux';
import Header from "../components/Header";
import Layout from "../components/Layout";
import styled from "styled-components";
import { myPageDB } from "../redux/modules/post";
import Spinner from "../components/Spinner";
import { changeName } from "../redux/modules/user";

const Mypage = () => {
  const myDB = useSelector((state) => state.post.mypageList.data);
  const [name, setName] = useState("");
  const [done, setDone] = useState(false);
  
  

  
  const dispatch = useDispatch();

  useEffect(() => {                  
    dispatch(myPageDB());
  }, [dispatch]);

  
  const nameUpdate = () => {
    if (name == "") {
     return window.alert("닉네임을 입력해주세요!")
    }
    
    const confirm = window.confirm("닉네임을 변경 하시겠어요?");
      if (confirm) {
          dispatch(changeName(name));
        }
      
      setDone(!done)};



  return (
    <>
      <Header />
      <Layout>
        <UploadSection>
          <BorderSection>
            <Profil>
              <Name>
                <Avatar
                  src="https://innertrip.co.kr/wp-content/uploads/2022/02/Try-gather-for-free-avatar.png"
                  alt="profile"
                />
                <h1></h1>
                <pre> </pre>
                <p>{myDB?.name}님</p>
              </Name>
              <Hr />
              <Menu>
                <div>
                  <h3>게시글</h3>
                  <p>{myDB?.totalPostNumber}개</p>
                </div>
                <div>
                  <h3>🧡</h3>
                  <p>{myDB?.totalHeartNumber}개</p>
                </div>
                <Div>
                  {done ? <button onClick={nameUpdate} >변경 하기</button> :
                  <button onClick={() => {setDone(!done)}} >닉네임 변경</button>}
                  {done ? 
                <Input onChange={(e) => { setName(e.target.value); }} />:null }
                  
                </Div>
                
              </Menu>
            </Profil>
          </BorderSection>
        </UploadSection>
      </Layout>
    </>
  );
};

export default Mypage;

const BorderSection = styled.div`
  max-width: 700px;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 7px 1px rgb(64 60 67 / 16%);
  margin-top: 20px;
  border-radius: 15px;
  padding-bottom: 10px;
  align-items: center;
  justify-content: center;
`;

const UploadSection = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 20px;
`;

const Profil = styled.li`
  align-items: center;
  margin-bottom: 0.5em;
  border-radius: 1em;
  padding: 0.5em 3em;
  box-shadow: 6px 6px 8px 0px makerShadow;
  max-width: 30rem;
  width: 100%;
  list-style: none;
`;

const Avatar = styled.img`
  width: 10rem;
  height: 10rem;
  margin: 0.5em 1.5em 0.5em 1em;
  border-radius: 50%;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
`;

const Hr = styled.hr`
  border: none;
  border-top: solid 1px #ddd;
`;

const Menu = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  justify-content: space-between;

  div {
    border-radius: 1em;
    box-shadow: 0 2px 7px 1px rgb(64 60 67 / 16%);
    width: 150px;
    height: 100px;
    text-align: center;
  }
  button {
    cursor: pointer;
    transition: all 0.5s;
    background-color: white;
    border: 0;
    color: gray;
    font-size: medium;
    &:hover {
      color: black;
    }
  }
`;

const Div = styled.div`
  border-radius: 1em;
  box-shadow: 0 2px 7px 1px rgb(64 60 67 / 16%);
  width: 150px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  
`;

const Input =styled.input`
  width: 100px;
  height: 17px;
  position : relative;
  bottom:70px;
  border-radius: 10px;
  border: solid 1px #ddd;
  transition: border-color 300ms ease-in-out;
  outline: none;
  @media screen and (max-width: 700px) {
    width: 77%;
  }
  &:focus {
    border: solid 2px black;
  }
   `

