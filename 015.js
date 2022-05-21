function latticePaths(gridSize) {
  let n = gridSize;
  function factorialNum(n) {
    //base case
    if (n === 0 || n === 1) {
      return 1;
      //recursive case
    } else {
      return n * factorialNum(n - 1);
    }
  }
  return factorialNum(n + n) / (factorialNum(n) * factorialNum(n));
}

console.log(latticePaths(4));
