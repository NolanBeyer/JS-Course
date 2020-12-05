// Studens score, total possible score
// 15/20 -> You got a C (75%)

// let gradeCalc = function(score, totalScore){
//     let percent = (score / totalScore) * 100
//     if(percent >= 90){
//         return `you got an A ${percent}%`
//     } else if(percent >= 80) {
//     return `you got a B ${percent}%`
//     } else if(percent >= 70){
//         return `you got a C ${percent}%`
//     } else if(percent >= 60){
//         return `you got a D ${percent}`
//     } else {
//         return `you got a ${percent}% you failed :(`
//     }
// } 

// let result = gradeCalc(64, 80)
// console.log(result)
 

let gradeCalc = function(score, totalScore){
    let percent = (score / totalScore) * 100
    let letterGrade = ``
    if(percent >= 90){
        letterGrade =  'A'
    } else if(percent >= 80){
        letterGrade = 'B'
    }  else if(percent >= 70){
        letterGrade = 'C'
    } else if(percent >= 60){
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }
    return `you got a ${letterGrade} ${percent}%`
}

let result = gradeCalc(50, 100)

console.log(result)
