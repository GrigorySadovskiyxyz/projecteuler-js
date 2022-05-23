// Problem 15: Lattice paths
// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

// a diagram of 6 2 by 2 grids showing all the routes to the bottom right corner
// How many such routes are there through a given gridSize?

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
