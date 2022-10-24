
//task №1
//Вивести на сторінку в один рядок через кому числа від 10 до 20
let resultTask_1 = "";
for (let i = 10; i < 21; i++) {
  if (i == 20) {
    resultTask_1 += i;
    continue;
  }
  resultTask_1 += `${i}, `;
}
alert(`Числа від 10 до 20\n${resultTask_1}`);

//task №2
//Вивести квадрати чисел від 10 до 20
let resultTask_2 = "";
for (let i = 10; i < 21; i++) {
  if (i == 20) {
    resultTask_2 += i ** 2;
    continue;
  }
  resultTask_2 += `${i ** 2}, `;
}
alert(`Квадрати чисел від 10 до 20\n${resultTask_2}`);

//task №3
//Вивести таблицю множення на 7
let resultTask_3 = "";
for (let i = 1; i < 11; i++) {
  if (i == 10) {
    resultTask_3 += `7 * ${i} = ${7 * i}`;
    continue;
  }
  resultTask_3 += `7 * ${i} = ${7 * i}\n`;
}
alert(`Таблиця множення на 7\n${resultTask_3}`);

//task №4
//Знайти суму всіх цілих чисел від 1 до 15
let resultTask_4 = 0;
for (let i = 1; i < 16; i++) {
  resultTask_4 += i;
}

//task №5
//Знайти добуток усіх цілих чисел від 15 до 35
let resultTask_5 = 15;
for (let i = 15; i < 36; i++) {
  resultTask_5 *= i;
}

//task №6
//Знайти середнє арифметичне всіх цілих чисел від 1 до 500
let resultTask_6 = 0;
for (let i = 1; i <= 500; i++) {
  resultTask_6 += i;
}
resultTask_6 /= 500;

//task №7
//Вивести суму лише парних чисел в діапазоні від 30 до 80
let resultTask_7 = 0;
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    resultTask_7 += i;
  }
}
alert(`Сума парних чисел від 30 до 80\n${resultTask_7}`);

//task №8
//Вивести всі числа в діапазоні від 100 до 200 кратні 3
let resultTask_8 = "";
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    resultTask_8 += `${i}, `;
  }
}

resultTask_8 = resultTask_8.slice(0, -2);
alert(`Числа в діапазоні від 100 до 200 кратні 3\n${resultTask_8}`);

//task №9
//Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
let resultTask_9 = "";
const number = 12;
for (let i = 1; i <= number; i++) {
  if (number % i === 0 && i !== number) {
    resultTask_9 += `${i}, `;
  }
  if (i === number) {
    resultTask_9 += i;
  }
}

//task №10
//Визначити кількість його парних дільників
let resultTask_10 = 0;
for (let i = 1; i <= number; i++) {
  if (number % i === 0 && i % 2 === 0) {
    resultTask_10++;
  }
}

//task №11
//Знайти суму його парних дільників
let resultTask_11 = 0;
for (let i = 0; i <= number; i++) {
  if (number % i === 0 && i % 2 === 0) {
    resultTask_11 += i;
  }
}
alert(
`Дано натуральне число ${number}.\n
Всі дільники числа - ${resultTask_9}\n
Кількість парних дільників - ${resultTask_10}\n
Сума парних дільників - ${resultTask_11}`
);

//task №12
//Таблиця множення від 1 до 10
let resultTask_12 = "";
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    resultTask_12 += `${i}*${j} = ${i * j}\n`;
  }
  resultTask_12 += "\n";
}
console.log(resultTask_12);

