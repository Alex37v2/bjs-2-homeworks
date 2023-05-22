function getArrayParams(min, max, sum, ...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  
  arr.forEach((el)=>{
    if(el>max)max=el;
    if(el<min)min=el;

    sum +=el;
  });
  
  const avg = +(sum / arr.length).toFixed(2);
  
  return {min, max, avg};
  
}

function summElementsWorker(values) {
  if (!arr.length) return 0;

  return arr.reduce((sum, current) => sum + current);
}

function differenceMaxMinWorker(...arr) {
  if (!arr.length) return 0;

  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (!arr.length) return 0;

  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (!arr.length) return 0;

  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  if (!countEvenElement) return 0;

  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (const arr of arrOfArr) {
    const workerResult = worker(...arr);

    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult;
    }
  }

  return maxWorkerResult;
};
