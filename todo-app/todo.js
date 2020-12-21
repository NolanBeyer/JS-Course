const todos = [{
    text: 'Make Dinner',
    completed: true
},

{
    text: 'Clean Dishes',
    completed: false
},

{
    text: 'Wash car',
    completed: true
},

{
    text: 'Fold Laundry',
    completed: false
},

{
    text: 'Finish Homework',
    completed: true
}]

// const ps = document.querySelectorAll("p")

// ps.forEach(function(p) {
//     if(p.textContent.includes('the')) {
//         p.remove()
//     }
// })

const incompleteTodos = todos.filter(function(todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `you have ${incompleteTodos.length} left todo`
document.querySelector('body').appendChild(summary)


todos.forEach(function(todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})