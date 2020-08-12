const AddItem = {}

AddItem.setup = function(el) {
  this.el = el
  this.bindEvents()
}

AddItem.bindEvents = function() {
  const addButton = this.el.querySelectorAll('.js-add-btn')
  const addForm = this.el.querySelectorAll('.js-add-item-form')
  addButton.forEach(el => {
    el.addEventListener('click', this.onClickAdd)
  });
  addForm.forEach(el => {
    el.addEventListener('submit', this.onSubmitAdd)
  })
}

AddItem.onClickAdd = function(e) {
  e.target.previousElementSibling.style.display = 'block'
  e.target.previousElementSibling.querySelector('input').focus()
}

AddItem.onSubmitAdd = function(e) {
  e.preventDefault()

  const val = e.target.querySelector('input').value
  const type = e.target.dataset.part

  console.log(val, type)
}

export default AddItem;