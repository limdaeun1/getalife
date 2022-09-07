import axios from "axios";
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// Action
const GET_COMMENT_LIST = "GET_COMMENT_LIST";
const POST_COMMENT = "POST_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

// Action Creator
const getCommentList = createAction(GET_COMMENT_LIST, (commentList) => ({
  commentList,
}));
const postComment = createAction(POST_COMMENT, (comment) => comment);
const deleteComment = createAction(DELETE_COMMENT, (comment) => comment);

// initialState
const initialState = {
  commentList: [
    {
      postId: "",
      content: "내용",
      commentId: "id",
      createdAt: "2022-04-04",
      nickName: "닉네임",
    },
  ],
};

//Middleware
const url = "http://13.125.102.125:8080";

// 댓글 모두 불러오기 | GET
export const getCommentListDB = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(url + "/comments" + id); // const { data } = await axios.get(url + "/comments/" + postId);
    dispatch(getCommentList(data.comments));
  } catch (error) {
    alert("댓글을 불러오는데 실패했습니다.");
    console.log(error);
  }
};

// 댓글 작성하기 | POST
export const postCommentDB = (_commentObj) => async (dispatch) => {
  const commentObj = {
    postId: _commentObj.id, // 게시글 아이디
    name: _commentObj.name, // 닉네임(도 요청에 넣어야하는지, api설계에는 없음)
    content: _commentObj.content, // 내용
  };
  try {
    const { data } = await axios.post(url + "/api/auth/comment", commentObj, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    dispatch(
      postComment({
        ...commentObj,
        createdAt: data.createdAt,
        _id: data._id,
        userId: _commentObj.userId,
      })
    );
  } catch (error) {
    alert("댓글 작성 중에 오류가 발생했습니다.");
    console.log(error);
  }
};

// 댓글 삭제하기 | DELETE
export const deleteCommentDB = (_id) => async (dispatch) => {
  try {
    await axios.delete(url + "/api/auth/comment/" + { _id }, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: _id,
    });
    dispatch(deleteComment(_id));
  } catch (error) {
    alert("댓글 삭제 중에 오류가 발생했습니다.");
    console.log(error);
  }
};

// ----------------------- 마이페이지 -------------------------
export const signupDB = (nickname, totalHeartNumber, totalPostNumber) => {
  return async function (dispatch, getState) {
    await axios
      .post(url + "/api/auth/member/mypage", {
        name: nickname,
        totalHeartNumber: totalHeartNumber,
        totalPostNumber: totalPostNumber,
      })

      .then((response) => {
        console.log(response);
        if (response.data.success == true) {
          window.alert("회원가입이 완료되었습니다.");
          window.location.assign("/login");
        } else {
          const errormessage = response.data.error.message;
          window.alert(`${errormessage}`); //서버안에 있는 error내용으로 실패했을때 서버에서 보내주는 error메세지 띄움
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert("회원가입에 실패했습니다! 다시 시도해주세요"); //아예 네트워크 에러 status 다르게 들어오는경우
        console.log(errorCode, errorMessage);
      });
  };
};

// Redecer
export default handleActions(
  {
    [GET_COMMENT_LIST]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.commentList = payload.commentList;
      }),

    [POST_COMMENT]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.commentList.unshift(payload);
      }),
    [DELETE_COMMENT]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.commentList = draft.commentList.filter(
          (comment) => comment._id !== payload
        );
      }),
  },
  initialState
);

const actionCreators = {
  getCommentListDB,
  getCommentList,
  postCommentDB,
  postComment,
};

export { actionCreators };
