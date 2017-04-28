import React, { Component } from "react"
import "../styles/addPostForm.css"

export default class AddPostForm extends Component {
  render() {
    return(
      <div className="addPostForm">
        <div className="addPostTitleLabel">Title</div>
        <input className="addPostTitle" onChange={this.props.handleTitle}></input>
        <div className="addPostBodyLabel">Post</div>
        <textarea className="addPostBody" onChange={this.props.handleBody}></textarea>
        <div className="addPostSubmit" onClick={this.props.handleSubmitPost}>Submit</div>
        <div className="cancelAddPost" onClick={this.props.handleCancel}>Cancel</div>
      </div>
    )
  }
}
