// o{n sqaure}
function bubbleSort(array) {
  for (let i = array.length - 1; i >= 1; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (array[j] > array[j + 1]) {
        //   let temp = array[j + 1];
        //   array[j + 1] = array[j];
        //   array[j] = temp;
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}
function bubbleSort1(array) {
  for (let i = array.length - 1; i >= 1; i--) {
    let didSwap = 0;
    for (let j = 0; j <= i - 1; j++) {
      if (array[j] > array[j + 1]) {
        //   let temp = array[j + 1];
        //   array[j + 1] = array[j];
        //   array[j] = temp;
        didSwap = 1;
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
      if (didSwap === 0) {
        break;
      }
    }
  }
  return array;
}

var array = [3, 4, 22, 32, 4431, 12, 43, 21, 2];
var array1 = [1, 2, 4, 5, 6];

console.log(bubbleSort(array));
console.log(bubbleSort1(array1));
