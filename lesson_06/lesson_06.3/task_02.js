const OPERATION = "+-*/%^";
const firstNumber = prompt("Please enter first number.");
const operationSymbol = prompt("Please select operation +, -, *, /, % or ^");
const secondNumber = prompt("Please enter second number.");
const isNumber = function checkInput(enterNumber) {
  if (
    typeof Number(enterNumber) === "number" &&
    enterNumber !== null &&
    !isNaN(enterNumber) &&
    enterNumber !== ""
  ) {
    return true;
  }
  return false;
};
const isOperation = function checkInputOperation(enterOperation) {
  if (OPERATION.indexOf(enterOperation) !== -1 && enterOperation !== null) {
    return true;
  }
  return false;
};
const isValid = function dateValidation() {
  if (
    isNumber(firstNumber) &&
    isNumber(secondNumber) &&
    isOperation(operationSymbol)
  ) {
    return true;
  }
  return false;
};
const doMath = function calculateResult(x, znak, y) {
  let result = 0;
  if (znak === "+") {
    result = x + y;
  }
  if (znak === "-") {
    result = x - y;
  }
  if (znak === "*") {
    result = x * y;
  }
  if (znak === "/") {
    result = x / y;
  }
  if (znak === "%") {
    result = x % y;
  }
  if (znak === "^") {
    result = x ** y;
  }
  return result;
};

console.log("----------2----------\n");
if (isValid()) {
  console.log(
    `${firstNumber} + ${secondNumber} = ${doMath(
      Number(firstNumber),
      operationSymbol,
      Number(secondNumber)
    )}`
  );
} else {
  alert(
    "You entered incorrect data or clicked cancel. Reload the page and try again."
  );
}
