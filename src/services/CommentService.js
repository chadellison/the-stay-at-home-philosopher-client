import API_HOST from "../config/apiHost.js"

class CommentService {
  submitComment(params) {
    return(
      fetch(API_HOST + "/api/v1/comments", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          comment: {
            body: params.body,
            post_id: params.id
          },
          token: params.token
        })
      })
    )
  }

  fetchComments(params) {
    let searchParams = "page=" + params.page + "&post_id=" + params.post_id
    return(
      fetch(API_HOST + "/api/v1/comments?" + searchParams, {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
    )
  }
}

export default new CommentService
