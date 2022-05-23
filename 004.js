// Problem 4: Largest palindrome product
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two n-digit numbers.

function largestPalindromeProduct(n) {
  let maxNum = Number(Array(n).fill(9).join("")); // My variation (assuming number being passed in function)
  let minNum = (maxNum + 1) / 10;
  let res = [];

  for (let i = maxNum; i > minNum; i--) {
    for (let j = maxNum; j > minNum; j--) {
      let number = i * j;
      let reverse = Number(number.toString().split("").reverse().join(""));

      if (number == reverse) {
        res.push(number);
        break;
      }
    }
  }
  return Math.max(...res);
}

console.log(largestPalindromeProduct(5));
