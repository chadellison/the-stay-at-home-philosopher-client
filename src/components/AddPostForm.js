import React, { Component } from "react"
import "../styles/addPostForm.css"

export default class AddPostForm extends Component {
  render() {
    return(
      <div className="addPostForm">
        <h4 className="label">Title</h4>
        <input className="addPostTitle" onChange={this.props.handleTitle}></input>
        <h4 className="label">Post</h4>
        <input className="addPostBody" onChange={this.props.handleBody}></input>
        <button className="submit" onClick={this.props.handleSubmitPost}>Submit</button>
        <button className="cancelAddPost" onClick={this.props.handleCancel}>Cancel</button>
      </div>
    )
  }
}
