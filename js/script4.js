function incrementCounter() {
  let obj = {
    i: 0,
    increment: function() {
      return ++obj.i;
    }
  };

  return obj;
}

let incFunc = incrementCounter();

console.log("First");
console.log(incFunc.increment());
console.log(incFunc.increment());
console.log(incFunc.increment());

incFunc = incrementCounter();

console.log("Second");
console.log(incFunc.increment());
console.log(incFunc.increment());