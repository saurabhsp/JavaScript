let num = Math.floor(Math.random() * 100);
num = Number.parseInt(num);
let chance;
for (chance = 1; chance < 100; chance++) {
  let input = prompt("Enter the Number in your Mind");
  input = Number.parseInt(input);
  if (input == 0) {
    alert("You Lost! Better Luck Next-time");
    break;
  }
  if (input != num && input != 0) {
    if (input < num) {
      console.log("Hint: Try Greater Value");
    } else if (input > num) {
      console.log("Hint: Try Smaller Value");
    }
  }
  if (input == num) {
    alert("Congratulations! You Entered a Correct Value and your Score is : " + (100-chance));
    break;
  }
}
console.log("The Number was: "+ num)
console.log("YAY!! You Scored : " + (100-chance))
