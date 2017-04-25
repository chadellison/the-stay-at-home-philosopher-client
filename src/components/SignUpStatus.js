import React, { Component } from "react"
import "../signUpStatus.css"

export default class SignUpForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div onClick={this.props.handleSignUpForm} className="signUpStatus">
        sign up
      </div>
    )
  }
}
