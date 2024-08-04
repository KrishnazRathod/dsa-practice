//
function conquer1(array1, si, mid, ei) {
  let id1 = si,
  id2 = mid + 1,
  x = 0,
  newArray = [];
  while (id1 <= mid && id2 <= ei) {
    if (array1[id1] <= array1[id2]) {
      newArray[x] = array1[id1];
      id1++;
    } else {
      newArray[x] = array1[id2];
      id2++;
    }
    x++;
  }
  while (id1 <= mid) {
    newArray[x] = array1[id1];
    id1++;
    x++;
  }
  while (id2 <= ei) {
    newArray[x] = array1[id2];
    id2++;
    x++;
  }
  for (let i = 0; i < newArray.length; i++) {
    array1[si + i] = newArray[i];
  }
}

function divide1(array1, si, ei) {
  if (si >= ei) {
    return;
  }
  let mid = Math.floor(si + (ei - si) / 2);
  divide1(array1, si, mid);
  divide1(array1, mid + 1, ei);
  conquer1(array1, si, mid, ei);
}

var array1 = [3, 4, 2, 1, 12, 3, 4];
divide1(array1, 0, array1.length - 1);
console.log("array1:", array1);
  