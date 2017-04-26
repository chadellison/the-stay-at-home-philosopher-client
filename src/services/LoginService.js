import API_HOST from "../config/apiHost.js"

class LoginService {
  sendLoginCredentials(email, password) {
    return(
      fetch(API_HOST + "/api/v1/authentication", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          credentials: {
            email: email,
            password: password
          }
        })
      })
    )
  }
}

export default new LoginService
