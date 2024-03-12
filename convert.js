function dollarsToRubles(dollars) {
  // =============== prevative smell ===============
  let dollarsCount = dollars * 1.25;
  return dollarsCount * 60;
}
module.exports = dollarsToRubles;

// function dollarsToRubles(dollars) {
//     const exchangeRate = 1.25;
//     const rublesPerDollar = 60;

//     let dollarsCount = dollars * exchangeRate;
//     return dollarsCount * rublesPerDollar;
//   }
//   module.exports = dollarsToRubles;
