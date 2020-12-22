const notes = [ {
    title: 'My next trip',
    body: 'Somewhere to fix my body'
}, {
    title: 'Habbits to work on',
    body: 'Sleep schedule'
}, {
    title: 'Office modifications',
    body: 'Get a good chair'
}]



// document.querySelector('button').addEventListener('click', function(e) {
//     e.target.textContent = 'new todo'
// })

const newButton = document.createElement('button')

newButton.textContent = 'add new todo'

document.querySelector('body').appendChild(newButton)

document.querySelector('button').addEventListener('click', function(e) {
    e.target.textContent = 'new todo added'
})




