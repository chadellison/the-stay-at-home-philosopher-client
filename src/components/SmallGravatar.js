import React, { Component } from 'react'
import "../styles/smallGravatar.css"

export default class SmallGravatar extends Component {
  render() {
    return (
      <img
        className="commentGravatar"
        src={"https://www.gravatar.com/avatar/" + this.props.hashedEmail + "?d=identicon"}>
      </img>
    )
  }
}
