import React, { Component } from 'react'
import Post from './Post.js'
import "../styles/posts.css"

export default class Posts extends Component {
  render() {
    self = this
    return (
      <div className={"posts" + this.props.opacity}>
        { this.props.posts.map(function(post) {
          return (
            <Post
              key={post.id}
              id={post.id}
              title={post.attributes.title}
              body={post.attributes.body}
              date={post.attributes.created_at}
              author={post.relationships.author}
              fetchPost={self.props.fetchPost}
            />
          )
        })}
      </div>
    )
  }
}
