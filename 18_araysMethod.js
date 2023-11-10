// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let num_more = [11, 12, 13, 14, 15, 16, 17, 28, 19];

// // delete num[0]
// // console.log (num.length)

// let newArr= num.concat(num_more)
// console.log(newArr)
// // console.log(newArr.join(" & "))

//sort method
// let compare = (a,b) => {
//     return a-b// ascending
//     // return b-a//descending
// }

// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229];
// num.sort(); //modify the array 
// num.sort(compare)
// // num.reverse()
// console.log(num);

//Splice & Slice

let num = [551, 22, 3, 14, 5, 6, 7, 8, 229];
num.splice(2,0,1021,1022,1023)
console.log(num)
 