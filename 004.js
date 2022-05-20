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
