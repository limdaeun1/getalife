import axios from "axios";
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// Action
const GET_COMMENT_LIST = "GET_COMMENT_LIST";
const POST_COMMENT = "POST_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";
const PUT_COMMENT = "PUT_COMMENT";

// Action Creator
const getCommentList = createAction(GET_COMMENT_LIST, (commentList) => ({
  commentList,
}));
const postComment = createAction(POST_COMMENT, (comment) => comment);
const deleteComment = createAction(DELETE_COMMENT, (comment) => comment);
const putComment = createAction(PUT_COMMENT, (comment) => comment);

// initialState
const initialState = {
  commentList: [],
};

//Middleware
const url = "http://13.125.102.125:8080";

// 댓글 모두 불러오기 | GET
export const getCommentListDB = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(url + `/api/comment/${id}`); // const { data } = await axios.get(url + "/comments/" + postId);
    dispatch(getCommentList(data.data));

  } catch (error) {
    alert("댓글을 불러오는데 실패했습니다.");
    console.log(error);
  }
};

// 댓글 작성하기 | POST
export const postCommentDB = (commentData) => async (dispatch) => {
  const commentObj = {
    postId: commentData.postId,
    content: commentData.content,
  };
  try {
    const { data } = await axios.post(url + "/api/auth/comment", commentObj, {
      headers: {
        authorization: localStorage.getItem("token"),
        "refresh-token": localStorage.getItem("refresh-token"),
      },
    });

    dispatch(
      postComment({
        postId: commentObj.postId,
        name: data.data.author,
        content: data.data.content,
        id: data.data.id,
      })
    );
  } catch (error) {
    alert("댓글 작성 중에 오류가 발생했습니다.");
    console.log(error);
  }
};

// 댓글 삭제하기 | DELETE
export const deleteCommentDB = (id) => async (dispatch) => {
  try {
    await axios.delete(url + "/api/auth/comment/" + id, {
      headers: {
        authorization: localStorage.getItem("token"),
        "refresh-token": localStorage.getItem("refresh-token"),
      },
      data: id,
    });
    dispatch(deleteComment(id));
  } catch (error) {
    alert("댓글 삭제 중에 오류가 발생했습니다.");
    console.log(error);
  }
};


// 댓글 수정하기 | PUT
export const putCommentDB = (_commentObj) => async (dispatch) => {
  const commentObj = {
    commentId: _commentObj.commentId,
    content: _commentObj.content,
    postId: _commentObj.postId,
  };

  try {
    await axios.put(
      url + `/api/auth/comment/${commentObj.commentId}`,
      { postId: commentObj.postId, content: commentObj.content },
      {
        headers: {
          authorization: localStorage.getItem("token"),
          "refresh-token": localStorage.getItem("refresh-token"),
        },
      }
    );
    dispatch(putComment(commentObj));
  } catch (error) {
    alert("댓글 수정 중에 오류가 발생했습니다.");
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

    [DELETE_COMMENT]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.commentList = draft.commentList.filter(
          (comment) => comment.id !== payload
        );
      }),
    [PUT_COMMENT]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.commentList = state.commentList.map((comment) => {
          console.log(comment.id, payload.commentId);
          if (comment.id === payload.commentId) {
            return { ...comment, content: payload.content };
          } else {
            return comment;
          }
        });
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
