import { auth } from '../middleware/authenticated.js'
import { modal } from '../utils/index.js'

const SignIn = {}

SignIn.setup = function(el) {
  auth() ? console.log('auth true') : this.ViewSignIn(el)
}

SignIn.ViewSignIn = function(el) {
  modal.setOverlayClose(el, false)
  modal.open(el)
}

export default SignIn