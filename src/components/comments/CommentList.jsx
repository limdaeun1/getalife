import React from "react";
import styled from "styled-components";
import Comment from "./Comment";

const CommentList = () => {
  return (
    <div>
      {commentList.map((comment) => {
        return <Comment key={comment.id} commentObj={comment} />;
      })}
    </div>
  );
};

export default CommentList;
