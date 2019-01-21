function multiA(a) {
  return function(b) {
    return a * b;
  }
}

let multi3 = multiA(3);
let multi4 = multiA(4);

console.log("3 * 5 = " + multi3(5));
console.log("4 * 5 = " + multi4(5));
