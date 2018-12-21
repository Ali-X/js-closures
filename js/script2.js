function comparePassword(password) {
  let count = 0;

  return function (userInput) {
    if (userInput === password && count < 5) {
      return true;
    } else if (userInput !== password && count < 5) {
      count++;
      return false;
    } else if (userInput !== password && count >= 5) {
      return "Error";
    }
  }
}

let funct = comparePassword("password");
let userInput = prompt("Enter password", "default");

console.log(funct(userInput));//1
console.log(funct(userInput));//2
console.log(funct(userInput));//3
console.log(funct(userInput));//4
console.log(funct(userInput));//5
console.log(funct(userInput));//6
console.log(funct(userInput));//7

