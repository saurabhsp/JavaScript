let marks ={
    saurya : 89,
    vibhas: 90,
    aniket:91,
    vaibhya:92,
    axat:93,
    mukul:94,
    ganya:95
}
// for (let i=0; i<Object.keys(marks).length; i++){
//     console.log("The marks of " +Object.keys(marks)[i]+ " are " + + marks[Object.keys(marks)[i]])
// }

// for (let key in marks){
//     console.log("The marks of " + key + " are : " + marks[key])
// }

//problem 3

// let cn = 22
// let i
// while (i != cn) {
//     i= prompt("Enter a Number")
//     if(i != cn){
//         alert ("Try AGain")
//     }
// }
// alert("Congratulations! You Enter a Correct Number")

//Q4
const mean = (a,b,c,d) =>{
    return (a+b+c+d)/4
}
console.log(mean(2,4,6,7))