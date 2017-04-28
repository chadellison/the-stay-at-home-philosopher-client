import API_HOST from '../config/apiHost.js'

class PostService {
  fetchPosts(searchParams) {
    let params = "page=" + searchParams.page + "&search=" + searchParams.search
    return(
      fetch(API_HOST + '/api/v1/posts?' + params, {
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

  addPost(params) {
    return(
      fetch(API_HOST + '/api/v1/posts?', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          post: {
            title: params.title,
            body: params.body
          },
          token: params.token
        })
      })
    )
  }
}

export default new PostService
