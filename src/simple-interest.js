function simpleInterestCalculator(p, r, t, period = "year", toDecimal = 2) {
  const key = period.toLowerCase();
  let si = 0;
  let amount = 0;
  switch (key) {
    case "year":
      si = (p * r * t) / 100;
      amount = p + si;
      break;
    case "month":
      si = (p * r * t) / (100 * 12);
      amount = p + si;

    default:
      return "Please Enter Correct Arguments !!!";
  }

  return { interest: si.toFixed(toDecimal), amount: amount.toFixed(toDecimal) };
}

module.exports = {  simpleInterestCalculator };
