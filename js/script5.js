/*(function (food) {
  if (food === 'cookies') {
    console.log('More please :)');
  } else {
    console.log('Some food please :)');
  }
})('cookies');*/

let foodFunc = function (food) {
  return food === 'cookies' ? console.log('More please :)') : console.log('Some food please :)')
};

foodFunc('cookies');