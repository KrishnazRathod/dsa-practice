var array = [3, 4, 22, 32, 4431, 12, 43, 21, 2];

for (let i = 0; i <= array.length - 2; i++) {
  let min = i;
  console.log("min:", min);
  for (let j = i; j <= array.length - 1; j++) {
    if (array[j] < array[min]) {
      min = j;
    }
    [array[i], array[min]] = [array[min], array[i]];
    // let temp = array[min];
    // array[min] = array[i];
    // array[i] = temp;
  }
}

console.log(array);
