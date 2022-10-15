const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]

function removeElement(array, element) {
  array.forEach((el, i) => {
    if (el === element) {
      array.splice(i, 1);
    }
  });
}
