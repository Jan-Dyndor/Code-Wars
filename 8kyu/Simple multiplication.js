// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  // your code........
  const resoult = number % 2 === 0 ? number * 8 : number * 9;
  return resoult;
}
console.log(simpleMultiplication(2));

//Inne
function simpleMultiplication(n) {
  return n * (n % 2 ? 9 : 8);
}
//
function simpleMultiplication(value) {
  if (value % 2 === 0) {
    return value * 8;
  } else {
    return value * 9;
  }
}
