import React, { Component } from 'react'
import "../styles/post.css"

export default class Post extends Component {
  displayText(field) {
    let text = ""
    text = field.charAt(0).toUpperCase() + field.slice(1)

    if(text.length > 40) {
      text = text.substr(0, 40) + "..."
    }
    return text
  }

  render() {
    return (
      <div className="post">
        <div className="postTitle" id={this.props.id} onClick={this.props.fetchPost}>
          <strong>Title:</strong> {this.props.title}
        </div>
        <div className="postAuthor">
          <strong>Author:</strong> {this.props.author}
        </div>
        <div className="postDate">Published: {this.props.date}</div>
        <div className="postBody" id={this.props.id} onClick={this.props.fetchPost}>
          {this.displayText(this.props.body)}
        </div>
      </div>
    )
  }
}
