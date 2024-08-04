function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
function factorial(n) {
  let result = 1;
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
var n = 5;
console.log(factorial(n));

// Function to reverse array using an auxiliary array
// function reverse(n) {
//   let newArray = [];
//   for (let i = n.length - 1; i >= 0; i--) {
//     newArray[n.length - i - 1] = n[i];
//   }
//   return newArray;
// }

function reverse(arr) {
  let p1 = 0;
  let p2 = arr.length - 1;
  while (p1 < p2) {
    [arr[p1], arr[p2]] = [arr[p2], arr[p1]];
    p1++;
    p2--;
  }
  return arr;
}
function reverse1(arr, start, end) {
  if (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    reverse1(arr, start + 1, end - 1);
  }
  return arr;
}

var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(reverse1(n, 0, n.length - 1));
