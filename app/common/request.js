import 'isomorphic-fetch'
import 'whatwg-fetch'

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null
  }
  return response
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  throw new Error(response.statusText)
}

const request = (url, options) =>
  fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)

export default request
