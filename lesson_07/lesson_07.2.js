function addFunction() {
  let sum = 0;
  return function (number) {
    return (sum += number);
  }
}
const sum = addFunction();
console.log("\nTask_02");
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
