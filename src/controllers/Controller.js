import SignIn from '../components/SignIn.js'
import Pubsub from '../utils/PubSub.js'

const Controller = {}

Controller.selectors = {
  SignIn : document.getElementById('sign-in')
}

Controller.init = function() {
  SignIn.setup(this.selectors.SignIn)
  Pubsub.subscribe('@submit', this.onSubmitSignIn)
}

Controller.onSubmitSignIn = function(data) {
  localStorage.setItem("username", data)
}

export default Controller