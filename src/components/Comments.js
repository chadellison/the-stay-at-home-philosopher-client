import React, { Component } from "react"
import "../styles/comments.css"
import SingleComment from './SingleComment.js'
import CommentButton from './CommentButton.js'

export default class Comments extends Component {
  render() {
    return (
      <div className='comments'>
        <CommentButton />
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
