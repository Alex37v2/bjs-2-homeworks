function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((acc, cur) => acc + cur, 0);

  let avg = sum / arr.length;
  return { min: min, max: max, avg: Number(avg.toFixed(2))};
}
getArrayParams(5, 6, 47, 54, 32, 71, 28, 82, 176);

function summElementsWorker(values) {
  if (!arr.length) return 0;

  return arr.reduce((sum, current) => sum + current);
}

//Задание 2
function summElementsWorker(...arr) {
  let sum = 0;
  if(arr.length === 0) {
    return 0;
  } 
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}
console.log(summElementsWorker(4, 2, 3, 1));

function differenceMaxMinWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  } 
  
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return max - min;
}
console.log(differenceMaxMinWorker(4, 2, 3, 1));

function differenceEvenOddWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  } 

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++){
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
  }
  return sumEvenElement - sumOddElement;
}
console.log(differenceEvenOddWorker(4, 2, 3, 1));

function averageEvenElementsWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  } 
  
  let sumEvenElement  = 0;
  let countEvenElement = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement;
}
console.log(averageEvenElementsWorker(4, 2, 3, 1));

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];

function makeWork(arrOfArr, func) {
  let maxWorkerResult = [];
  for (let i = 0; i < arrOfArr.length; i++) {
    maxWorkerResult.push(func(...arrOfArr[i]));
  }
  return Number(Math.max(...maxWorkerResult));
}
console.log(makeWork(arr, summElementsWorker));
