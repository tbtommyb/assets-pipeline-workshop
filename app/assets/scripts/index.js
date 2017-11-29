document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('mousedown', ev => {
    document.body.style.color = 'red';
  })
  document.addEventListener('mouseup', ev => {
    document.body.style.color = 'black';
  })
})
