//Вивести на сторінку таблицю 10 × 10, заповнену числами 
//від 1 до 100 (таблиця створюється за допомогою JavaScript).

const container = document.querySelector(".container");
const table = document.createElement("table");
let counter = 1;

for (let i = 0; i < 10; i++) {
  const tr = document.createElement("tr");
  for (let j = 0; j < 10; j++) {
    const td = document.createElement("td");
    td.textContent = counter;
    counter += 1;
    tr.appendChild(td);
  }

  table.appendChild(tr);
}
container.appendChild(table);
