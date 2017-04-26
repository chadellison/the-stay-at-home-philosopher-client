import React, { Component } from "react"
import "../styles/addPost.css"

export default class AddPost extends Component {
  render() {
    return(
      <button onClick={this.props.handleAddPostForm} className="addPost">
        Add Post
      </button>
    )
  }
}
