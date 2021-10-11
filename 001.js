function multiplesOf3and5(number) {
    let emptyArr = []; // Setting array of the natural numbers
      for (let i = 3; i < number; i++) {
        if ((i % 3) === 0 || (i % 5) === 0) {
        emptyArr.push(i)
      }
    } // Pushing them
     let sum = emptyArr.reduce((partial_sum, a) => partial_sum + a, 0) // Finding sum
     return sum
  }
  
  console.log(multiplesOf3and5(2000));
  