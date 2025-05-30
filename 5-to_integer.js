const myNumber = ["boy", 5, "5"]

function numberConverter(param) {
  if (typeof(param) === Number)
    console.log(param)
  else
    console.log("Not a number")
};

console.log(numberConverter(myNumber[0]))
console.log(numberConverter(myNumber[1]))
console.log(numberConverter(myNumber[2]))