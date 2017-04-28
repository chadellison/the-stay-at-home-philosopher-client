import API_HOST from "../config/apiHost.js"

class SignUpService {
  sendSignUpCredentials(params) {
    return(
      fetch(API_HOST + "/api/v1/users", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            first_name: params.firstName,
            last_name: params.lastName,
            email: params.email,
            password: params.password,
            about_me: params.about_me
          }
        })
      })
    )
  }
}

export default new SignUpService
