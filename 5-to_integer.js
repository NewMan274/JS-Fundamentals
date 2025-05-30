/* const myNumber = ["boy", 5, "5"]

function numberConverter(param) {
  if (typeof(param) === Number)
    console.log(param)
  else
    console.log("Not a number")
};

console.log(numberConverter(myNumber[0]))
console.log(numberConverter(myNumber[1]))
console.log(numberConverter(myNumber[2])) */

const args = process.argv.slice(2);
const num = Number(args[0]);

if (!isNaN(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}
