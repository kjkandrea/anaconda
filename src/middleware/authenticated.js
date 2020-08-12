import PubSub from '../utils/PubSub.js'

export const auth = function() {
  if(localStorage.username) {
    PubSub.publish('@user', null)
    return true
  } else {
    PubSub.publish('@visitor', null)
    return false
  }
}