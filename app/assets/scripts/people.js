//= require index

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('mousedown', ev => {
    document.body.style.backgroundColor = 'green';
  })
  document.addEventListener('mouseup', ev => {
    document.body.style.backgroundColor = 'white';
  })
})
