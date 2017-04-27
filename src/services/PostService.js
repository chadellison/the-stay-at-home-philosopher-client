import API_HOST from '../config/apiHost.js'

class PostService {
  fetchPosts(searchParams) {
    return(
      fetch(API_HOST + '/api/v1/posts?' + searchParams, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
    )
  }

  fetchPost(id) {
    return(
      fetch(API_HOST + '/api/v1/posts/' + id, {
        method: 'Get',
        header: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
    )
  }

  addPost(title, body, token) {
    return(
      fetch(API_HOST + '/api/v1/posts?' + 'token=' + token, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          post: {
            title: title,
            body: body
          }
        })
      })
    )
  }
}

export default new PostService
