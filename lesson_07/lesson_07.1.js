function pow(num, degree) {
  if (degree === 1) {
    return 1;
  }
  return num * pow(num, degree - 1);
}
console.log("Task_01");
console.log(pow(3, 3));
