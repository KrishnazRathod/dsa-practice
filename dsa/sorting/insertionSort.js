function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      [([array[j - 1], array[j]] = [array[j], array[j - 1]])];
      j--;
    }
  }
  return array;
}
var array = [3, 500, 22, 32, 4431, 12, 43, 21, 2];
console.log(insertionSort(array));
