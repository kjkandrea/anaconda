import PubSub from '../utils/PubSub.js'

const Weather = {}

Weather.setup = function(el) {
  this.el = el
  this.loadCoords()
}

Weather.render = function(data) {
  this.el.innerText = `현재 위치 : ${data.place}, 날씨 : ${data.weather}, 기온 : ${data.temperature}도`
}

Weather.loadCoords = function() {
  const coords = localStorage.getItem('coords')
  if (!coords) {
    this.askForCoords()
  } else {
    const parsedCoords = JSON.parse(coords)
    PubSub.publish('@requestCoords', parsedCoords)
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