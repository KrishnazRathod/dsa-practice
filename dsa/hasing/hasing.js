// // Read input
// const input = `5
// 1 2 2 3 4
// 3
// 3
// 3
// 5`.split("\n");

// console.log("input: ", input);
// // Process input
// let index = 0;
// const n = parseInt(input[index++]);
// console.log("n:", n);
// const arr = input[index++].split(" ").map(Number);
// console.log("arr: ", arr);
// const hash = new Array(13).fill(0);
// console.log("hash: ", hash);

// // Precompute
// arr.forEach((num) => {
//     hash[num]++;
// });
// console.log("hash: ", hash);

// // Handle queries
// const q = parseInt(input[index++]);
// console.log("q: ", q);
// for (let i = 0; i < q; i++) {
//   const number = parseInt(input[index++]);
//   console.log("number: ", number);
//   console.log(hash[number]);
// }

// Read input from the user
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// rl.on("line", (line) => {
//   input.push(line);
// });

// rl.on("close", () => {
//   // Process input
//   let index = 0;
//   const n = parseInt(input[index++]);
//   const arr = input[index++].split(" ").map(Number);
//   const q = parseInt(input[index++]);

//   // Calculate maximum number for hash size
//   const maxNum = Math.max(...arr);

//   // Create hash table
//   const hash = new Array(maxNum + 1).fill(0);

//   // Precompute
//   arr.forEach((num) => {
//     hash[num]++;
//   });

//   // Handle queries
//   for (let i = 0; i < q; i++) {
//     const number = parseInt(input[index++]);
//     console.log(hash[number]);
//   }
// });
