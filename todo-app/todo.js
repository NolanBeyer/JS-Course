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

const incompleteTodos = todos.filter(function(todo){
    return !todo.completed
})


const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} left`
document.querySelector('body').appendChild(summary)


todos.forEach(function(t) {
    const p = document.createElement('p')
    t.textContent = todos.text
    document.querySelector('body').appendChild(p)
})

document.querySelector('#remove-todo').addEventListener('click', function(){
    console.log('Message removed')
})

document.querySelector('#todo-text').addEventListener('input', function(e) {
    console.log(e.target.value)
})

