// Problem 16: Power digit sum
// 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 2expone

function powerDigitSum(exponent) {
  let x = BigInt(Math.pow(2, exponent));
  console.log(x);
  return String(x)
    .split("")
    .reduce((a, c) => {
      return Number(a) + Number(c);
    });
}

console.log(powerDigitSum(100));
