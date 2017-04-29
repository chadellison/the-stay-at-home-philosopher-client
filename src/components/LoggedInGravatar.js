import React, { Component } from 'react'
import "../styles/loggedInGravatar.css"

export default class LoggedInGravatar extends Component {
  render() {
    return (
      <img className="loggedInGravater"
        src={"https://www.gravatar.com/avatar/" + this.props.hashedEmail + "?d=identicon"}>
      </img>
    )
  }
}
