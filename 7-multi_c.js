/* const args = process.argv.slice(2);
const x = Number(args[0]);

if (Number.isInteger(x) && x > 0) {
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
} else {
  console.log("Missing number of occurrences");
} */

const args = process.argv.slice(2);
const x = Number(args[0]);

if (Number.isInteger(x) && x > 0) {
  let i = 0;
  while (i < x) {
    console.log("C is fun");
    i++;
  }
} else {
  console.log("Missing number of occurrences");
}
