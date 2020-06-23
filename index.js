let preview = document.getElementById('preview');
let render = document.getElementById('render');
let source = document.getElementById('source');
let timerId
let count = 0

let renderHandler = () => {
  let userIn = source.value

  let userHTML = marked(userIn)

  preview.innerHTML = userHTML
}

render.addEventListener('click', renderHandler)

source.addEventListener('keyup', () => {
  clearTimeout(timerId)
  timerId = setTimeout(renderHandler, 3000)
})
