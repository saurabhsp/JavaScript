// let arr =[60,70,80]
// let newArr= arr.map((element,index,array)=>{
//     console.log(element,index,array) //value index and arrya are parametersof map function
//     return element + 1
// })
// console.log(newArr)

//Aray filter method
// let arr2= [12,23,34,45,45,56,67,78,89,90]
// let newArray2= arr2.filter((value)=>{
//     return value < 40
// })
// console.log(newArray2)


// //aaray Reduce function
// let arr3= [2,4,4,5,6,7,8]
// let newArray3=arr3.reduce((value1,value2)=>{
//     return (value1 + value2)
// })
// console.log(newArray3)

let arr3= [2,4,4,5,6,7,8]
const reduce_func=(h1,h2)=>{
    return h1+h2
}
let newArray3 = arr3.reduce(reduce_func)
console.log (newArray3)