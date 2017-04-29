import React, { Component } from 'react'
import "../styles/userData.css"

export default class UserData extends Component {
  // displayName() {
  //   let name = this.props.data.attributes.first_name.charAt(0).toUpperCase() +
  //   this.props.data.attributes.first_name.slice(1) + ' ' +
  //   this.props.data.attributes.last_name.charAt(0).toUpperCase() +
  //   this.props.data.attributes.last_name.slice(1)
  //
  //   return name
  // }
  render() {
    return (
      <div className="userData">
        <div className="name">About: {this.props.author}</div>
        <div className="about">{this.props.aboutAuthor}</div>
      </div>
    )
  }
}
