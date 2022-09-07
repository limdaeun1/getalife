import React from "react";
import Comment from "./Comment";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCommentListDB } from "../../redux/modules/comment";

const id = 1;

const CommentList = () => {
  const dispatch = useDispatch();
  const commentList = useSelector((state) => state);

  console.log(commentList);

  // 해당 게시물과 댓글 목록 불러오기
  useEffect(() => {
    dispatch(getCommentListDB(id));
  }, [dispatch, id]);

  return (
    <div>
      {/* {commentList.map((comment) => {
        return <Comment key={comment.id} commentObj={comment} />;
      })} */}
    </div>
  );
};

export default CommentList;
