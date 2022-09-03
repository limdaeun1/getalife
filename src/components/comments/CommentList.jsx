import React from 'react'
import styled from 'styled-components'
import Comment from './Comment'

const CommentList = () => {
  return (
    <div>
        <Comment/>
          {/* {commentList.map((comment) => {
            return <Comment key={comment._id} commentObj={comment} />;
          })} */}

    </div>
  )
}

export default CommentList