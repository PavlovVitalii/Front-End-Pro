const enterUserLengtArray = Number(
  prompt("Please enter the length of the main array.")
);
const mainArray = !isNaN(enterUserLengtArray) ? new Array(enterUserLengtArray) : [];
const fillArray = function userFillArray(lengthArray, array) {
  for (let i = 0; i < lengthArray; i++) {
    const elementsInnerArray = prompt(
      `Please enter the elements of the inner array №${
        i + 1
      } separated by a space.`
    );
    if (elementsInnerArray !== null) {
      array[i] = elementsInnerArray.split(" ");
    } else {
      alert("Нou have chosen cancel the program has been stopped.");
      break;
    }
  }
};

if (!isNaN(enterUserLengtArray)) {
  fillArray(enterUserLengtArray, mainArray);
  console.log("----------3----------");
  console.log(mainArray);
}
