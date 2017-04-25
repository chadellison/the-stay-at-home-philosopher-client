import React, { Component } from "react"
import "../nav.css"
import LoginStatus from './LoginStatus.js'

export default class Nav extends Component {
  render() {
    return(
      <div className="nav">
        <div className="login-signup-signout">
          <LoginStatus handleLoginForm={this.props.handleLoginForm} />
          <div className="signup">Sign Up</div>
        </div>
      </div>
    )
  }
}
