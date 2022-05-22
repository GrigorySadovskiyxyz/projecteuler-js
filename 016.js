function powerDigitSum(exponent) {
  let x = BigInt(Math.pow(2, exponent));
  console.log(x);
  return String(x)
    .split("")
    .reduce((a, c) => {
      return Number(a) + Number(c);
    });
}
