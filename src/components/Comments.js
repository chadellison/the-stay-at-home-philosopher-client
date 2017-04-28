import React, { Component } from "react"
import "../styles/comments.css"
import SingleComment from './SingleComment.js'
import CommentButton from './CommentButton.js'
import CommentForm from './CommentForm.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Comments extends Component {
  returnCommentForm() {
    if(this.props.commentFormActive) {
      return(
        <CommentForm
          handleCancel={this.props.handleCancel}
          handleCommentBody={this.props.handleCommentBody}
          handleSubmitComment={this.props.handleSubmitComment}
        />
      )
    } else {
      return null
    }
  }

  returnCommentButton() {
    if(!this.props.commentFormActive && this.props.loggedIn) {
      return(<CommentButton handleCommentForm={this.props.handleCommentForm} />)
    } else {
      return null
    }
  }

  render() {
    return (
      <div className='comments'>
        {this.returnCommentButton()}
        <ReactCSSTransitionGroup
          transitionName="loginFade"
          transitionEnterTimeout={700}
          transitionLeaveTimeout={700}
        >
          {this.returnCommentForm()}
        </ReactCSSTransitionGroup>
        <div className='commentsTitle'>Comments</div>
        { this.props.comments.map(function(comment) {
          return (
            <SingleComment
              key={comment.id}
              body={comment.attributes.body}
              author={comment.relationships.author.data.name}
              email={comment.relationships.author.data.email}
              date={comment.attributes.created_at}
            />
          )
        })}
      </div>
    )
  }
}
