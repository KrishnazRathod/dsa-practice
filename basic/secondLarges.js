function secondL(array) {
  array.sort((a, b) => a - b);
  return array[array.length - 2];
}
function secondS(array) {
  array.sort((a, b) => b - a);
  return array[array.length - 2];
}

function secondLa(array) {
  let largest = -Infinity;
  let secondL = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (largest < array[i]) {
      largest = array[i];
    }
  }
  for (let j = 0; j < array.length; j++) {
    if (secondL < array[j] && array[j] !== largest) {
      secondL = array[j];
    }
  }
  return secondL;
}
function secondSm(array) {
  let smallest = Infinity;
  let secondS = Infinity;
  for (let i = 0; i < array.length; i++) {
    if (smallest > array[i]) {
      smallest = array[i];
    }
  }
  for (let j = 0; j < array.length; j++) {
    if (secondS > array[j] && array[j] !== smallest) {
      secondS = array[j];
    }
  }
  return secondS;
}

function secondLar(array) {
  if (array.length < 2) {
    return -1;
  }
  let largest = -Infinity;
  let secondL = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      secondL = largest;
      largest = array[i];
    } else if (array[i] > secondL && largest !== array[i]) {
      secondL = array[i];
    }
  }
  return secondL;
}
function secondSma(array) {
  if (array.length < 2) {
    return -1;
  }
  let largest = Infinity;
  let secondL = Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < largest) {
      secondL = largest;
      largest = array[i];
    } else if (array[i] < secondL && largest !== array[i]) {
      secondL = array[i];
    }
  }
  return secondL;
}

var array = [4, 54, 7, 22, 44, 78, 78, 2, 54];
var secondL = secondL(array);
console.log("secondL: ", secondL);
var secondS = secondS(array);
var secondLa = secondLa(array);
var secondSm = secondSm(array);
var secondLar = secondLar(array);
var secondSma = secondSma(array);
console.log("secondLar:", secondLar);
console.log("secondSma:", secondSma);
