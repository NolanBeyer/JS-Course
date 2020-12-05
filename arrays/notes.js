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

// const findNotes = function(notes, query){
//     return notes.filter(function(note){
//         let isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
//         let isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
//         return isTitleMatch || isBodyMatch
//     })
// }

// console.log(findNotes(notes, 'chair'))

console.log('a' < 'b')

const sortNotes = function(notes, noteTitle){
    return notes.sort(function(a, b){
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        } else if(b.title.toLowerCase() < a.title.toLowerCase()){
            return 1
        } else {
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)




// // Deletes last item in Array
// console.log(notes.pop())
// // Adds item to the end of Array
// notes.push('My new note')

// // Deletes first item of array
// console.log(notes.shift())
// // Adds to the beginning of array
// console.log(notes.unshift('My first note'))

// Directions for splice
// First argument. Where are we starting from?
// Second argument. How many items are we deleting?
// Third argument. Are we adding a new item to the array?

// notes.splice(2, 1)
// notes[2] = 'This is now the new note 3'

// console.log(notes.length)
// console.log(notes)

// forEach loop - call back function. a function that gets passed to a function
// First aguemnent is the individual item
// Second argument is the index

// notes.forEach(function(item, index){
//     console.log(item)
//     console.log(index)
// })

// for loop
// Counting... 1
// initalizer - Represents a number at what iteration in the loop we're at.
// condition - How long should the condition run
// final expression - Modify the account

// for(let count = 0; count <= notes.length; count++){
//     console.log(notes[count])
// }

// for(let count = notes.length - 1; count >= 0; count--){
//     console.log(notes[count])
// }

// const findNote = function(notes, noteTitle){
//     const index = notes.findIndex(function(note, index){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

// const note = findNote(notes, 'office modifications')
// console.log(note)

// const findNote = function(notes, noteTitle){
//     return notes.find(function(note){
//         return note.title === noteTitle
//     })
// }

// const note = findNote(notes, 'My next trip')
// console.log(note)


// const index = notes.findIndex(function(note, index){
//     return note.title === 'My next trip'
// })

// console.log(index)





