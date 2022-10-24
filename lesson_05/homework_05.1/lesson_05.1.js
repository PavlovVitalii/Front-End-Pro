const lenghArray = Number(prompt("Please enter array length."));
const resultArray = new Array(lenghArray);
const elementsForArray = prompt(
  "Please enter the elements of the array separated by a space."
);
let arrElem =
  elementsForArray === null
    ? new Array(length)
    : elementsForArray.trim().split(" ");
let isSuccess = true;

while (isSuccess) {
  if (arrElem.length > lenghArray) {
    arrElem = prompt(
      "You entered too many elements, the number of elements must be less than the array. Try again or click cancel."
    );
    arrElem = arrElem === null ? new Array(length) : arrElem.trim().split(" ");
  } else {
    isSuccess = false;
  }
}

arrElem.forEach((el, i) => {
  resultArray[i] = Number(el);
});
resultArray.sort((a, b) => a - b);

console.log("Lasson_05.1");
console.log(resultArray);
resultArray.splice(1, 3);
console.log(resultArray);
console.log("\n");
