import React from 'react';
import './comments.css';

const Comments =({ comments }) => {
  return (
    <div className='comments-cntnr'>
    <h2>Comments</h2>
        {comments.map((it, i) => {
            if(it.accepted){
                return(
                    <div className='comment-body' key={i}>
                        <div className='comment-name'>{it.name}</div>
                        <div className='comment-content'>{it.content}</div>
                    </div>
                )
                }
            })
        }
    </div>
  )
}

export default Comments;