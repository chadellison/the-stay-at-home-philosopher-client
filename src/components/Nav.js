import React, { Component } from "react"
import "../styles/nav.css"
import LoginStatus from './LoginStatus.js'
import SignUpStatus from './SignUpStatus.js'

export default class Nav extends Component {
  render() {
    let signUpStatus = <LoginStatus handleLoginForm={this.props.handleLoginForm} />
    let loginStatus = <SignUpStatus handleSignUpForm={this.props.handleSignUpForm} />

    if(this.props.loginFormActive || this.props.signUpFormActive || this.props.loggedIn) {
      signUpStatus = ''
      loginStatus = ''
    }

    return(
      <div className={"nav" + this.props.opacity}>
        <div className="login-signup-signout">
          {loginStatus}
          {signUpStatus}
        </div>
      </div>
    )
  }
}
