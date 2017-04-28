import React, { Component } from "react"
import "../styles/signUpForm.css"

export default class SignUpForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="signUpForm">
        <h4 className="label">First Name</h4>
        <input className="credentialFirstName" onChange={this.props.handleFirstName}></input>
        <h4 className="label">Last Name</h4>
        <input className="credentialLastName" onChange={this.props.handleLastName}></input>
        <h4 className="label">Email</h4>
        <input className="credentialEmail" onChange={this.props.handleEmail}></input>
        <h4 className="label">Password</h4>
        <input className="credentialPassword" type="password" onChange={this.props.handlePassword}></input>
        <h4 className="label">Description</h4>
        <textarea className="credentialDescription" placeholder="About you" onChange={this.props.handleAboutMe}></textarea>
        <button className="signUpSubmit" onClick={this.props.handleSignUp}>Sign Up</button>
        <button className="cancelSignUpMenu" onClick={this.props.handleCancel}>Cancel</button>
      </div>
    )
  }
}
