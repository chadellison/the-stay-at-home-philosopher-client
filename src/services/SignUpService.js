import API_HOST from "../config/apiHost.js"

class SignUpService {
  sendSignUpCredentials(firstName, lastName, email, password, about_me) {
    return(
      fetch(API_HOST + "/api/v1/users", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            about_me: about_me
          }
        })
      })
    )
  }
}

export default new SignUpService
