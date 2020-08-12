const HelloHeadline = {}

HelloHeadline.setup = function(el) {
  this.el = el
  this.render(el)
}

HelloHeadline.render = function(el) {
  el.style.display = 'block'
  el.getElementsByTagName('h2')[0].innerText = `${localStorage.username} 님 안녕하세요!`
}


export default HelloHeadline