import { auth } from '../middleware/Authenticated.js'

const HelloHeadline = {}

HelloHeadline.setup = function(el) {
  this.el = el
  if (auth()) this.render(el)
}

HelloHeadline.render = function(el) {
  el.style.display = 'block'
  el.getElementsByTagName('h2')[0].innerText = `${localStorage.username} 님 안녕하세요!`
}


export default HelloHeadline