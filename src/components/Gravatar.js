import React, { Component } from 'react'
import "../styles/gravatar.css"

export default class Gravatar extends Component {
  render() {
    return (
      <img className="gravatar"
        src={"https://www.gravatar.com/avatar/" + this.props.hashedEmail + "?d=identicon"}>
      </img>
    )
  }
}
