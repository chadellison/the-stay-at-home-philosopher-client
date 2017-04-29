import React, { Component } from 'react'
import "../styles/postShow.css"
import AllPostsButton from './AllPostsButton.js'
import Comments from './Comments.js'
import PageArrows from './PageArrows.js'

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
          Author: {this.props.post.relationships.author.data.name}
        </div>
        <img className="postGravatar"
          src={"https://www.gravatar.com/avatar/" +
            this.props.post.relationships.author.data.hashed_email +
            "?d=identicon"}>
        </img>
        <div className="published">
          Published: {this.props.post.attributes.created_at}
        </div>
        <Comments
          comments={this.props.comments}
          commentFormActive={this.props.commentFormActive}
          handleCommentForm={this.props.handleCommentForm}
          handleCancel={this.props.handleCancel}
          loggedIn={this.props.loggedIn}
          handleCommentBody={this.props.handleCommentBody}
          handleSubmitComment={this.props.handleSubmitComment}
        />
        <PageArrows handlePageNumber={this.props.handlePageNumber} />
      </div>
    )
  }
}
