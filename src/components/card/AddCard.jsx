import React, { useState } from "react";
import styled from 'styled-components'
import { useNavigate ,useParams } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { addPostDB , updatePostDB } from "../../redux/modules/post";

const AddCard = () => {

  const post_list = useSelector((state) => state.post.postOne); //스토어에서 수정할페이지 정보 가져옴 //수정할때 새로고침하면 다날라가는 단점이 있음
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams(); //주소창에서 id가져옴 //수정이면 edit/:{id} (postid)일테니까  주소창에서 가져온 id는 postid가 됨
  const is_edit = id ? true : false;   //id가 있으면? is_edit이 true //detail에서 본인이여야만 수정들어오니까 wirte:id가 true 되는듯
  const [title, setTitle] = useState(is_edit ? post_list.title : "");
  const [content, setContent] = useState(is_edit ? post_list.content : "");
  const [preview, setPreview] = useState(is_edit ? post_list.imageUrl : "");
 
  //이미지 미리보기
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


  //등록 버튼 이벤트
  const handleUpload = () => {  //
    if (content === "" || preview === "" || title === "") {      //빈칸 없게 검사
      window.alert('모두 입력해 주세요!')}

    let req = {
      title: title,
      content: content,};
    let json = JSON.stringify(req);

    const file = document.querySelector("#fileinput").files[0];     // input에 들어간 파일 가져오기 // 파일 인풋에 들어간 파일들은 files 라는 리스트로 저장된다.
    const formdata = new FormData();                 //폼 전송을 가능하게 해주는 객체 (form태그 이용해 보내는거랑 같음 즉 HTML단이 아닌 자바스크립트 단에서 폼 데이터를 다루는 객체)
    const titleblob = new Blob([json], { type: "application/json" });      //데이터 json으로 바꿔줌(title이랑 content만
    formdata.append("post", titleblob);
    const contentblob = new Blob([json], { type: "application/json" });
    formdata.append("content", contentblob);
    formdata.append("file", file); 
    
    dispatch(addPostDB(formdata));
    setTitle("");
    setContent("");
    navigate("/");
  };


  //수정 버튼 이벤트
  const handlUpdate = () => {
    if (content === "" || preview === "" || title === "") {      //빈칸 없게 검사
      window.alert('모두 입력해 주세요!')
    }

    let req = {
      title: title,
      content: content,};
    let json = JSON.stringify(req);

    const file = document.querySelector("#fileinput").files[0];
    const formdata = new FormData();
    const titleblob = new Blob([json], { type: "application/json" });  
    formdata.append("post", titleblob);
    const contentblob = new Blob([json], { type: "application/json" });
    formdata.append("content", contentblob);
    formdata.append("file", file); 
    
    dispatch(updatePostDB(formdata, id));  //보내는 아이디는 post:{id} 특정post를 수정해야되기때문
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
      defaultValue={title}
      onChange={(e) => setTitle(e.target.value)}
      />
    <Textarea
      rows="8"
      placeholder="내용 입력..."
      defaultValue={content}
      onChange={(e) => setContent(e.target.value)}
      />
  {is_edit ? (
    <Btn onClick = {handlUpdate}>수정하기</Btn>)
  : (<Btn onClick = {handleUpload}>작성하기</Btn> )}
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