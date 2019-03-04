import React, { Component } from 'react';

export default class Console extends Component {
  render() {
    const { comments, acceptCom, rejectCom } = this.props;
    return (
      <div>
        <div>
        <h2>New comments</h2>
            {comments !== undefined ? comments.map((it, i) => {
                if(!it.accepted){
                    return(
                        <div className='comment-body' key={i}>
                            <div className='comment-name'>{it.name}</div>
                            <div className='comment-content'>{it.content}</div>
                            <button className='accept-btn' onClick={() => acceptCom(it.id, true)}>Accept</button>
                            <button className='reject-btn' onClick={() => rejectCom(it.id)}>Reject</button>
                        </div>
                    )
                    }
            })
            : ''
          }
        </div>
      </div>
    )
  }
}

