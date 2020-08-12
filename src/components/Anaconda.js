const Anaconda = {}

Anaconda.setup = function(el) {
  this.rootEl = el
  this.el = {
    head: el.querySelector('#head-items'),
    body: el.querySelector('#body-items'),
    tale: el.querySelector('#tale-items')
  }

  this.render()
  this.bindEvents()
}

Anaconda.render = function() {
  let data = JSON.parse(localStorage.getItem('anaconda'))

  if (data === null) {
    data = {
      head: [],
      body: [],
      tale: [],
    }
  }

  for(const part in Anaconda.el) {
    let template = ''

    data[part].forEach((e, idx) => {
      template += `
      <li class="todo-item Box-row d-flex flex-items-center" data-part="${part}" data-index="${idx}">
        <div class="flex-auto">${e.data}</div>
        <button class="btn btn-sm btn-remove">🗑️</button>
      </li>`
    })

    Anaconda.el[part].innerHTML = template
  }
}

Anaconda.bindEvents = function() {
  const target = this.rootEl.querySelectorAll('.js-items')
  target.forEach(el => {
    el.addEventListener('click', e => {
      if(e.target.tagName === 'BUTTON') {
        const part = e.target.closest('li').dataset.part
        const index = e.target.closest('li').dataset.index
        console.log('%s 파트 %s 번째 아이템 remove click event', part, index)
      }
    })
  })
}

export default Anaconda