export const modal = {}

modal.open = function(el) {
  el.setAttribute('open', 'true')
}

modal.setOverlayClose = function(el, boolean) {
  const toggleEl = el.getElementsByTagName('summary')
  if (!boolean) {
    toggleEl[0].addEventListener('click', (e) => {
      e.preventDefault()
    })
  }
}