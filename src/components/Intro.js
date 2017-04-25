import React, { Component } from "react"
import "../intro.css"

export default class Header extends Component {
  render() {
    return(
      <div className={"App-intro" + this.props.opacity}>
        Browse and contribute to posts!
      </div>
    )
  }
}
