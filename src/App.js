import React, { Component } from 'react';
import './App.css';
/* redux */
import { connect } from 'react-redux';
import { switchAdmin, acceptComment, rejectComment } from './actions/index'
/* components */
import Item from './components/ItemInfo/Item';
import Console from './components/Console/Console';
import CommentForm from './components/Comments/CommentForm';
import Comments from './components/Comments/Comments';

class App extends Component {

  toPanel = () => {
    this.props.adminPanel( !this.props.isAdmin );
  }

  acceptCom = (id, accept) => {
    this.props.accept(id, accept);
  }

  rejectCom = (id, accept) => {
    this.props.reject(id, accept);
  }

  render() {
    const { comments, isAdmin  } = this.props;
    console.log(comments)
    return (
      <div className="App">
          <button className='change-btn' onClick={this.toPanel}> Go to {isAdmin ? 'Admin' : 'User page'}  </button>
          <Item />
          <Comments comments={comments} />
          {isAdmin 
            ? <Console 
                comments = { comments }
                acceptCom = { this.acceptCom }
                rejectCom = { this.rejectCom }
              /> 
            : <CommentForm />
          }
         
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    isAdmin: state.isAdmin.isAdmin,
    comments: state.comments
  }
}

const mapDispatchToProps = dispatch => {
  return{
    adminPanel: (isAdmin) => {
      dispatch(switchAdmin(isAdmin))
    },
    accept: (id, accepted) => {
      dispatch(acceptComment(id, accepted))
    },
    reject: (id, accepted) => {
      dispatch(rejectComment(id, accepted))
    }

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
