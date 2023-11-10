// for (let i = 0; i <= 5; i++) {
//    console.log(i)    
// }

// let sum = 0 ;
// let n = prompt("Enter the value of n")
// n= Number.parseInt(n)
// for (let i=0 ; i < n; i++){
//     sum = sum + (i+i)
// }
// console.log("Sum of first " + n + "Natural number is " + sum)



// let  fact=1 ;
// let n= prompt("Enter a number: ");    
//  n=Number.parseInt(n);
//     for(let i=1;i<=n;i++){    
//       fact=fact*i; 
//     }
//     console.log("Factorial of ",n, "is " ,fact)


let obj = {
    saurya : 89,
    vibhas: 90,
    aniket:91,
    vaibhya:92,
    axat:93,
    mukul:94,
    ganya:95
}
for (let a in obj) {
  console.log("Marks of "+ a +" are " + obj[a])
}