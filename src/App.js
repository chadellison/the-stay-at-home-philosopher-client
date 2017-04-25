import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Nav from './components/Nav.js'
import LoginForm from "./components/LoginForm.js"

class App extends Component {
  constructor(props) {
    super(props)
    this.handleLoginForm = this.handleLoginForm.bind(this)
    this.state = {
      loginFormActive: false
    }
  }

  handleLoginForm() {
    this.setState({
      loginFormActive: !this.state.loginFormActive
    })
  }

  render() {
    let loginForm = ''
    let opacity = ''

    if(this.state.loginFormActive) {
      loginForm = <LoginForm />
      opacity = " opaque"
    }

    return (
      <div className="App">
        <div className={"App-header" + opacity}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>The Stay at Home Philosopher</h2>
        </div>
        <Nav handleLoginForm={this.handleLoginForm} className={opacity}/>
        {loginForm}
        <p className={"App-intro" + opacity}>
          Browse and contribute to posts!
        </p>
      </div>
    )
  }
}

export default App
