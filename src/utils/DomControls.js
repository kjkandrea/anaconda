export const modal = {}
export const form = {}

modal.open = function(el) {
  el.setAttribute('open', 'true')
  return this
}

modal.close = function(el) {
  el.removeAttribute('open')
}

modal.setOverlayClose = function(el, boolean) {
  const toggleEl = el.getElementsByTagName('summary')
  if (!boolean) {
    toggleEl[0].addEventListener('click', (e) => {
      e.preventDefault()
    })
  }
  return this
}

modal.autoFocusInput = function(el) {
  const firstInputEl = el.getElementsByTagName('input')[0]
  firstInputEl.focus()
  return this
}

form.showGuide = function(form, text, input) {
  const el = form.querySelector('.flash-warn')
  el.innerText = text
  el.style.display = 'block'

  if(input) {
    input.focus()
    input.addEventListener('keyup', () => {
      !!input.value.trim() ? el.style.display = 'none' : el.style.display = 'block'
    })
  }
  
  return form
}