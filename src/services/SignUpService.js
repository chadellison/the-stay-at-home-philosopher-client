import Hosts from "../config/Hosts.js"

export default class SignUpService {
  sendSignUpCredentials(firstName, lastName, email, password) {
    let host = new Hosts
    return(
      fetch(host.apiHost() + "/api/v1/users", {
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
            password: password
          }
        })
      })
    )
  }
}
