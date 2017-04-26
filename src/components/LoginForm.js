import React, { Component } from "react"
import "../styles/loginForm.css"

export default class LoginForm extends Component {
  render() {
    return(
      <div className="credentialForm">
        <h4 className="label">Email</h4>
        <input className="credentialEmail" onChange={this.props.handleEmail}></input>
        <h4 className="label">Password</h4>
        <input className="credentialPassword" type="password" onChange={this.props.handlePassword}></input>
        <button className="submit" onClick={this.props.handleLogin}>Login</button>
        <button className="cancelLoginMenu" onClick={this.props.handleLoginCancel}>Cancel</button>
        <button className="signUp" onClick={this.props.handleSignUpForm}>Sign Up</button>
      </div>
    )
  }
}
