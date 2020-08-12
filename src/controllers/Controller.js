import SignIn from '../components/SignIn.js'
import HelloHeadline from '../components/HelloHeadline.js'
import Clock from '../components/Clock.js'
import Weather from '../components/Weather.js'

import PubSub from '../utils/PubSub.js'

import OpenWeatherMap from '../api/OpenWeatherMap.js'

const Controller = {}

Controller.selectors = {
  SignIn : document.getElementById('sign-in'),
  InformationWidget : document.getElementById('information-widget'),
  Clock : document.getElementById('clock'),
  Weather : document.getElementById('weather')
}

Controller.init = function() {
  PubSub.subscribe('@user', Controller.userInit)
  PubSub.subscribe('@submit', this.onSubmitSignIn)
  SignIn.setup(this.selectors.SignIn)
}

Controller.userInit = function() {
  HelloHeadline.setup(Controller.selectors.InformationWidget)

  Clock.setup(Controller.selectors.Clock)

  PubSub.subscribe('@requestCoords', Controller.getCoords)
  PubSub.subscribe('@saveCoords', Controller.saveCoords)
  Weather.setup(Controller.selectors.Weather)
}

Controller.onSubmitSignIn = function(data) {
  localStorage.setItem("username", data)
}

Controller.saveCoords = function(obj) {
  localStorage.setItem("coords", JSON.stringify(obj))
  Controller.getCoords(obj)
}

Controller.getCoords = function(obj) {
  OpenWeatherMap.get(obj.latitude, obj.longitude).then(res => {
    Weather.render(res)
  })
}

export default Controller