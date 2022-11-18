//Реалізовуємо форму для реєстрації.
//Поля:
//- Ім'я, Прізвище (Текстові поля)
//- Дата народження (Текстове поле)
//- Стать (radio)
//- Місто (select)
//- Адреса (textarea)
//- Мови, якими володіє (checkbox)
//- Кнопка “Зберегти”
//За натисканням на кнопку замість форми повинна виводитися “таблиця” з даними,
//які ввів користувач.

const userNameFiled = document.querySelector("#name");
const dateOfBirthFiled = document.querySelector("#date");
const genderRadio = document.getElementsByName("gender");
const citySelect = document.getElementById("cities-slect");
const addresssText = document.getElementById("address");
const languageCheck = document.querySelectorAll("#checkbox");
const button = document.querySelector("button");
const table = document.querySelector("table");
const container = document.querySelector(".container");

button.addEventListener("click", () => {
const user = createUser();
createTable(user);
  container.style.display = "none";
  table.style.display = "table";
});

function createUser() {
  return {
    userName: userNameFiled.value,
    userBirth: dateOfBirthFiled.value,
    userGender: selectGender(genderRadio),
    userCity: selectCity(citySelect),
    userAddress: addresssText.value,
    userLanguage: selectLenguage(languageCheck),
  };
}

function selectGender(gender) {
  if (gender[0].checked) {
    return gender[0].value;
  }
  return gender[1].value;
}

function selectCity(citys) {
  const index = citys.selectedIndex;
  return citys[index].value;
}

function selectLenguage(lenguages) {
  const selectedLenguage = [];
  lenguages.forEach((element) => {
    if (element.checked) {
      selectedLenguage.push(element.value);
    }
  });
  return selectedLenguage;
}

function createTable(user) {
  const tr = document.createElement("tr");

  Object.values(user).forEach((el) => {
    const td = document.createElement("td");
    if (Array.isArray(el)) {
      td.innerText = el.join();
    } else {
      td.innerText = el;
    }
    tr.appendChild(td);
  });

  table.appendChild(tr);
}

