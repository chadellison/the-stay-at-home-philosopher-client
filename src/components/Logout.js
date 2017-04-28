import React, { Component } from "react"
import "../styles/logout.css"
import Gravatar from 'react-gravatar'

export default class Logout extends Component {
  render() {
    return(
      <div>
        <div onClick={this.props.handleLogout} className="logout">
          Logout
        </div>
        <Gravatar email={this.props.email} className="loggedInGravater" />
      </div>
    )
  }
}
