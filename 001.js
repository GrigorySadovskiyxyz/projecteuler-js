// Problem 1: Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

function multiplesOf3and5(number) {
  let emptyArr = []; // Setting array of the natural numbers
  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      emptyArr.push(i);
    }
  } // Pushing them
  let sum = emptyArr.reduce((partial_sum, a) => partial_sum + a, 0); // Finding sum
  return sum;
}

console.log(multiplesOf3and5(2000));
