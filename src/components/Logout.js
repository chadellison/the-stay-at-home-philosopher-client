import React, { Component } from "react"
import "../styles/logout.css"
import LoggedInGravatar from './LoggedInGravatar.js'

export default class Logout extends Component {
  render() {
    return(
      <div>
        <div onClick={this.props.handleLogout} className="logout">
          Logout
        </div>
        <LoggedInGravatar hashedEmail={this.props.hashedEmail} className="loggedInGravater" />
      </div>
    )
  }
}
