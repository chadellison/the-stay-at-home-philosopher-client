import React, { Component } from "react"
import "../notification.css"

export default class Notification extends Component {
  render() {
    return (
      <div className="notification">
        <h3>{this.props.messageNotification}</h3>
        <button className="notificationButton" onClick={this.props.closeNotification}>OK, Got it!</button>
      </div>
    )
  }
}
