// Global scope - farenheightToCelcius, dayOne, dayTwo
    // Local scope - farenheight, celcius
        // Local scope - isFreezing

let farenheightToCelcius = function(farenheight){
    let celcius = (farenheight - 32) *5 / 9

    if(celcius <= 0){
        let isFreezing = true
    }
    return(celcius)
}


let tempOne = farenheightToCelcius(55)
let tempTwo = farenheightToCelcius(88)

console.log(tempOne)
console.log(tempTwo)




