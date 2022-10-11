const firstNumber = Number(prompt("Plese enter first number."));
const secondNumber = Number(prompt("Plese enter second number."));
const thirdNumber = Number(prompt("Plese enter third number."));
let result = 0;

if (!isNaN(firstNumber) && !isNaN(secondNumber) && !isNaN(thirdNumber)) {
  console.log("!!!!");
  result = (firstNumber + secondNumber + thirdNumber) / 3;
  alert(`result = ${result}`);
} else {
  alert("Invalid input. Please reload the page and enter corect number.");
}
