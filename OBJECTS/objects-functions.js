

let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function(book){
    console.log(`${book.title} by ${book.author}`)
}




let myFavoriteBook = {
    title: "The Donner Party",
    author: "Tom Sawyer",
    length: 326
}

var favBooks = function(book){
    favBooks = book.title
    favBooks = book.author
    favBooks = book.length
}

favBooks(myFavoriteBook)
console.log(`My favorite book is ${myFavoriteBook.title} its by ${myFavoriteBook.author} and is only ${myFavoriteBook.length} pages long.`)


getSummary(myBook)
getSummary(otherBook)


let weatherConverter = function(farenheight){
    return{
        farenheight: farenheight,
        celcius: (farenheight - 32) * 5 / 9,
        kelvin: (farenheight + 459.67) * 5 / 9
    }
}

let temp = weatherConverter(75)

console.log(temp)