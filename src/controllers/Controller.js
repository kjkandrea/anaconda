import SignIn from '../components/SignIn.js'
import HelloHeadline from '../components/HelloHeadline.js'
import Clock from '../components/Clock.js'
import Weather from '../components/Weather.js'

import Pubsub from '../utils/PubSub.js'

const Controller = {}

Controller.selectors = {
  SignIn : document.getElementById('sign-in'),
  InformationWidget : document.getElementById('information-widget'),
  Clock : document.getElementById('clock'),
  Weather : document.getElementById('weather')
}

Controller.init = function() {
  SignIn.setup(this.selectors.SignIn)
  Pubsub.subscribe('@submit', this.onSubmitSignIn)

  HelloHeadline.setup(this.selectors.InformationWidget)

  Clock.setup(this.selectors.Clock)
  Weather.setup(this.selectors.Weather)
  Pubsub.subscribe('@saveCoords', this.saveCoords)
}

Controller.onSubmitSignIn = function(data) {
  localStorage.setItem("username", data)
}

Controller.saveCoords = function(obj) {
  localStorage.setItem("coords", JSON.stringify(obj))
}

export default Controller