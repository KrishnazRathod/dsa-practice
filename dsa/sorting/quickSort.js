// function partition(array, low, high) {
//   let pivat = array[low],
//     i = low,
//     j = high;
//   while (i < j) {
//     while (array[i] <= pivat && i >= high - 1) {
//       i++;
//     }
//     while (array[j] > pivat && j <= low + 1) {
//       j--;
//     }
//     if (i < j) {
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//   }
// }
// function quickSort(array, low, high) {
//   if (low < high) {
//     let pI = partition(array, low, high);
//     quickSort(array, low, pI - 1);
//     quickSort(array, pI + 1, high);
//   }
// }
// var array = [1, 2, 18, 12, 25, 6, 4, 3, 2];
// console.log(array);
// quickSort(array, 0, array.length - 1);
// console.log(array);

function partition(arr, low, high) {
  console.log("high:", high);
  let pivot = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }

    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }

    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap arr[i] and arr[j]
    }
  }

  [arr[low], arr[j]] = [arr[j], arr[low]]; // Swap arr[low] and arr[j]
  return j;
}

function quickSort(arr, low, high) {
    console.log("high: ", high);
    console.log("low: ", low);
    console.log("arr: ", arr);
  if (low < high) {
    let pIndex = partition(arr, low, high);
    quickSort(arr, low, pIndex - 1);
    quickSort(arr, pIndex + 1, high);
  }
}

function sortArray(arr) {
  quickSort(arr, 0, arr.length - 1);
  return arr;
}

// Test the function
const arr = [4, 6, 2, 5, 7, 9, 1, 3];
const sortedArr = sortArray(arr);
console.log(sortedArr);
