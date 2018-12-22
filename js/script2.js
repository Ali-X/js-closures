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

let func = comparePassword("password");
let userInput = prompt("Enter password", "default");

console.log(func(userInput));//1
console.log(func(userInput));//2
console.log(func(userInput));//3
console.log(func(userInput));//4
console.log(func(userInput));//5
console.log(func(userInput));//6
console.log(func(userInput));//7

