//Написати функцію generateList(array), яка приймає масив із чисел та масивів чисел
//і генерує список з елементів:
//Якщо за числом йде підмасив, додавати це число, потім крапку, а потім поточний елемент
//підмасиву. Ви можете розраховувати на коректність вхідних данинх - перед підмасивом обовʼязково
//має бути число.

const listOfLists = [1, 2, [1, 2, 3], 3, 4, [1, 2, [1, 2, 3]], 5];
const ssss = [1, 2, 3];
const container = document.querySelector(".container");

function generateList(array, parent, inputNumber = "") {
  const newUl = document.createElement("ul");
  parent.appendChild(newUl);

  let number = inputNumber;

  array.forEach((el) => {
    
    if (Array.isArray(el)) {
      generateList(el, newUl, number);
    }

    if (!Array.isArray(el)) {
      const newLi = document.createElement("li");
      number = el;

      if (inputNumber === "") {
        newLi.innerText = el;
      } else {
        newLi.innerText = `${inputNumber}.${el}`;
        number = newLi.innerText;
      }

      newUl.appendChild(newLi);
    }
  });
}
generateList(listOfLists, container);
