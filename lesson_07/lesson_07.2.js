function addFunction() {
  let sum = 0;
  return function (number) {
    sum += number;
    console.log(sum);
  };
}
const sum = addFunction();
console.log("\nTask_02");
sum(3);
sum(5);
sum(20);
