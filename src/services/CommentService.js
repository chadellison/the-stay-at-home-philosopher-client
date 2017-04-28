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
}

export default new CommentService
