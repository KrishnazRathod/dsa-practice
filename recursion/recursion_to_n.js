let count = 0;
function recusrion() {
  if (count === 5) {
    return true;
  }
  console.log(count);
  count++;
  recusrion();
}

function recusrion(i,n) {
  if (i>=n) {
    return ;
  }
  console.log(i);
  recusrion(i+1,n);
}
var n = 8;
console.log(recusrion(1,n));

function recusrion(i,n) {
  if (i<1) {
    return ;
  }
  recusrion(i-1,n);
  console.log(i);
}

var n = 8;
console.log(recusrion(n,n));
