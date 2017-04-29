import React, { Component } from "react"
import "../styles/logout.css"
import Gravatar from './Gravatar.js'

export default class Logout extends Component {
  render() {
    return(
      <div>
        <div onClick={this.props.handleLogout} className="logout">
          Logout
        </div>
        <Gravatar hashedEmail={this.props.hashedEmail} className="loggedInGravater" />
      </div>
    )
  }
}
