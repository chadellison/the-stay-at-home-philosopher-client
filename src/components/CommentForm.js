import React, { Component } from "react"
import "../styles/commentForm.css"

export default class CommentForm extends Component {
  render() {
    return(
      <div className="commentForm">
        <h4 className="label">Comment</h4>
        <input className="commentFormBody"></input>
        <div className="commentFormButtonContainer">
          <button className="commentFormSubmit">Submit</button>
          <button className="cancelCommentForm" onClick={this.props.handleCancel}>Cancel</button>
        </div>
      </div>
    )
  }
}
