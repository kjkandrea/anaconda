const Clock = {}

Clock.setup = function(el) {
  this.el = el
  this.bindEvents()
  return this
}

Clock.bindEvents = function() {
  setInterval(this.getTimer, 1000)
}

Clock.getTimer = function() {
  const date = new Date()
  const hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
  const minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
  const second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()

  Clock.el.innerText = `${hour}:${minute}:${second}`
  Clock.el.setAttribute('datetime', `${hour}:${minute}:${second}`)
}

export default Clock