import Hosts from "../config/Hosts.js"

export default class LoginService {
  sendLoginCredentials(email, password) {
    let host = new Hosts
    return(
      fetch(host.apiHost() + "/api/v1/authentication", {
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
