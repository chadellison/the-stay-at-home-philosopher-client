import React, { Component } from "react"
import "../styles/logout.css"

export default class Logout extends Component {
  render() {
    return(
      <div>
        <div onClick={this.props.handleLogout} className="logout">
          Logout
        </div>
        <img className="loggedInGravatar"
          src={"https://www.gravatar.com/avatar/" + this.props.hashedEmail + "?d=identicon"}>
        </img>
      </div>
    )
  }
}
