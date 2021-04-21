const todos = [
  {
    text: 'Make Dinner',
    completed: true,
  },
  {
    text: 'Clean Dishes',
    completed: false,
  },
  {
    text: 'Wash car',
    completed: true,
  },
  {
    text: 'Fold Laundry',
    completed: false,
  },
  {
    text: 'Finish Homework',
    completed: true,
  },
]

document.querySelector('button').addEventListener('click', function (e) {
  e.target.textContent = 'Todo added'
})

document.querySelector('#add-todo').addEventListener('click', function (e) {
  e.target.textContent = 'todo added'
})

document.querySelector('#new-todo').addEventListener('input', function (e) {
  console.log(e.target.value)
})

//* You have two todos left

// const incompleteTodos = todos.filter((todo) => !todo.completed)
// const summary = createElement('h2')
// summary.textContent = `You have${incompleteTodos.length} todos left to finish`
// document.querySelector('body').appendChild(summary)

// todos.forEach(function (todo) {
//   const p = document.createElement('h2')
//   p.textContent = todo.text
//   document.querySelector('body').appendChild(p)
// })
// const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach(function (paragraph) {
//   if (paragraph.textContent.includes('the')) {
//     paragraph.remove()
//   }
// })
