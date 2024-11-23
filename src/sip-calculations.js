
function sipCalculator(p, i, n,digit=2) {
  let month = n * 12;
  let monthlyRate = i / 12 / 100;
  let compoundInterest = Math.pow(monthlyRate + 1, month);
  let numerator = compoundInterest - 1;
  let fraction = numerator / monthlyRate;
  let futureValue = (p * fraction * (monthlyRate + 1)).toFixed(digit);

  let totalInvestment = (p * month).toFixed(digit);
  let potentialReturns = (futureValue - totalInvestment).toFixed(digit);

  const result = {
    futureValue: futureValue,
    totalInvestment: totalInvestment,
    potentialReturns: potentialReturns,
  };

  return result;
}

module.exports = { sipCalculator };


