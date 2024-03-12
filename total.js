function total(numbers) {
  return numbers
    .split(",")
    .map((part) => parseInt(part))
    .filter(
      (integer) =>
      checkIsInteger(integer) && checkIsAnIntegerIsInAValidRange(integer)
    )
    .reduce((acc, curr) => acc + curr, 0);
}

function checkIsInteger(integer) {
  return !isNaN(integer);
}

function checkIsAnIntegerIsInAValidRange(integer) {
  return integer <= 1000 && integer >= 0;
}

module.exports = total;
