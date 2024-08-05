function pattern1(n) {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      pattern += "* ";
    }
    pattern += "\n";
  }
  return pattern;
}
function pattern2(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      pattern += "* ";
    }
    pattern += "\n";
  }
  return pattern;
}
function pattern3(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += j;
    }
    pattern += "\n";
  }
  return pattern;
}
function pattern4(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += i;
    }
    pattern += "\n";
  }
  return pattern;
}
function pattern5(n) {
  let pattern = "";
  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      pattern += "* ";
    }
    pattern += "\n";
  }
  return pattern;
}
function pattern6(n) {
  let pattern = "";
  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      pattern += j;
    }
    pattern += "\n";
  }
  return pattern;
}
function pattern7(n) {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      pattern += " ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      pattern += "*";
    }
    for (let l = 0; l < n - i - 1; l++) {
      pattern += " ";
    }
    pattern += "\n";
  }
  return pattern;
}
function pattern8(n) {
  let erectpattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      erectpattern += " ";
    }
    for (let k = 0; k < 2 * n - (2 * i + 1); k++) {
      erectpattern += "*";
    }
    for (let l = 0; l < i; l++) {
      erectpattern += " ";
    }
    erectpattern += "\n";
  }
  return erectpattern;
}
function pattern9(n) {
  let erectpattern = "";
  let invertpattern = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      erectpattern += " ";
    }
    for (let k = 0; k < 2 * n - (2 * i + 1); k++) {
      erectpattern += "*";
    }
    for (let l = 0; l < i; l++) {
      erectpattern += " ";
    }
    erectpattern += "\n";
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      invertpattern += " ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      invertpattern += "*";
    }
    for (let l = 0; l < n - i - 1; l++) {
      invertpattern += " ";
    }
    invertpattern += "\n";
  }
  return invertpattern + erectpattern;
}
function pattern10(n) {
  let pattren = "";
  for (let i = 1; i <= 2 * n - 1; i++) {
    let star = i;
    if (i > n) {
      star = 2 * n - i;
    } 
    for (let j = 1; j <= star; j++) {
      pattren += "* ";
    }
    pattren += "\n";
  }
  return pattren;
}
function pattern11(n) {
  let pattern = "";
  let number = 1;
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      number = 1;
    }
    for (let j = 0; j <= i; j++) {
      pattern += number;
      number = 1 - number;
    }
    pattern += "\n";
  }
  return pattern;
}
function pattern12(n) {
  let pattern = "";
  let space = 2 * (n - 1);
  for (let i = 1; i <= n; i++) {
    for (let k = 1; k <= i; k++) {
      pattern += k;
    }
    for (let j = 1; j <= space; j++) {
      pattern += " ";
    }
    for (let l = i; l >= 1; l--) {
      pattern += l;
    }
    pattern += "\n";
    space -= 2;
  }
  return pattern;
}
function pattern13(n) {
  let pattern1 = "";
  let pattern2 = "";
  let space = 2 * (n - 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      pattern1 += "*";
    }
    for (let k = 0; k < 2 * i; k++) {
      pattern1 += " ";
    }
    for (let l = 0; l < n - i; l++) {
      pattern1 += "*";
    }
    pattern1 += "\n";
  }
  for (let m = 0; m < n; m++) {
    for (let n = 0; n < m + 1; n++) {
      pattern2 += "*";
    }
    for (let o = 0; o < 2 * (n - m) - 2; o++) {
      pattern2 += " ";
    }
    for (let p = 0; p < m + 1; p++) {
      pattern2 += "*";
    }
    pattern2 += "\n";
  }
  return pattern1 + pattern2;
}
function pattern14(n) {
  let pattern = "";
  let space = 2 * (n - 1);
  for (let i = 1; i <= n; i++) {
    for (let k = 1; k <= i; k++) {
      pattern += k;
    }
    for (let j = 1; j <= space; j++) {
      pattern += " ";
    }
    for (let l = i; l >= 1; l--) {
      pattern += l;
    }
    pattern += "\n";
    space -= 2;
  }
  return pattern;
}
function pattern15(n) {
  let pattern = "";
  let spaces = 2 * n - 2;
  for (let i = 1; i <= 2 * n - 1; i++) {
    let star = i;
    if (i > n) {
      star = 2 * n - i;
    }
    for (let j = 1; j <= star; j++) {
      pattern += "*";
    }
    for (let k = 1; k <= spaces; k++) {
      pattern += " ";
    }
    for (let l = 1; l <= star; l++) {
      pattern += "*";
    }
    pattern += "\n";
    if (i < n) {
      spaces -= 2;
    } else {
      spaces += 2;
    }
  }
  return pattern;
}
function pattern16(n) {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < n; k++) {
      if (i === 0 || k === 0 || k === n - 1 || i === n - 1) pattern += "*";
    }
    pattern += "\n";
  }
  return pattern;
}
var n = 5;
console.log(pattern1(n));
console.log(pattern2(n));
console.log(pattern3(n));
console.log(pattern4(n));
console.log(pattern5(n));
console.log(pattern6(n));
console.log(pattern7(n));
console.log(pattern8(n));
console.log(pattern9(n));
console.log(pattern10(n));
console.log(pattern11(n));
console.log(pattern12(n));
console.log(pattern13(n));
console.log(pattern14(n));
console.log(pattern15(n));
console.log(pattern16(n));
