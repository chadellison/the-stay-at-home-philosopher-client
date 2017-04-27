import React, { Component } from 'react'
import "../styles/postShow.css"

export default class PostShow extends Component {
  render() {
    return(
      <div className={'postShow' + this.props.opacity}>
        <div className='postShowTitle'>
          Title: {this.props.post.attributes.title}
        </div>
        <div className='postShowBody'>{this.props.post.attributes.body}</div>
        <div className={'postShowAuthor'}>
          Author: {this.props.post.relationships.author}
        </div>
      </div>
    )
  }
}
