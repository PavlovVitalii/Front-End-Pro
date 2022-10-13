const lenghArray = Number(prompt("Please enter array length."));
const resultArray = new Array(lenghArray);
const elementsForArray = prompt(
  "Please enter the elements of the array separated by a space."
).trim();
let arrElem = elementsForArray.split(" ");
let bool = true;

while (bool) {
  if (arrElem.length > lenghArray && arrElem !== null) {
    arrElem = prompt(
      "You entered too many elements, the number of elements must be less than the array. Try again or click cancel."
    )
      .trim()
      .split(" ");
  } else {
    bool = false;
  }
}

arrElem.forEach((el, i) => {
  resultArray[i] = el;
});
console.log(resultArray);
resultArray.splice(1, 2);
console.log(resultArray);
