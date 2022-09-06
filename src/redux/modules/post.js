import { createAction, handleActions } from "redux-actions";  //리듀서를 작성할 때 switch문이 아닌 handleActions라는 함수를 사용할 수 있게 해준다.
import axios from "axios";
import { produce } from "immer";

const accesstoken = localStorage.getItem("token");
const refreshtoken = localStorage.getItem("refresh-token");

//Action
const MODIFY_POST = "MODIFY_POST";

//Action Creator
const modifyPost = createAction(MODIFY_POST, (post, id) => ({   //post는 formData를 받아온것
  post,
  id,
}));

//Initial State
const initialState = {
  postOne: {
    id: "",
    createdAt: "",
    title: "",
    content: "",
    name: "",
    imageUrl: "",
  },
  postList: [
    {
      id: "",
      createdAt: "",
      title: "",
      content: "",
      name: "",
      imageUrl: "",
    },
  ],
};

//Middleware
const url = "http://13.125.102.125:8080";

// 게시물 업로드
export const addPostDB = (formdata) => {
  return async function (dispatch, getState) {
    await axios
      .post(url + "/api/auth/post", formdata, {
        // withCredentials: true,  // 여부에따라 401오류 500오류
        headers: {
          "content-Type": "multipart/form-data",
          authorization: accesstoken,
         'refresh-token': refreshtoken,
        },
      })
      .then((response) => {
        if(response.data.success == true) 
        { window.alert("등록되었습니다.")
          
        }
        else{
        const errormessage = response.data.error.message
        window.alert(`${errormessage}`);        
        // window.location.assign("/")
      }})
      .catch((error) => {
        console.log(error);
      });
  };
};

// 게시물 수정

export const updatePostDB = (formdata, id) => { //postId는 params id를 받아온것
  return async function (dispatch, getState) {
   await axios
      .put(url + `/api/posts/${id}`, formdata, {
        
        headers: {
          "content-Type": "multipart/form-data",
          authorization: accesstoken,
         'refresh-token': refreshtoken,
        },
      })
      .then((response) => {
        if(response.data.success == true) 
        { console.log(response);
          dispatch(modifyPost(formdata, id));
          window.alert("수정되었습니다.")
          
        }
        else{
        const errormessage = response.data.error.message
        window.alert(`${errormessage}`);        
        // window.location.assign("/")
      }})
      .catch((error) => {
        console.log(error);
      });
  };
};

//reducer
export default handleActions(   
  { //스토어에 수정하고 꼭 넣어야할까? get을 서버 들려서 해주고 있는데
    [MODIFY_POST]: (state, action) => {  //post와 (post)id 들어오는중
    produce(state, (draft) => {
      const index = draft.postList.findIndex(
        (p) => p.id === action.payload.id
      );
      draft.postList[index] = {
        ...draft.postList[index],
        ...action.payload.post,
      };
    })}
    },
  initialState
);

