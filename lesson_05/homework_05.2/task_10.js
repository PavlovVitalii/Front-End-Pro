const indexMaxEl = arr.indexOf(Math.max(...arr));
arr.forEach((el, i) => {
  if (indexMaxEl !== i) {
    arr[i] = 0;
  }
});
console.log(`task_10 = ${arr}\n\n`);
