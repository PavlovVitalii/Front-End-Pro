const arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];
let sum = 0;
let count = 0;
arr.forEach((el) => {
  if (el > 0) {
    sum += el;
    count++;
  }
});
console.log("Lesson_05.2");
console.log(`task_1\nsum = ${sum}\ncount=${count}`);
