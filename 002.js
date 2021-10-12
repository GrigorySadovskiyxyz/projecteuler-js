function fiboEvenSum(n) {
    let sum = 0;
    let fibArray = [0, 1];
    let lastNumber = fibArray[fibArray.length - 1];
    let previousNumber;
    while (lastNumber <= n) {
      if (lastNumber % 2 === 0) {
        sum += lastNumber;
      }
    previousNumber = fibArray[fibArray.length - 2];
    fibArray.push(previousNumber + lastNumber);
    lastNumber = fibArray[fibArray.length - 1];
    }
    return sum;
  }
  
  console.log(fiboEvenSum(10));

  // Did without recursive approach