const API_HOST = if(window.location.hostname === 'localhost') {
  'http://localhost:3001'
} else {
  'https://philosopher-forum-server.herokuapp.com/'
}

export default API_HOST
