import { auth } from '../middleware/Authenticated.js'
import { modal, form } from '../utils/DomControls.js'
import Pubsub from '../utils/PubSub.js'

const SignIn = {}

SignIn.formEl = document.signin

SignIn.setup = function(el) {
  this.el = el
  if(!auth()) this.ViewSignIn(el)
  this.bindEvents()
  return this
}

SignIn.ViewSignIn = function(el) {
  modal.setOverlayClose(el, false)
  modal.open(el).autoFocusInput(el)
}

SignIn.bindEvents = function() {
  this.formEl.addEventListener('submit', this.onSubmitForm)
}

SignIn.onSubmitForm = function(e) {
  e.preventDefault()

  const username = e.target.username.value.trim()
  if (!!username) {
    Pubsub.publish('@submit', username)
    modal.close(SignIn.el)
    auth()
  } else {
    form.showGuide(e.target, 'username을 입력하세요.', e.target.username)
  }
}

export default SignIn