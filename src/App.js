import React, { Component } from 'react'
import './styles/App.css'
import Nav from './components/Nav.js'
import LoginForm from './components/LoginForm.js'
import LoginService from './services/LoginService.js'
import SignUpService from './services/SignUpService.js'
import PostService from './services/PostService.js'
import SignUpForm from './components/SignUpForm.js'
import AddPost from './components/AddPost.js'
import AddPostForm from './components/AddPostForm.js'
import Header from './components/Header.js'
import Intro from './components/Intro.js'
import Message from './components/Message.js'
import Posts from './components/Posts.js'
import PostShow from './components/PostShow.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleLoginForm      = this.handleLoginForm.bind(this)
    this.handleInput          = this.handleInput.bind(this)
    this.handleLogin          = this.handleLogin.bind(this)
    this.handleSignUp         = this.handleSignUp.bind(this)
    this.fetchPost            = this.fetchPost.bind(this)
    this.handleSubmitPost     = this.handleSubmitPost.bind(this)
    this.handleSignUpForm     = this.handleSignUpForm.bind(this)
    this.handleAddPostForm    = this.handleAddPostForm.bind(this)
    this.handleCancel         = this.handleCancel.bind(this)
    this.handleAllPostsButton = this.handleAllPostsButton.bind(this)
    this.closeNotification    = this.closeNotification.bind(this)
    this.state = {
      loginFormActive: false,
      signUpFormActive: false,
      addPostFormActive: false,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      aboutMe: '',
      title: '',
      body: '',
      messageNotification: '',
      notificationActive: false,
      loggedIn: false,
      token: '',
      posts: [],
      post: {},
      postShow: false
    }
  }

  componentWillMount() {
    this.fetchPosts()
  }

  fetchPosts(params={}) {
    // adjust params here or in post service
    PostService.fetchPosts(params)
    .then((response) => {
      if(response.status[0] !== 5) {
        return response.json()
      } else {
        throw "The server responded with an error."
      }
    })
    .then((responseJson) => {
      this.setState({
        posts: responseJson.data
      })
    })
    .catch((error) => {
      alert(error)
    })
  }

  fetchPost(e) {
    PostService.fetchPost(e.currentTarget.id)
    .then((response) => {
      if(response.status[0] !==5) {
        return response.json()
      } else {
        throw "The server responded with an error."
      }
    })
    .then((responseJson) => {
      this.setState({
        postShow: true,
        post: responseJson
      })
    })
    .catch((error) => {
      alert(error)
    })
  }

  handleSubmitPost() {
    PostService.addPost(this.state.title, this.state.body, this.state.token)
    .then((response) => {
      if(response.status[0] !== 5) {
        return response.json()
      } else {
        throw "The server responded with an error."
      }
    })
    .then((responseJson) => {
      this.setState({
        notificationActive: true
      })

      if(responseJson.errors) {
        this.setState({
          messageNotification: responseJson.errors
        })
      } else {
        let newPosts = this.state.posts
        newPosts.unshift(responseJson)
        this.setState({
          posts: newPosts,
          messageNotification: 'Your post has been added!',
          addPostFormActive: false
        })
      }
    })
    .catch((error) => {
      this.setState({
        notificationActive: true,
        messageNotification: error
      })
    })
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
      if(response.status[0] !== 5) {
        return response.json()
      } else {
        throw "The server responded with an error."
      }
    })
    .then((responseJson) => {
      this.setState({
        notificationActive: true
      })

      if(responseJson.errors) {
        this.setState({
          messageNotification: responseJson.errors
        })
      } else {
        this.setState({
          signUpFormActive: false,
          messageNotification: "Your account has been created! Login to get started.",
          password: ''
        })
      }
    })
    .catch((error) => {
      this.setState({
        notificationActive: true,
        messageNotification: error
      })
    })
  }

  handleLogin() {
    LoginService.sendLoginCredentials(this.state.email, this.state.password)
    .then((response) => {
      if (response.status[0] !== 5) {
        return response.json()
      } else {
        throw "The server responded with an error."
      }
    })
    .then((responseJson) => {
      if(responseJson.errors) {
        this.setState({
          notificationActive: true,
          messageNotification: responseJson.errors
        })
      } else {
        this.setState({
          token: responseJson.encrypted_password,
          loggedIn: true,
          loginFormActive: false,
          password: ''
        })
      }
    })
    .catch((error) => {
      this.setState({
        notificationActive: true,
        messageNotification: error
      })
    })
  }

  handleLoginForm() {
    this.setState({
      loginFormActive: !this.state.loginFormActive,
      signUpFormActive: false
    })
  }

  handleAddPostForm() {
    this.setState({
      addPostFormActive: true
    })
  }

  handleCancel(e) {
    let field = e.currentTarget.className
    if(["cancelLoginMenu", "cancelSignUpMenu", "cancelAddPost"].includes(field)) {
      this.setState({
        loginFormActive: false,
        signUpFormActive: false,
        addPostFormActive: false,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        title: '',
        body: ''
      })
    }
  }

  handleAllPostsButton() {
    this.setState({
      postShow: false
    })
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

    if(field === "addPostTitle") {
      this.setState({
        title: value
      })
    }

    if(field === "addPostBody") {
      this.setState({
        body: value
      })
    }
  }

  returnMessage() {
    if(this.state.notificationActive) {
      return(
        <Message messageNotification={this.state.messageNotification}
          closeNotification={this.closeNotification}
        />
      )
    } else {
      return null
    }
  }

  closeNotification() {
    this.setState({
      notificationActive: false
    })
  }

  returnLoginForm() {
    if(this.state.loginFormActive) {
      return(
        <LoginForm
          handleEmail={this.handleInput}
          handlePassword={this.handleInput}
          handleLogin={this.handleLogin}
          handleSignUpForm={this.handleSignUpForm}
          handleLoginCancel={this.handleCancel}
        />
      )
    } else {
      return null
    }
  }

  returnSignUpForm() {
    if(this.state.signUpFormActive) {
      return(
        <SignUpForm
          handleFirstName={this.handleInput}
          handleLastName={this.handleInput}
          handleEmail={this.handleInput}
          handlePassword={this.handleInput}
          handleAboutMe={this.handleInput}
          handleSignUp={this.handleSignUp}
          handleCancel={this.handleCancel}
        />
      )
    } else {
      return null
    }
  }

  returnAddPostForm() {
    if(this.state.addPostFormActive) {
      return(
        <AddPostForm
          handleTitle={this.handleInput}
          handleBody={this.handleInput}
          handleSubmitPost={this.handleSubmitPost}
          handleCancel={this.handleCancel}
        />
      )
    } else {
      return null
    }
  }

  returnIntro(opacity) {
    if(!this.state.loginFormActive && !this.state.signUpFormActive) {
      return(<Intro opacity={opacity} />)
    } else {
      return null
    }
  }

  returnAddPost(opacity) {
    if(this.state.loggedIn && !this.state.addPostFormActive && !this.state.postShow) {
      return(
        <AddPost opacity={opacity} handleAddPostForm={this.handleAddPostForm} />
      )
    } else {
      return null
    }
  }

  returnPostOrPosts(opacity) {
    if(this.state.postShow) {
      return(
        <PostShow
          post={this.state.post}
          opacity={opacity}
          handleAllPostsButton={this.handleAllPostsButton}
        />
      )
    } else {
      return(
        <Posts
          posts={this.state.posts}
          opacity={opacity}
          loggedIn={this.state.loggedIn}
          fetchPost={this.fetchPost}
        />
      )
    }
  }

  render() {
    let opacity = ''

    if(this.state.loginFormActive || this.state.signUpFormActive) {
      opacity = ' opaque'
    }
    return (
      <div className="App">
        <Header opacity={opacity} />
        <Nav handleLoginForm={this.handleLoginForm}
          handleSignUpForm={this.handleSignUpForm}
          signUpFormActive={this.state.signUpFormActive}
          loginFormActive={this.state.loginFormActive}
          loggedIn={this.state.loggedIn}
          opacity={opacity}
        />

        {this.returnMessage()}

        <ReactCSSTransitionGroup
          transitionName="loginFade"
          transitionEnterTimeout={700}
          transitionLeaveTimeout={700}
        >
          {this.returnLoginForm()}
        </ReactCSSTransitionGroup>

        <ReactCSSTransitionGroup
          transitionName="loginFade"
          transitionEnterTimeout={700}
          transitionLeaveTimeout={700}
        >
          {this.returnSignUpForm()}
        </ReactCSSTransitionGroup>

        <ReactCSSTransitionGroup
          transitionName="loginFade"
          transitionEnterTimeout={700}
          transitionLeaveTimeout={700}
        >
          {this.returnAddPostForm()}
        </ReactCSSTransitionGroup>

        {this.returnIntro(opacity)}
        {this.returnAddPost(opacity)}
        {this.returnPostOrPosts(opacity)}
      </div>
    )
  }
}

export default App
