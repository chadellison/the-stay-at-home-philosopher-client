import React, { Component } from 'react'
import "../styles/userData.css"

export default class UserData extends Component {
  displayAbout() {
    if(this.props.aboutAuthor === null) {
      return "No information available"
    } else {
      return this.props.aboutAuthor
    }
  }

  render() {
    return (
      <div className="userData">
        <div className="dataWrapper">
          <div className="about">About: {this.displayAbout()}</div>
        </div>
      </div>
    )
  }
}
