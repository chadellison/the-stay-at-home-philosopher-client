import React, { Component } from 'react'
import './styles/App.css'
import Nav from './components/Nav.js'
import LoginForm from './components/LoginForm.js'
import LoginService from './services/LoginService.js'
import SignUpService from './services/SignUpService.js'
import PostService from './services/PostService.js'
import CommentService from './services/CommentService.js'
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
    // api requests
    this.fetchPost            = this.fetchPost.bind(this)
    this.fetchPosts           = this.fetchPosts.bind(this)
    this.handleSubmitPost     = this.handleSubmitPost.bind(this)
    this.handleSubmitComment  = this.handleSubmitComment.bind(this)
    this.handleSignUpForm     = this.handleSignUpForm.bind(this)
    this.handleAddPostForm    = this.handleAddPostForm.bind(this)
    // form state
    this.handleLoginForm      = this.handleLoginForm.bind(this)
    this.handleLogout         = this.handleLogout.bind(this)
    this.handleInput          = this.handleInput.bind(this)
    this.handleLogin          = this.handleLogin.bind(this)
    this.handleSignUp         = this.handleSignUp.bind(this)
    this.handlePageNumber     = this.handlePageNumber.bind(this)
    this.handleAuthorHover     = this.handleAuthorHover.bind(this)
    this.resetAuthorHover      = this.resetAuthorHover.bind(this)
    // form actions
    this.handleCancel         = this.handleCancel.bind(this)
    this.handleAllPostsButton = this.handleAllPostsButton.bind(this)
    this.handleCommentForm    = this.handleCommentForm.bind(this)
    this.closeNotification    = this.closeNotification.bind(this)
    this.state = {
      loginFormActive: false,
      signUpFormActive: false,
      addPostFormActive: false,
      commentFormActive: false,
      firstName: '',
      lastName: '',
      email: '',
      hashedEmail: '',
      password: '',
      aboutMe: '',
      title: '',
      body: '',
      commentBody: '',
      search: '',
      messageNotification: '',
      notificationActive: false,
      loggedIn: false,
      token: '',
      posts: [],
      post: {},
      comments: [],
      postShow: false,
      post_id: '',
      authorPostId: '',
      page: 1,
      commentPage: 1
    }
  }

  componentWillMount() {
    this.fetchPosts()
  }

// Api requests
  fetchPosts(params = {}) {
    let page = 1
    if(params.page !== undefined) {
      page = params.page
    }

    PostService.fetchPosts({page: page, search: this.state.search})
    .then((response) => {
      if(response.status[0] !== 5) {
        return response.json()
      } else {
        throw "The server responded with an error."
      }
    })
    .then((responseJson) => {
      this.setState({
        posts: responseJson.data,
        page: page
      })
    })
    .catch((error) => {
      alert(error)
    })
  }

  fetchPost(e) {
    let post_id = ''
    if(typeof(e) === 'string') {
      post_id = e
    } else {
      post_id = e.currentTarget.id
    }

    PostService.fetchPost(post_id)
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
        post: responseJson,
        post_id: post_id,
        comments: responseJson.relationships.comments.data.slice(0, 10)
      })
    })
    .catch((error) => {
      alert(error)
    })
  }

  handleSubmitPost() {
    PostService.addPost({title: this.state.title, body: this.state.body, token: this.state.token})
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

  handleSubmitComment() {
    let post_id = this.state.post_id
    CommentService.submitComment({body: this.state.commentBody, id: post_id, token: this.state.token})
    .then((response) => {
      if(response.status[0] !== 5) {
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
        let comments = this.state.comments
        comments.push(responseJson)
        this.setState({
          notificationActive: true,
          messageNotification: 'Your comment has been added!',
          commentFormActive: false,
          comments: comments
        })
      }
    })
    .catch((error) => {
      alert(error)
    })
  }

  fetchComments(params) {
    CommentService.fetchComments(params)
    .then((response) => {
      if(response.status[0] !== 5) {
        return response.json()
      } else {
        throw "The server responded with an error."
      }
    })
    .then((responseJson) => {
      this.setState({
        comments: responseJson.data
      })
    })
    .catch((error) => {
      alert(error)
    })
  }

  handleSignUp() {
    SignUpService.sendSignUpCredentials({firstName: this.state.firstName,
                                        lastName: this.state.lastName,
                                        email: this.state.email,
                                        password: this.state.password,
                                        aboutMe: this.state.aboutMe})
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
          firstName: '',
          lastName: '',
          email: '',
          aboutMe: '',
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
    LoginService.sendLoginCredentials({email: this.state.email, password: this.state.password})
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
          token: responseJson.attributes.encrypted_password,
          loggedIn: true,
          loginFormActive: false,
          hashedEmail: responseJson.attributes.hashed_email,
          email: '',
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

  // functions to adjust the presence of forms
  handleAuthorHover(e) {
    this.setState({
      authorPostId: e.currentTarget.id
    })
  }

  resetAuthorHover(e) {
    this.setState({
      authorPostId: ''
    })
  }

  handleSignUpForm() {
    this.setState({
      signUpFormActive: !this.state.signUpFormActive,
      loginFormActive: false
    })
  }

  handleLoginForm() {
    this.setState({
      loginFormActive: !this.state.loginFormActive,
      signUpFormActive: false
    })
  }

  handleLogout() {
    this.setState({
      loggedIn: false,
      email: '',
      token: '',
      notificationActive: true,
      messageNotification: 'Successfully logged out.'
    })
  }

  handleAddPostForm() {
    this.setState({
      addPostFormActive: true
    })
  }

  handleCommentForm() {
    this.setState({
      commentFormActive: true
    })
  }

  handleAllPostsButton() {
    this.setState({
      postShow: false,
      commentFormActive: false
    })
  }

  closeNotification() {
    this.setState({
      notificationActive: false,
      messageNotification: ''
    })
  }

  handlePageNumber(e) {
    let arrow = e.currentTarget.className
    if(this.state.postShow) {
      let page = this.state.commentPage

      if(arrow === "rightArrow" && this.state.comments.length > 9) {
        page += 1
      }
      if(arrow === "leftArrow" && page !== 1) {
        page -= 1
      }
      this.setState({
        commentPage: page
      })
      this.fetchComments({page: page, post_id: this.state.post_id})
    } else {
      let page = this.state.page
      if(arrow === "rightArrow" && this.state.posts.length > 9) {
        page += 1
      }

      if(arrow === "leftArrow" && page !== 1) {
        page -= 1
      }
      this.setState({
        page: page
      })
      this.fetchPosts({page: page})
    }
  }

// functions for actions of forms
  handleCancel(e) {
    let field = e.currentTarget.className
    if(["cancelLoginMenu", "cancelSignUpMenu", "cancelAddPost", "cancelCommentForm"].includes(field)) {
      this.setState({
        loginFormActive: false,
        signUpFormActive: false,
        addPostFormActive: false,
        commentFormActive: false,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        title: '',
        body: '',
        commentBody: ''
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

    if(field === "commentFormBody") {
      this.setState({
        commentBody: value
      })
    }

    if(field === "search") {
      this.setState({
        search: value
      })
      if(value === '') {
        this.fetchPosts()
      }
    }
  }

// helper functions for render function
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
          comments={this.state.comments}
          opacity={opacity}
          handleAllPostsButton={this.handleAllPostsButton}
          handleCommentForm={this.handleCommentForm}
          commentFormActive={this.state.commentFormActive}
          handleCancel={this.handleCancel}
          loggedIn={this.state.loggedIn}
          handleCommentBody={this.handleInput}
          handleSubmitComment={this.handleSubmitComment}
          handlePageNumber={this.handlePageNumber}
        />
      )
    } else {
      return(
        <Posts
          posts={this.state.posts}
          opacity={opacity}
          loggedIn={this.state.loggedIn}
          fetchPost={this.fetchPost}
          fetchPosts={this.fetchPosts}
          handlePageNumber={this.handlePageNumber}
          handleSearch={this.handleInput}
          handleAuthorHover={this.handleAuthorHover}
          authorPostId={this.state.authorPostId}
          resetAuthorHover={this.resetAuthorHover}
        />
      )
    }
  }

  render() {
    let opacity = ''

    if(this.state.loginFormActive || this.state.signUpFormActive || this.state.addPostFormActive) {
      opacity = ' opaque'
    }
    return (
      <div className="App">
        <Header opacity={opacity} />
        <Nav handleLoginForm={this.handleLoginForm}
          handleLogout={this.handleLogout}
          handleSignUpForm={this.handleSignUpForm}
          signUpFormActive={this.state.signUpFormActive}
          loginFormActive={this.state.loginFormActive}
          loggedIn={this.state.loggedIn}
          opacity={opacity}
          hashedEmail={this.state.hashedEmail}
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
