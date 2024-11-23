function compoundInterestCalculator(
  principal,
  rate,
  timesCompounded,
  years,
  digit = 2
) {
  // Convert the rate from percentage to decimal (e.g., 5% becomes 0.05)
  const rateDecimal = rate / 100;

  // Compound interest formula
  const amount = (
    principal * Math.pow(1 + rateDecimal / timesCompounded, timesCompounded * years)
  ).toFixed(digit);

  const CI = (amount - principal).toFixed(digit);

  return {
    amount: amount,
    CI: CI,
  };
}

module.exports = { compoundInterestCalculator };
