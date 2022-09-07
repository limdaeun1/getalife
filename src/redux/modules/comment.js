import axios from "axios";
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// Action
const GET_COMMENT_LIST = "GET_COMMENT_LIST";
const POST_COMMENT = "POST_COMMENT";

// Action Creator
const getCommentList = createAction(GET_COMMENT_LIST, (commentList) => ({
  commentList,
}));
const postComment = createAction(POST_COMMENT, (comment) => comment);

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
const url = "http://localhost:3001"; //http://13.125.102.125:8080

// 댓글 모두 불러오기 | GET
export const getCommentListDB = (postId) => async (dispatch) => {
  try {
    const { data } = await axios.get(url + "/comments/"); // const { data } = await axios.get(url + "/comments/" + postId);
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
    name: _commentObj.name, // 닉네임
    content: _commentObj.content, // 내용
  };
  try {
    const { data } = await axios.post(url + "/comments", commentObj, {
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
