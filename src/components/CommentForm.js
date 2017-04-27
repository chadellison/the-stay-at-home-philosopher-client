import React, { Component } from "react"
import "../styles/commentForm.css"

export default class CommentForm extends Component {
  render() {
    return(
      <div className="commentForm">
        <h4 className="label">Leave your comment below</h4>
        <input
          className="commentFormBody"
          onChange={this.props.handleCommentBody}>
        </input>
        <div className="commentFormButtonContainer">
          <button className="commentFormSubmit" onClick={this.props.handleSubmitComment}>Submit</button>
          <button className="cancelCommentForm" onClick={this.props.handleCancel}>Cancel</button>
        </div>
      </div>
    )
  }
}
