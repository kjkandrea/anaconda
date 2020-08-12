const Anaconda = {}

Anaconda.setup = function(el) {
  this.el = {
    head: el.querySelector('#head-items'),
    body: el.querySelector('#body-items'),
    tale: el.querySelector('#tale-items')
  }

  this.render()
}

Anaconda.render = function() {
  let data = JSON.parse(localStorage.getItem('anaconda'))

  for(const part in Anaconda.el) {
    let template = ''

    data[part].forEach(e => {
      template += `<li class="Box-row">${e.data}</li>`
    })

    Anaconda.el[part].innerHTML = template
  }
}

export default Anaconda