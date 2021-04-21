const notes = [
  {
    title: 'My next trip',
    body: 'Somewhere to fix my body',
  },
  {
    title: 'Habbits to work on',
    body: 'Sleep schedule',
  },
  {
    title: 'Office modifications',
    body: 'Get a good chair',
  },
]

document.querySelector('#create-note').addEventListener('click', function (e) {
  e.target.textContent = 'The button was clicked'
})

document.querySelector('#remove-all').addEventListener('click', function (e) {
  e.target.textContent = 'Notes deleted'
})

document.querySelector('#search-text').addEventListener('input', function (e) {
  console.log(e.target.value)
})

// document.querySelectorAll('.note').forEach(function (note) {
//   note.remove()
// })

//* DOM - Document Object Model

//* Query and remove
/// p.remove()

//* Query all and remove
// const ps = document.querySelectorAll('p')

// ps.forEach(function (p) {
//   p.textContent = '****'
//   console.log(p.textContent)
//   p.remove()
// })

//* Create a new element

// const newElement = document.createElement('p')

// newElement.textContent = 'This is a new element from javascript'

// document.querySelector('body').appendChild(newElement)
