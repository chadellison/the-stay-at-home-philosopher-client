import React, { Component } from "react"
import "../styles/displayAuthor.css"

export default class DisplayAuthor extends Component {
  render() {
    return(
      <div className="postAuthor"
        id={this.props.id}
        onMouseEnter={this.props.handleAuthorHover}
        onMouseLeave={this.props.resetAuthorHover}>
        <strong>Author:</strong> {this.props.author}
      </div>
    )
  }
}
