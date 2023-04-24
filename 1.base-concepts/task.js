"use strict"
function solveEquation(a, b, c) {
  let arr = [];
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

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(Number(percent)) || isNaN(Number(contribution)) || isNaN(Number(amount)) || isNaN(Number(countMonths))) {
    return false;
  }
  percent = Number(percent) / 100;
  let bodyCredit = Number(amount) - Number(contribution);
  let monthPercent = percent / 12;
  let monthlyPayment = bodyCredit * (monthPercent + monthPercent / ((1 + monthPercent)**countMonths - 1));
  let totalAmount = monthlyPayment * countMonths;
  return Number(totalAmount.toFixed(2));}
}