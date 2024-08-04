function largestE(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
      [array[i], array[min]] = [array[min], array[i]];
    }
  }
  return array[array.length - 1];
}

function largestEl(array) {
  for (let i = array.length - 1; i >= 1; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (array[j] > [array[j + 1]]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array[array.length - 1];
}
function largestEle(array) {
  for (let i = 0; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      [array[j - 1], array[j]] = [array[j], array[j - 1]];
      j--;
    }
  }
  return array[array.length - 1];
}
function conquer(array, si, mid, ei) {
  let id1 = si,
    id2 = mid + 1,
    x = 0,
    newArray = [];

  while (id1 <= mid && id2 <= ei) {
    if (array[id1] <= array[id2]) {
      newArray[x] = array[id1];
      id1++;
    } else {
      newArray[x] = array[id2];
      id2++;
    }
    x++;
  }
  while (id1 <= mid) {
    newArray[x] = array[id1];
    id1++;
    x++;
  }
  while (id2 <= ei) {
    newArray[x] = array[id2];
    id2++;
    x++;
  }
  for (let i = 0; i < newArray.length; i++) {
    array[si + i] = newArray[i];
  }
}
function divide(array, si, ei) {
  if (si >= ei) {
    return;
  }
  let mid = Math.floor(si + (ei - si) / 2);
  divide(array, si, mid);
  divide(array, mid + 1, ei);
  conquer(array, si, mid, ei);
  return array[array.length - 1];
}

function largestElement(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}

var array = [1, 5, 7, 5, 64, 44, 5];
//selection
var largesE = largestE(array);
console.log("largesE: ", largesE);
//bubble
var largestEl = largestEl(array);
console.log("largestEl: ", largestEl);
//insertion
var largestEle = largestEle(array);
console.log("largestEle: ", largestEle);
//merge sort
var largestElem = divide(array, 0, array.length - 1);
console.log("largestElem:", largestElem);
//optimal sort
var optimalApproach = largestElement(array);
console.log("optimalApproach:", optimalApproach);
