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

const filters = {
    searchText: ''
}

renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    filteredNotes.forEach(function(note) {
        const noteElement = document.createElement('p')
        noteElement.textContent = note.title
        document.querySelector('body').appendChild(noteElement)
    })
}

renderNotes(notes, filters)


const newButton = document.createElement('button')

newButton.textContent = 'add new todo'

document.querySelector('body').appendChild(newButton)

document.querySelector('button').addEventListener('click', function(e) {
    e.target.textContent = 'new todo added'
})

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value 
    renderNotes(notes, filters)
})






