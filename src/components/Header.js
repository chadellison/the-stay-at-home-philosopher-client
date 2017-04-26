import React, { Component } from "react"
import "../styles/header.css"
import logo from '../logo.svg'

export default class Header extends Component {
  render() {
    return(
      <div className={"App-header" + this.props.opacity}>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>The Stay at Home Philosopher</h2>
      </div>
    )
  }
}
