import React, { Component } from "react"
import "../styles/allPostsButton.css"

export default class AllPostsButton extends Component {
  render() {
    return(
      <button className="allPostsButton" onClick={this.props.handleAllPostsButton}>
        All Posts
      </button>
    )
  }
}
