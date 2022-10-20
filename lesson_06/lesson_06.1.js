const array = [1, 2, 3, 4, 5, 6, 5, 5, 5];
const removeFunction = function removeElement(array, element) {
  for (let i = array.length; i >= 0; i--) {
    if (array[i] === element) {
      array.splice(i, 1);
    }
  }
};

removeFunction(array, 5);
console.log('Task 6.1');

