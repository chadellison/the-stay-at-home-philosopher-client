import React, { Component } from "react"
import "../styles/loginStatus.css"

export default class LoginStatus extends Component {
  render() {
    return (
      <div onClick={this.props.handleLoginForm} className="loginStatus">
        login
      </div>
    )
  }
}
