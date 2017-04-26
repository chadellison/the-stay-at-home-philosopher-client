import API_HOST from "../config/apiHost.js"

class PostService {
  fetchPosts(searchParams) {
    return(
      fetch(API_HOST + "/api/v1/posts?" + searchParams, {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
    )
  }
}

export default new PostService
