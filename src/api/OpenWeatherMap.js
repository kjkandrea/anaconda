const API_URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '99a5fef766b78330257a549c7e7c3db9'

const OpenWeatherMap = {}

OpenWeatherMap.get = function(latitude, longitude) {
  return fetch(`${API_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(json => {
      const place = json.name
      const temperature = json.main.temp;
      const weather = json.weather[0].main

      return ({place, temperature, weather})
    })
    .catch(e => console.error(e))
}

export default OpenWeatherMap