import React, { Component } from "react"
import "../styles/notification.css"

export default class Message extends Component {
  render() {
    return (
      <div className="notification">
        <h4>{this.props.messageNotification}</h4>
        <button className="notificationButton" onClick={this.props.closeNotification}>OK, Got it!</button>
      </div>
    )
  }
}
