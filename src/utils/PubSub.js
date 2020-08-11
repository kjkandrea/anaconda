export default {
  events: {},
  subscribe(event, fn) {
    this.events[event] = this.events[event] || []
    this.events[event].push(fn)
  },
  publish(event, data) {
    if (this.events[event]) this.events[event].forEach(fn => {
      fn(data)
    });
  }
}