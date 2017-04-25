import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Nav from './components/Nav.js'
import LoginForm from './components/LoginForm.js'
import Hosts from "./config/Hosts.js"
import LoginService from './services/LoginService.js'
import SignUpService from './services/SignUpService.js'
import SignUpForm from "./components/SignUpForm.js"

class App extends Component {
  constructor(props) {
    super(props)
    this.handleLoginForm   = this.handleLoginForm.bind(this)
    this.handleInput       = this.handleInput.bind(this)
    this.handleLogin       = this.handleLogin.bind(this)
    this.handleSignUp      = this.handleSignUp.bind(this)
    this.handleSignUpForm  = this.handleSignUpForm.bind(this)
    this.handleCancel      = this.handleCancel.bind(this)
    this.state = {
      loginFormActive: false,
      signUpFormActive: false,
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }
  }

  handleSignUpForm() {
    this.setState({
      signUpFormActive: !this.state.signUpFormActive,
      loginFormActive: false
    })
  }

  handleSignUp() {
    let signUpService = new SignUpService
    signUpService.sendSignUpCredentials(this.state.firstName,
                                        this.state.lastName,
                                        this.state.email,
                                        this.state.password)
    .then((response) => {
      if (response.status[0] !== 5) {
        return response.json()
      } else {
        throw "Invalid Entry"
      }
    })
    .then((responseJson) => {
      if(responseJson.errors) {
        let errors = responseJson.errors
        let message = ""
        if(errors.password) {
          message += "Password " + errors.password + " "
        }
        if(errors.email) {
          message += "Email " + errors.email + " "
        }
        if(errors.first_name) {
          message += "First name " + errors.first_name + " "
        }
        if(errors.last_name) {
          message += "Last name " + errors.last_name
        }

        this.setState({
          messageNotification: message
        })
      } else {
        this.setState({
          signUpFormActive: false,
          messageNotification: "An email to confirm your account has been sent"
        })
      }
    })
    .catch((error) => {
      alert(error);
    })
  }

  handleLogin() {
    let loginService = new LoginService
    loginService.sendLoginCredentials(this.state.email, this.state.password)
    .then((response) => {
      if (response.status[0] !== 5) {
        return response.json()
      } else {
        throw "Something went wrong. The server responded with a 500"
      }
    })
    .then((responseJson) => {
      if(responseJson.errors) {
        this.setState({
          messageNotification: responseJson.errors
        })
      } else {
        this.setState({
          token: responseJson.password_digest,
          loggedIn: true,
          loginFormActive: false,
          messageNotification: ""
        })
      }
    })
    .catch((error) => {
      alert(error);
    })
  }

  handleLoginForm() {
    this.setState({
      loginFormActive: !this.state.loginFormActive,
      signUpFormActive: false
    })
  }

  handleCancel(e) {
    let field = e.currentTarget.className
    if(field === "cancelLoginMenu" || field === "cancelSignUpMenu") {
      this.setState({
        loginFormActive: false,
        signUpFormActive: false,
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      })
    }
  }

  handleInput(e) {
    let value = e.currentTarget.value
    let field = e.currentTarget.className

    if(field === "credentialFirstName") {
      this.setState({
        firstName: value
      })
    }

    if(field === "credentialLastName") {
      this.setState({
        lastName: value
      })
    }

    if(field === "credentialEmail") {
      this.setState({
        email: value
      })
    }

    if(field === "credentialPassword") {
      this.setState({
        password: value
      })
    }
  }

  render() {
    let loginForm = ''
    let signUpForm = ''
    let opacity = ''

    if(this.state.loginFormActive) {
      loginForm = <LoginForm
        handleEmail={this.handleInput}
        handlePassword={this.handleInput}
        handleLogin={this.handleLogin}
        handleSignUpForm={this.handleSignUpForm}
        handleLoginCancel={this.handleCancel}
      />
      opacity = " opaque"
    }

    if(this.state.signUpFormActive) {
      signUpForm = <SignUpForm
        handleFirstName={this.handleInput}
        handleLastName={this.handleInput}
        handleEmail={this.handleInput}
        handlePassword={this.handleInput}
        handleSignUp={this.handleSignUp}
        handleCancel={this.handleCancel}
      />
      opacity = " opaque"
    }

    return (
      <div className="App">
        <div className={"App-header" + opacity}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>The Stay at Home Philosopher</h2>
        </div>
        <Nav handleLoginForm={this.handleLoginForm}
          handleSignUpForm={this.handleSignUpForm}
          className={opacity}
        />
        {loginForm}
        {signUpForm}
        <p className={"App-intro" + opacity}>
          Browse and contribute to posts!
        </p>
      </div>
    )
  }
}

export default App
