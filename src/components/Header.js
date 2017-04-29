import React, { Component } from "react"
import "../styles/header.css"
import house from '../../public/house-logo.png'

export default class Header extends Component {
  render() {
    return(
      <div className={"App-header" + this.props.opacity}>
        <img src={house} className="App-logo" alt="logo" />
        <h2 className="appTitle">The Stay at Home Philosopher</h2>
      </div>
    )
  }
}
