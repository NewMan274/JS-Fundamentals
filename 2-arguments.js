/* const myVar0 = () => {
  console.log("boy")
};

const myVar1 = () => {
  if (2 < 5)
    console.log("yes")
};

const myVar2 = () => {
  if (2 < 5)
    console.log('yess')
  else if (5 > 2)
    console.log ('yessir')
};

function argumetometer(param) {
  if (param)
} */

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
