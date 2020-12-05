//Logical operator - True if both sided are true. False otherwise

// var temp = 55

// if(temp >= 60 && temp <=100){
//     console.log("Its really nice out")
// } else {
//     console.log("Stay ininde please")
// }

//or operator - True if atleast one side is true. False otherwise


// if(temp <= 0|| temp >= 120){
//     console.log("DO not go outside")
// } else {
//     console.log("Go play outside")
// }


// if(temp >= 32 && temp <= 100) {
//     console.log("its pretty safe out")
// } else if(temp <= 0 || temp >= 120) {
//     console.log("Go outside at your own risk")
// } else {
//     console.log("Do what you please")
// }


var isGuestOneVegan = true
var isGuestTwoVegan = true

if(isGuestOneVegan && isGuestTwoVegan) {
    console.log("Here's our vegan menu")
} else if(isGuestOneVegan || isGuestTwoVegan) {
    console.log("Here's the vegan and non vegan menu")
} else {
    console.log("Here's are normal menu's")
}
