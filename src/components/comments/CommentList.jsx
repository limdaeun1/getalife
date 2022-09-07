import React, { useEffect } from "react";
import Comment from "./Comment";
import { useDispatch, useSelector } from "react-redux";
import comment, { getCommentListDB } from "../../redux/modules/comment";

const CommentList = (postId) => {
  const dispatch = useDispatch();
  const commentList = useSelector((state) => state.comment.commentList);
  const postid = postId.postId;

  // 해당 게시물과 댓글 목록 불러오기
  useEffect(() => {
    dispatch(getCommentListDB(postid));
  }, [dispatch, postid]);

  return (
    <div>
      {commentList.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

export default CommentList;
