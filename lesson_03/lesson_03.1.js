const operation = prompt(
  "Please enter operation add, sub, mult or div."
).toLowerCase();
const firstNumber = Number(prompt("Please enter first number."));
const secondNumber = Number(prompt("Please enter second number."));

if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
  switch (operation) {
    case "add":
      alert(`${firstNumber}+${secondNumber}=${firstNumber + secondNumber}`);
      break;
    case "sub":
        alert(`${firstNumber}-${secondNumber}=${firstNumber - secondNumber}`);
      break;
    case "mult":
        alert(`${firstNumber}*${secondNumber}=${firstNumber * secondNumber}`);
      break;
    case "div":
        alert(`${firstNumber}/${secondNumber}=${firstNumber / secondNumber}`);
      break;
    default:
      alert(
        "Invalid input. Please reload the page and enter corect operation add, sub, mult or div."
      );
  }
} else {
  alert("Invalid input. Please reload the page and enter corect number.");
}
