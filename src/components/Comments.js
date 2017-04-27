import React, { Component } from "react"
import "../styles/comments.css"
import SingleComment from './SingleComment.js'

export default class Comments extends Component {
  render() {
    return (
      <div className='comments'>
        { this.props.comments.map(function(comment) {
          return (
            <SingleComment
              body={comment.body}
              author={comment.author}
            />
          )
        })}
      </div>
    )
  }
}
