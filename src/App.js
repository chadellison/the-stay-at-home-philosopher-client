import React, { Component } from 'react'
import './App.css'
import Nav from './components/Nav.js'
import LoginForm from './components/LoginForm.js'
import LoginService from './services/LoginService.js'
import SignUpService from './services/SignUpService.js'
import SignUpForm from "./components/SignUpForm.js"
import Header from './components/Header.js'
import Intro from './components/Intro.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      aboutMe: '',
      messageNotification: ''
    }
  }

  handleSignUpForm() {
    this.setState({
      signUpFormActive: !this.state.signUpFormActive,
      loginFormActive: false
    })
  }

  handleSignUp() {
    SignUpService.sendSignUpCredentials(this.state.firstName,
                                        this.state.lastName,
                                        this.state.email,
                                        this.state.password,
                                        this.state.aboutMe)
    .then((response) => {
      if (response.status[0] !== 5) {
        return response.json()
      }
    })
    .then((responseJson) => {
      if(responseJson.errors) {
        alert(responseJson.errors)
        this.setState({
          messageNotification: responseJson.errors
        })
      } else {
        this.setState({
          signUpFormActive: false,
          messageNotification: "Your account has been created! Login to get started."
        })
      }
    })
    .catch((error) => {
      alert(error)
    })
  }

  handleLogin() {
    LoginService.sendLoginCredentials(this.state.email, this.state.password)
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
          messageNotification: ''
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
//     const formProp = FORM_FIELDS[field]
// i    this.setState({[formProp]: value})
//     const FORM_FIELDS = {
//       "credentialFirstName": 'firstName'
//     }

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

    if(field === "credentialDescription") {
      this.setState({
        aboutMe: value
      })
    }
  }

  render() {
    let loginForm = ''
    let signUpForm = ''
    let opacity = ''
    let intro = <Intro opacity={opacity} />

    if(this.state.loginFormActive) {
      loginForm = <LoginForm
        handleEmail={this.handleInput}
        handlePassword={this.handleInput}
        handleLogin={this.handleLogin}
        handleSignUpForm={this.handleSignUpForm}
        handleLoginCancel={this.handleCancel}
      />
      opacity = ' opaque'
      intro = ''
    }

    this.state.signUpFormActive && (
      signUpForm = <SignUpForm
        handleFirstName={this.handleInput}
        handleLastName={this.handleInput}
        handleEmail={this.handleInput}
        handlePassword={this.handleInput}
        handleAboutMe={this.handleInput}
        handleSignUp={this.handleSignUp}
        handleCancel={this.handleCancel}
      />,
      opacity = ' opaque',
      intro = ''
    )

    return (
      <div className="App">
        <Header opacity={opacity} />
        <Nav handleLoginForm={this.handleLoginForm}
          handleSignUpForm={this.handleSignUpForm}
          signUpFormActive={this.state.signUpFormActive}
          loginFormActive={this.state.loginFormActive}
          className={opacity}
        />

        <ReactCSSTransitionGroup
          transitionName="loginFade"
          transitionEnter={true}
          transitionLeave={true}
          transitionEnterTimeout={700}
          transitionLeaveTimeout={700}
        >
          {loginForm}
        </ReactCSSTransitionGroup>

        <ReactCSSTransitionGroup
          transitionName="loginFade"
          transitionEnter={true}
          transitionLeave={true}
          transitionEnterTimeout={700}
          transitionLeaveTimeout={700}
        >
          {signUpForm}
        </ReactCSSTransitionGroup>
        {intro}
      </div>
    )
  }
}

export default App
