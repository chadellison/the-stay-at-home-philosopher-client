export default class Hosts {
  apiHost() {
    if(window.location.hostname === "localhost") {
      return "http://localhost:3001"
    } else {
      // site
    }
  }
}
