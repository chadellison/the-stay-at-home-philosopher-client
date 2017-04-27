import React, { Component } from "react"
import "../styles/commentButton.css"

export default class CommentButton extends Component {
  render() {
    return(
      <button className="commentButton" onClick={this.props.handleCommentForm}>
        Comment
      </button>
    )
  }
}
