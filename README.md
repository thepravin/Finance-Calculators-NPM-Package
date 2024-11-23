# Easy Finance Calculator

`easy-finance-calculator` is a simple and efficient npm package to calculate financial metrics such as **Simple Interest**, **Compound Interest**, and **SIP Returns**. Designed for developers, it provides an easy-to-use API for common financial calculations.

NPM Website link: 
```bash   
https://www.npmjs.com/package/easy-finance-calculator  
```

## Installation

To install the package, run:

```bash
npm i easy-finance-calculator
```

## Features

- **Simple Interest Calculator**: Calculate simple interest for yearly or monthly periods.
- **Compound Interest Calculator**: Calculate compound interest with customizable compounding frequency.
- **SIP Calculator**: Calculate SIP future values, total investment, and potential returns.

## How to Use

### Import the Package

To use the package, import the desired functions:

```javascript
const {
  simpleInterestCalculator,
  compoundInterestCalculator,
  sipCalculator,
} = require('easy-finance-calculator');
```

---

### 1. Simple Interest Calculator

The `simpleInterestCalculator` function calculates simple interest based on principal, rate, and time.

#### Function Signature:
```javascript
simpleInterestCalculator(principal, rate, time, period = "year", toDecimal = 2)
```

#### Arguments:
- `principal` (Number): Principal amount.
- `rate` (Number): Annual interest rate in percentage.
- `time` (Number): Time period.
- `period` (String): Time period type (`"year"` or `"month"`, default: `"year"`).
- `toDecimal` (Number): Number of decimal points (default: `2`).

#### Example:
```javascript
const result = simpleInterestCalculator(1000, 10, 2);
console.log(result);
// Output: { interest: '200.00', amount: '1200.00' }
```

---

### 2. Compound Interest Calculator

The `compoundInterestCalculator` function calculates compound interest with adjustable compounding frequency.

#### Function Signature:
```javascript
compoundInterestCalculator(principal, rate, timesCompounded, years, digit = 2)
```

#### Arguments:
- `principal` (Number): Principal amount.
- `rate` (Number): Annual interest rate in percentage.
- `timesCompounded` (Number): Number of times interest is compounded per year.
- `years` (Number): Time period in years.
- `digit` (Number): Number of decimal points (default: `2`).

#### Example:
```javascript
const result = compoundInterestCalculator(1000, 5, 4, 3);
console.log(result);
// Output: { amount: '1161.05', CI: '161.05' }
```

---

### 3. SIP Calculator

The `sipCalculator` function calculates the future value of SIP investments, total investment, and potential returns.

#### Function Signature:
```javascript
sipCalculator(principal, rate, years, digit = 2)
```

#### Arguments:
- `principal` (Number): Monthly investment amount.
- `rate` (Number): Annual return rate in percentage.
- `years` (Number): Time period in years.
- `digit` (Number): Number of decimal points (default: `2`).

#### Example:
```javascript
const result = sipCalculator(5000, 12, 10);
console.log(result);
// Output:
// {
//   futureValue: '1162161.28',
//   totalInvestment: '600000.00',
//   potentialReturns: '562161.28'
// }
```

---

## License

This project is licensed under the Apache-2.0 License.

---

## Contributing

If you'd like to contribute to `easy-finance-calculator`, feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/thepravin/Finance-Calculators-NPM-Package). Contributions, issues, and feature requests are welcome! 

---

## Feedback

If you find this package helpful or have suggestions for improvement, feel free to reach out or leave a review! 😊

<div align="center">
<h1>🧑‍💻 Happy coding!</h1>
</div>
