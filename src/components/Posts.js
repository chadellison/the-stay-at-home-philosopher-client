import React, { Component } from 'react'
import Post from './Post.js'
import "../styles/posts.css"
import PageArrows from './PageArrows.js'
import Search from './Search.js'

export default class Posts extends Component {
  render() {
    self = this
    return (
      <div className={"posts" + this.props.opacity}>
        <PageArrows handlePageNumber={this.props.handlePageNumber} />

        <Search
          handleSearch={this.props.handleSearch}
          fetchPosts={this.props.fetchPosts}
        />

        { this.props.posts.map(function(post) {
          return (
            <Post
              key={post.id}
              id={post.id}
              title={post.attributes.title}
              body={post.attributes.body}
              date={post.attributes.created_at}
              author={post.relationships.author.data.name}
              email={post.relationships.author.data.email}
              fetchPost={self.props.fetchPost}
            />
          )
        })}
        <br></br><br></br>
        <PageArrows handlePageNumber={this.props.handlePageNumber} />
      </div>
    )
  }
}
