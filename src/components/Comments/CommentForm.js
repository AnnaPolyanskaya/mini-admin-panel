import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addComment } from '../../actions/index';
import './comments.css';

 class CommentForm extends Component {
    state={
        name: '',
        content: '',
        showMessage: false
    }

    onChangeName = (event) => {
      this.setState({
        name: event.target.value
      });
      console.log(this.state.name)
    }

    onChangeContent= (event) => {
      this.setState({
        content: event.target.value
      });
      console.log(this.state.content)
    }

    onSubmit = (event) => {
      event.preventDefault();
      this.props.onAddComment(this.state.name, this.state.content);
      this.clearInputs();
    }

    clearInputs = () => {
      this.setState({
        name: '',
        content: '',
        showMessage: true
      })
    }
  render() {
    return (
      <div className='comment-form'>
      <h2> Add comment</h2>
      <h5>{this.state.showMessage ? 'You successfully send comment' : ''}</h5>
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            onChange={this.onChangeName}
            placeholder='Name'
            value={this.state.name}
          />
          <textarea
            type='text'
            onChange={this.onChangeContent}
            placeholder='Comment'
            value={this.state.content}
          />
          <button type='submit'>Add comment</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onAddComment: (name, content) => {
      dispatch(addComment(name, content))
    }
  }
}

export default connect(null, mapDispatchToProps)(CommentForm);