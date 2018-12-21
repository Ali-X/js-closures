function incrementCounter() {
  let i = 0;

  return function () {
    return ++i;
  }
}

let incFunc = incrementCounter();

console.log("First");
console.log(incFunc());
console.log(incFunc());
console.log(incFunc());

incFunc = incrementCounter();

console.log("Second");
console.log(incFunc());
console.log(incFunc());