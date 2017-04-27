import React, { Component } from "react"
import "../styles/comments.css"
import SingleComment from './SingleComment.js'
import CommentButton from './CommentButton.js'
import CommentForm from './CommentForm.js'

export default class Comments extends Component {
  returnCommentForm() {
    if(this.props.commentFormActive) {
      return(
        <CommentForm
          handleCancel={this.props.handleCancel}
          handleCommentBody={this.props.handleCommentBody}
        />
      )
    } else {
      return null
    }
  }

  returnCommentButton() {
    if(!this.props.commentFormActive && this.props.loggedIn) {
      return <CommentButton handleCommentForm={this.props.handleCommentForm} />
    } else {
      return null
    }
  }

  render() {
    return (
      <div className='comments'>
        {this.returnCommentButton()}
        {this.returnCommentForm()}
        { this.props.comments.map(function(comment) {
          return (
            <SingleComment
              key={comment.id}
              body={comment.body}
              author={comment.author}
            />
          )
        })}
      </div>
    )
  }
}
