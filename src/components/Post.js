import React, { Component } from 'react'
import "../styles/post.css"
import Gravatar from 'react-gravatar'
import UserData from './UserData.js'
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
    if(parseInt(this.props.gravatarId) === id) {
      userData = <UserData
        className="userData"
        author={this.props.author}
        aboutAuthor={this.props.aboutAuthor}
      />
    }
    return (
      <div className="post">
        <div className="postTitle" id={id} onClick={this.props.fetchPost}>
          <strong>Title:</strong> {this.props.title}
        </div>
        <div className="postBody" id={id} onClick={this.props.fetchPost}>
        {this.displayText(this.props.body)}
        </div>
        <div className="postAuthor">
          <strong>Author:</strong> {this.props.author}
        </div>
        <Gravatar
          email={this.props.email}
          className="gravatar"
          id={id}
          handleGravatarId={this.props.handleGravatarId}
          onMouseEnter={this.props.handleGravatarId}
          onMouseLeave={this.props.resetGravaterId}
        />
        {userData}
        <div className="postDate">Published: {this.props.date}</div>
      </div>
    )
  }
}
