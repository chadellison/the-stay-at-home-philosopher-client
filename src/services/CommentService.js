import API_HOST from "../config/apiHost.js"

class CommentService {
  submitComment(body, id, token) {
    return(
      fetch(API_HOST + "/api/v1/comments", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          comment: {
            body: body,
            post_id: id
          },
          token: token
        })
      })
    )
  }
}

export default new CommentService
