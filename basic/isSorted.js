function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) return false;
    }
  }

  return true;
}
function isSort(array) {
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      return false;
    }
  }
  return true;
}
const arr = [1, 2, 5, 6, 4, 5];
const ans = isSorted(arr);
if (ans) console.log("True");
else console.log("False");

var isSorted = isSort(arr);
console.log("isSorted:", isSorted);
