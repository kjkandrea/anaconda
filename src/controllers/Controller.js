import SignIn from '../components/SignIn.js'
import HelloHeadline from '../components/HelloHeadline.js'

import Pubsub from '../utils/PubSub.js'

const Controller = {}

Controller.selectors = {
  SignIn : document.getElementById('sign-in'),
  InformationWidget : document.getElementById('information-widget')
}

Controller.init = function() {
  SignIn.setup(this.selectors.SignIn)
  Pubsub.subscribe('@submit', this.onSubmitSignIn)

  HelloHeadline.setup(this.selectors.InformationWidget)
}

Controller.onSubmitSignIn = function(data) {
  localStorage.setItem("username", data)
}

export default Controller