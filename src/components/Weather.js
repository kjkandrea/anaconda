const Weather = {}

Weather.setup = function() {
  this.loadCoords()
}

Weather.loadCoords = function() {
  const coords = null; // = localStorage.getItem(COORDS)
  if (!coords) {
    this.askForCoords()
  }
}

Weather.askForCoords = function() {
  navigator.geolocation.getCurrentPosition(this.handleGeoSuccess, this.handleGeoError)
}

Weather.handleGeoSuccess = function(position) {
  console.log(position)
}

Weather.handleGeoError = function() {
  console.error('Geo Location 에 접근할 수 없습니다.')
}

export default Weather