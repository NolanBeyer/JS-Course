let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

// Dot notatin / Template Strings

// console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)



let person = {
    name: 'Drew Brees',
    age: 41,
    location: 'New Orleans, Louisiana'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)

person.age = person.age + 1

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)
