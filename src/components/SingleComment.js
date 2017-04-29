import React, { Component } from 'react'
import "../styles/singleComment.css"
import '../styles/smallGravatar.css'
import SmallGravatar from './SmallGravatar.js'

export default class SingleComment extends Component {
  render() {
    return (
      <div className="comment">
        <div className="commentBody">{this.props.body}</div>
        <div className="commentAuthor">- {this.props.author}</div>
        <div className="commentDate">Published: {this.props.date}</div>
        <SmallGravatar hashedEmail={this.props.hashedEmail} />
      </div>
    )
  }
}
