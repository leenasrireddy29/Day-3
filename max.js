let x = Number(prompt("Enter a number: "));
let y = Number(prompt("Enter a number: "));
let z = Number(prompt("Enter a number: "));
if (x > y && x > z) {
  console.log("x is maximum");
} else if (y > x && y > z) {
  console.log("y is maximum");
} else if (z > x && z > y) {
  console.log("z is maximum");
} else if (x == y && x == z) {
  console.log("All are equal");
} else if (x == y && x > z) {
  console.log("x and y are equal and maximum");
} else if (x == z && x > y) {
  console.log("x and z are equal and maximum");
} else if (y == z && y > x) {
  console.log("y and z are equal and maximum");
} else {
  console.log("Invalid");
}