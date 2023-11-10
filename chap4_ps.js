//Strings are Immutable_:

let str ="Har\""
console.log(str)

const sentence  ='The quick brown fox jumps over the lazy dog.'
const word = 'fox';
console.log(sentence.includes(word))
console.log(`the word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);


const str2 = 'Is this a question?';
console.log(str2.endsWith('question',18));

//Q3
let frname = "KESHAV"
console.log(frname.toLowerCase(frname))

//Q4
let str3= "Please Give Rs 1000"
let amount = Number.parseInt(str3.slice("Please give Rs ".length))
console.log(amount)
console.log(typeof (amount))

