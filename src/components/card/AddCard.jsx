import React, {  useState } from "react";
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { addPostDB } from "../../redux/modules/post";

const AddCard = () => {
  const dispatch = useDispatch();
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState("");
  
  const uploadImg = (event) => {
    const file = document.querySelector("#fileinput").files[0];  // input에 들어간 파일 가져오기 //file객체는 <input> 태그를 이용해 받은 파일들의 결과로 반환된 FileList객체로부터 얻어옴
    const reader = new FileReader();    //FlieReader 객체를 이용하여 업로드된 파일을 읽을 수 있음.result 속성에 저장
    console.log(reader)
    reader.readAsDataURL(file);            //readAsDataURL(): 파일 객체를 읽은 후 데이터 URL 표현으로 변환
    reader.onloadend = (event) => {   //이미지 미리보기 기능 //onloadend : 읽기가 성공/실패 종료될 때 발생.
      const {
        currentTarget: { result }  
      } = event;
      setPreview(result);    //result 안에 저장된 이미지 보여줌 
    };
  }

  const handleUpload = () => {
    if (content === "" || preview === "" || title === "") {      //빈칸 없게 검사
      window.alert('모두 입력해 주세요!')
    }

    const file = document.querySelector("#fileinput").files[0];     // input에 들어간 파일 가져오기 // 파일 인풋에 들어간 파일들은 files 라는 리스트로 저장된다.
    const formData = new FormData();     //폼 전송을 가능하게 해주는 객체 (form태그 이용해 보내는거랑 같음 즉 HTML단이 아닌 자바스크립트 단에서 폼 데이터를 다루는 객체)

    formData.append("imageUrl", file);      //formdata안에 서버에 보낼 데이터 넣기
    formData.append("title", title);
    formData.append("content", content);   //blob으로 바꿔줘야댄다
    console.log("formData", formData);

    dispatch(addPostDB(formData));
  };

  return (
    <>
    <ImgSection>
          <img
            src={ preview ? preview
             : "https://user-images.githubusercontent.com/75834421/124501682-fb25fd00-ddfc-11eb-93ec-c0330dff399b.jpg"
            }
            alt="업로드할 이미지"
          />
         
          <input
            id="fileinput"
            type="file"
            accept="img/*"
            onChange={uploadImg}
          />
          
    </ImgSection>
    <TitleInput
    type="text"
    placeholder="제목 입력..."
    onChange={(e) => setTitle(e.target.value)}
    />
  <Textarea
    rows="8"
    placeholder="내용 입력..."
    onChange={(e) => setContent(e.target.value)}
    />
 <Btn onClick = {handleUpload}>작성하기</Btn>
 </>
  )
}

export default AddCard

const TitleInput = styled.input`
  margin-top: 15px;
  width: 500px;
  height: 30px;
  outline: none;
  border: 2px solid #e6e3e3;
  border-radius: 5px;
  padding: 10px;
  &:focus {
    border: 2px solid gray;
  }
`;

const Textarea = styled.textarea`
  width: 500px;
  outline: none;
  border: 2px solid #e6e3e3;
  border-radius: 5px;
  padding: 0 6px;
  margin: 20px 0;
  padding: 10px;
  &:focus {
    border: 2px solid gray;
  }
`;

const Btn = styled.button`
  width: 500px;
  height: 36px;
  margin-bottom: 20px;
  font-size: 14px;
  background-color: #000000;
  border: none;
  border-radius: 7px;
  color: white;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    background-color: #666666;
  }
`;

const ImgSection = styled.div`
  display: flex;
  flex-direction: column;
  label {
    cursor:pointer;
  }
  img {
    width: 500px;
    height: 400px;
    margin-bottom: 30px;
    border-radius: 16px;
    margin-top: 60px;
  }
  button {
    width: 100px;
    height: 36px;
    margin-bottom: 20px;
    font-size: 14px;
    background-color:#000000;
    border: none;
    border-radius: 7px;
    color: white;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
    background-color: #666666;
  }
  }
`;