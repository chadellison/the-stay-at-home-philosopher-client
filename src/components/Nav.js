import React, { Component } from "react"
import "../nav.css"
import LoginStatus from './LoginStatus.js'
import SignUpStatus from './SignUpStatus.js'

export default class Nav extends Component {
  render() {
    let signUpStatus = <LoginStatus handleLoginForm={this.props.handleLoginForm} />
    let loginStatus = <SignUpStatus handleSignUpForm={this.props.handleSignUpForm} />

    if(this.props.loginFormActive || this.props.signUpFormActive) {
      signUpStatus = ''
      loginStatus = ''
    }

    return(
      <div className="nav">
        <div className="login-signup-signout">
          {loginStatus}
          {signUpStatus}
        </div>
      </div>
    )
  }
}
