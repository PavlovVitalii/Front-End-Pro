const enterString = prompt("Please enter string.");
const enterCharacter = prompt(
  "Please enter characters to delete separated by a space."
);
const charactersArray =
  enterCharacter === null ? [] : enterCharacter.split(" ");
const deleteChar = function deleteCharacter(str, char) {
  let resultString = str;
  char.forEach((el) => {
    if (resultString.indexOf(el) !== -1) {
      resultString = str.replace(el, "");
    }
  });

  if (resultString.length < str.length) {
    return resultString;
  }
};

if (deleteChar === undefined) {
}
console.log("----------4----------");
if (enterString !== null && enterCharacter !== null) {
  console.log(
    deleteChar(enterString, charactersArray) === undefined
      ? "No such characters were found in the entered string"
      : deleteChar(enterString, charactersArray)
  );
}

