import { createAction, handleActions } from "redux-actions";  //리듀서를 작성할 때 switch문이 아닌 handleActions라는 함수를 사용할 수 있게 해준다.
import axios from "axios";
import { produce } from "immer";



//Action
const MODIFY_POST = "MODIFY_POST";
const GET_POST_LIST = "GET_POST_LIST";
const GET_POST_ONE = "GET_POST_ONE";
const GET_POST_RANK_LIST = "GET_POST_RANK_LIST";
const GET_MY_PAGE = "GET_MY_PAGE";

//Action Creator
const modifyPost = createAction(MODIFY_POST, (post, id) => ({   //post는 formData를 받아온것
  post,
  id,
}));
const getPostList = createAction(GET_POST_LIST, (postList) => ({ postList }));
const getPostOne = createAction(GET_POST_ONE, (postOne) => ({ postOne }));
const getPostRanklist = createAction(GET_POST_RANK_LIST, (rankList) => ({ rankList }));
const getMypage = createAction(GET_MY_PAGE, (mypageList) => ({ mypageList}));

//Initial State
const initialState = {
  postOne: {
    id: "",
    createdAt: "",
    modifiedAt:"",
    title: "",
    content: "",
    name: "",
    imgUrl: "",
    heart:"",
    commentResponseDtoList:""

  },
  postList: [
    {
      commentResponseDtoList:"",
      id: "",
      createdAt: "",
      modifiedAt:"",
      title: "",
      content: "",
      name: "",
      imgUrl: "",
      heart:"",
    },
  ],
  rankList:[],
  mypageList:{},
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
          authorization: localStorage.getItem("token"),
         'refresh-token': localStorage.getItem("refresh-token"),
        },
      })
      .then((response) => {
        if(response.data.success == true) 
        { window.alert("등록되었습니다.")
        window.location.assign("/")
          
        }
        else{
        const errormessage = response.data.error.message
        window.alert(`${errormessage}`);        
        window.location.assign("/")
      }})
      .catch((error) => {
        console.log(error);
        window.alert("등록에 실패하였습니다.")
        window.location.assign("/")
      });
  };
};

// 게시물 수정

export const updatePostDB = (formdata, id) => { //postId는 params id를 받아온것
  return async function (dispatch, getState) {
   await axios
      .put(url + "/api/auth/post/" + id, formdata, {
        
        headers: {
          "content-Type": "multipart/form-data",
          authorization: localStorage.getItem("token"),
         'refresh-token': localStorage.getItem("refresh-token"),
        },
      })
      .then((response) => {
        if(response.data.success == true) 
        { console.log(response);
          dispatch(modifyPost(formdata, id));
          window.alert("수정되었습니다.")
          window.location.assign("/")
          
        }
        else{
        const errormessage = response.data.error.message
        window.alert(`${errormessage}`);        
        window.location.assign("/")
      }})
      .catch((error) => {
        console.log(error);
        window.alert("수정이 실패하였습니다."); 
        window.location.assign("/")
      });
  };
};

// 게시물 삭제
export const deletePostDB = (id) => {
  return async function (dispatch) {
    await axios
      .delete(url + "/api/auth/post/" + id, {
        headers: {
          authorization: localStorage.getItem("token"),
         'refresh-token': localStorage.getItem("refresh-token"),
        },
      })
      .then((response) => {
        if(response.data.success == true) 
        { window.alert("삭제되었습니다.")
         window.location.assign("/")
        }
        else{
        window.alert("삭제가 실패하였습니다.");   
        window.location.assign("/")
      }})
      .catch((error) => {
        console.log(error);
        window.alert("삭제가 실패하였습니다.");
        window.location.assign("/")
      });
  };
};

// 게시물 모두 불러오기 | GET
export const getPostListDB = () => async (dispatch) => {
  try {
    const { data } = await axios.get(url + "/api/post");
    
    dispatch(getPostList(data));
  } catch (error) {
    alert("게시물을 불러오는 중에 오류가 발생했습니다.");
    console.log(error);
  }
};

// 게시글 하나 불러오기 | GET
export const getPostOneDB = (id) => async (dispatch) => {
  try {
    const {data} = await axios.get(url + "/api/post/" + id);
    dispatch(getPostOne(data.data));
    }
  catch (error) {
    alert("게시물을 불러오는 중에 오류가 발생했습니다.");
    console.log(error);
    window.location.assign("/")
  }
};

// 랭킹 게시글 가져오기 | GET
export const getPostRank = () => async (dispatch) => {
  try {
    const { data } = await axios.get(url + "/api/post/ranking");
    dispatch(getPostRanklist(data.data));
  } catch (error) {
    alert("게시물을 불러오는 중에 오류가 발생했습니다.");
    console.log(error);
  }
};

//마이페이지
export const myPageDB = () => {
  return async function (dispatch) {
    await axios
      .get(url + "/api/auth/member/mypage" , {
        headers: {
          authorization: localStorage.getItem("token"),
         'refresh-token': localStorage.getItem("refresh-token"),
        },
      })
      .then((response) => {
        dispatch(getMypage(response.data));
      })
      .catch((error) => {
        console.log(error);
        window.alert("에러 발생.");
        window.location.assign("/")
      });
  };
};

//게시글 좋아요 상태 바꾸기
export const editLikeAX = (id) => {
  return async function (dispatch, getState) {
    await axios
      .post(url + "/api/auth/post/heart/" + id, {}, {
        // withCredentials: true,  // 여부에따라 401오류 500오류
        headers: {
          authorization: localStorage.getItem("token"),
         'refresh-token': localStorage.getItem("refresh-token"),
        },
      })
      .then((response) => {
        const like_state = {
          heartState: response.data.data,
          }; //지워도됨
          })
      .catch((error) => {
        console.log(error);
        window.alert("에러 발생.")
        window.location.assign("/")
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
    })},

      [GET_POST_LIST]: (state,{ payload }) =>
      produce(state, (draft) => {
        draft.postList = payload.postList.data;
        }),  
      
      [GET_POST_ONE]: (state, { payload }) =>
      produce(state, (draft) => {
          draft.postOne = payload.postOne;
      }),

      [GET_POST_RANK_LIST]: (state,{ payload }) =>
      produce(state, (draft) => {
        draft.rankList = payload.rankList;
        }),  

      [GET_MY_PAGE]: (state,{ payload }) =>
      produce(state, (draft) => {
          draft.mypageList = payload.mypageList;
      }),    
 
        
    },
  initialState 
);


const actionCreators = {
  getPostListDB,
  getPostList,
  getPostOneDB,
  getPostOne,
};

export { actionCreators };
