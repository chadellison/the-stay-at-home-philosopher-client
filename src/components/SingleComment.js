import React, { Component } from 'react'
import "../styles/singleComment.css"
import Gravatar from 'react-gravatar'

export default class SingleComment extends Component {
  render() {
    return (
      <div className="comment">
        <div className="commentBody">{this.props.body}</div>
        <div className="commentAuthor">- {this.props.author}</div>
        <div className="commentDate">Published: {this.props.date}</div>
        <Gravatar
          email={this.props.email}
          className="comment-gravatar"
        />
      </div>
    )
  }
}
