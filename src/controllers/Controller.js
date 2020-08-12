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

  PubSub.subscribe('@requestCoords', Controller.getWeather)
  PubSub.subscribe('@saveCoords', Controller.saveCoords)
  Weather.setup(Controller.selectors.Weather)
}

Controller.onSubmitSignIn = function(data) {
  localStorage.setItem("username", data)
}

Controller.saveCoords = function(obj) {
  localStorage.setItem("coords", JSON.stringify(obj))
  Controller.getWeather(obj)
}

Controller.getWeather = function(obj) {
  const beforeWeather = JSON.parse(localStorage.getItem('beforeWeather'))
  const beforeUpdateTime = beforeWeather.lastUpdate
  const UpdateOneHourOver = 3600000 > (Date.now() - beforeUpdateTime) ? false : true

  if (beforeWeather || !UpdateOneHourOver) {
    Weather.render(beforeWeather)
  }

  if (beforeWeather === null || UpdateOneHourOver) {
    OpenWeatherMap.get(obj.latitude, obj.longitude).then(res => {
      const newObj = {...res, lastUpdate: Date.now()}
      localStorage.setItem("beforeWeather", JSON.stringify(newObj))
      Weather.render(newObj)
    })
  }
}

export default Controller