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

// console.log(`You have ${todos.length} todos`)
// console.log(`todos ${todos[0]}`)
// console.log(`todos ${todos[todos.length - 1]}`)

// todos.splice(3, 1)
// todos.push('Give dog a bath')
// todos.shift()
// console.log(todos)

// todos.forEach(function(todo, index){
//     const num = index + 1
//     console.log(`${num}. ${todo}`)
// })

// for(let count = 0; count < todos.length; count++){
//     const num = count + 1
//     const todo = todos[count]
//     console.log(`${num}. ${todo}`)
// }

// 1. Convert array to array of objects -> text, completed
// 2. Create a function remove a todo by text value

// const deleteTodo = function(todos, deleteTodo){
//     let index = todos.slice(function(todo){
//         return todo.completed === 
//     })
//     return todos[index]
// }

// const deleteTodo = function(todos, todoText){
//     const index = todos.findIndex(function(todo){
//         return todo.text.toLowerCase() === todoText.toLowerCase()
//     })
//     if(index > -1){
//         todos.splice(index, 1)
//     }
// }

// deleteTodo(todos, 'fold laundry')
// console.log(todos)

const completedTodo = function(todos){
    return todos.filter(function(todo){
        return todo.completed === false
    })
}

console.log(completedTodo(todos))


const deleteTodos = function(todos, todosText){
    const index = todos.findIndex(function(todo){
        return todo.text.toLowerCase() === todosText.toLowerCase()
    })
    if(index > -1){
        todos.splice(index,1)
    }
}


const sortTodos = function(todos){
    todos.sort(function(a, b){
        if(!a.completed && b.completed){
            return -1
        } else if(!b.completed && a.completed){
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)

