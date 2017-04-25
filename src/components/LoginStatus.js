import React, { Component } from "react"
import "../loginStatus.css"

export default class LoginStatus extends Component {
  render() {
    return (
      <div onClick={this.props.handleLoginForm} className="loginStatus">
        login
      </div>
    )
  }
}
