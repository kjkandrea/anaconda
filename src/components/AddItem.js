const AddItem = {}

AddItem.setup = function(el) {
  this.el = el
  this.bindEvents()
}

AddItem.bindEvents = function() {
  const addButton = this.el.querySelectorAll('.js-add-btn')
  addButton.forEach(el => {
    el.addEventListener('click', this.onClickAdd)
  });
}

AddItem.onClickAdd = function(e) {
  const part = e.target.dataset.part
  console.log('%s add button click', part)
}

AddItem.add = function() {

}

export default AddItem;