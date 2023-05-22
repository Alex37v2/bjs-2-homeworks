"use strict"
function solveEquation(a, b, c) {
  const arr = [];
  const d = b**2 - 4*a*c;
  if (d < 0) {
    return arr; // пустой массив
  } else if (d === 0) {
    const x = -b / (2*a);
    arr.push(x); // массив с одним корнем
    return arr;
  } else {
    const x1 = (-b + Math.sqrt(d)) / (2*a);
    const x2 = (-b - Math.sqrt(d)) / (2*a);
    arr.push(x1, x2); // массив с двумя корнями
  return arr;
}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(Number(percent)) || isNaN(Number(contribution)) || isNaN(Number(amount)) || isNaN(Number(countMonths))) {
    return false;
  }
  interestRate = Number(percent) / 100;
  const bodyCredit = Number(amount) - Number(contribution);
  const monthPercent = percent / 12;
  const monthlyPayment = bodyCredit * (monthPercent + monthPercent / ((1 + monthPercent)**countMonths - 1));
  const totalAmount = monthlyPayment * countMonths;
  return Number(totalAmount.toFixed(2));
}
