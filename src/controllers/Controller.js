import SignIn from '../components/SignIn.js'

const Controller = {}

Controller.selectors = {
  SignIn : document.getElementById('sign-in')
}

Controller.init = function() {
  SignIn.setup(this.selectors.SignIn)
}

export default Controller