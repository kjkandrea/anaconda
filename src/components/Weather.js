import PubSub from '../utils/PubSub.js'

const Weather = {}

Weather.setup = function() {
  this.loadCoords()
}

Weather.loadCoords = function() {
  const coords = localStorage.getItem('coords')
  if (!coords) {
    this.askForCoords()
  }
}

Weather.askForCoords = function() {
  navigator.geolocation.getCurrentPosition(this.handleGeoSuccess, this.handleGeoError)
}

Weather.handleGeoSuccess = function(position) {
  const latitude = position.coords.latitude
  const longitude = position.coords.longitude

  PubSub.publish('@saveCoords', {latitude, longitude})
}

Weather.handleGeoError = function() {
  console.error('Geo Location 에 접근할 수 없습니다.')
}

export default Weather