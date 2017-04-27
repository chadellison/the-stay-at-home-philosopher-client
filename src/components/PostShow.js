import React, { Component } from 'react'
import "../styles/postShow.css"
import AllPostsButton from './AllPostsButton.js'
import CommentButton from './CommentButton.js'

export default class PostShow extends Component {
  render() {
    return(
      <div className={'postShow' + this.props.opacity}>
        <AllPostsButton handleAllPostsButton={this.props.handleAllPostsButton} />
        <div className='postShowTitle'>
          {this.props.post.attributes.title.toUpperCase()}
        </div>
        <div className='postShowBody'>{this.props.post.attributes.body}</div>
        <div className={'postShowAuthor'}>
          Author: {this.props.post.relationships.author}
        </div>
        <CommentButton />
      </div>
    )
  }
}
