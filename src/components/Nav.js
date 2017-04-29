import React, { Component } from "react"
import "../styles/nav.css"
import LoginStatus from './LoginStatus.js'
import SignUpStatus from './SignUpStatus.js'
import Logout from './Logout.js'

export default class Nav extends Component {
  render() {
    let signUpStatus = <LoginStatus handleLoginForm={this.props.handleLoginForm} />
    let loginStatus = <SignUpStatus handleSignUpForm={this.props.handleSignUpForm} />
    let logoutStatus = null

    if(this.props.loginFormActive || this.props.signUpFormActive || this.props.loggedIn) {
      signUpStatus = null
      loginStatus = null
    }

    if(this.props.loggedIn) {
      logoutStatus = <Logout
        handleLogout={this.props.handleLogout}
        hashedEmail={this.props.hashedEmail}
      />
    }

    return(
      <div className={"nav" + this.props.opacity}>
        <div className="login-signup-signout">
          {logoutStatus}
          {signUpStatus}
          {loginStatus}
        </div>
      </div>
    )
  }
}
