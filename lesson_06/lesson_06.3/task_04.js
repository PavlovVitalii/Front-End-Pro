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

  const message = "No such characters were found in the entered string";
  return resultString.length === str.length ? message : resultString;
};

console.log("----------4----------");
if (enterString !== null && enterCharacter !== null) {
  console.log(deleteChar(enterString, charactersArray));
}
