import React, { Component } from 'react'
import "../styles/post.css"
import Gravatar from './Gravatar.js'
import UserData from './UserData.js'
import DisplayAuthor from './DisplayAuthor.js'
import '../styles/gravatar.css'

export default class Post extends Component {
  displayText(field) {
    let text = ""
    text = field.charAt(0).toUpperCase() + field.slice(1)

    if(text.length > 100) {
      text = text.substr(0, 100) + "..."
    }
    return text
  }

  render() {
    let userData = null
    let id = this.props.id
    if(parseInt(this.props.authorPostId) === id) {
      userData = <UserData
        className="userData"
        author={this.props.author}
        aboutAuthor={this.props.aboutAuthor}
      />
    }
    return (
      <div className="post">
        <div className="postTitle" id={id} onClick={this.props.fetchPost}>
          <div className={"titleText"}><strong>{this.props.title}</strong></div>
        </div>
        <div className="postBody" id={id} onClick={this.props.fetchPost}>
          <div className="bodyText">{this.displayText(this.props.body)}</div>
        </div>
        <DisplayAuthor
          id={id}
          author={this.props.author}
          handleAuthorHover={this.props.handleAuthorHover}
          resetAuthorHover={this.props.resetAuthorHover}
        />
        {userData}
        <Gravatar hashedEmail={this.props.hashedEmail} className="gravatar" />
        <div className="postDate">Published: {this.props.date}</div>
      </div>
    )
  }
}
