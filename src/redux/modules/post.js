import axios from "axios";

//Initial State
const initialState = {
  postOne: {
    postId: "",
    createdAt: "",
    title: "",
    content: "",
    nickName: "",
    imageUrl: "",
  },
  postList: [
    {
      postId: "",
      createdAt: "",
      title: "",
      content: "",
      nickName: "",
      imageUrl: "",
    },
  ],
};

//Middleware
const url = "http://13.125.102.125:8080";

// 게시물 업로드
export const addPostDB = (formData) => {
  return async function (dispatch, getState) {
    await axios
      .post(url + "/auth/post", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${localStorage.getItem("token")}`,   // 함수가 아닌{} 문자열을 반환시켜줘야하기 떄문에 `${}`
          ['Refresh-token']: `${localStorage.getItem("refresh-token")}`  
        },
      })
      .then((response) => {
        if(response.data.success == true) 
        { window.alert("등록되었습니다.")
          
        }
        else{
        const errormessage = response.data.error.message
        window.alert(`${errormessage}`);        //서버안에 
        // window.location.assign("/")
      }})
      .catch((error) => {
        console.log(error);
      });
  };
};

