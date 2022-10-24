let sum_2 = 0;
arr.forEach((el) => {
  if (el % 0 !== 0) {
    sum_2 += el;
  }
});
console.log(`task_8 = ${sum_2}`);
