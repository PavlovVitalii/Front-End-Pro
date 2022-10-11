const YEAR = 2022;
const yearOfBirth = prompt("Введіть будь ласка рік народження.");
const city =
  prompt("Введіть будь ласка ваше місто.") ??
  "Шкода, що Ви не захотіли ввести своє місто.";
const favoriteSport =
  prompt("Введіть будь ласка улюбленний вид спорту.") ??
  "Шкода, що Ви не захотіли ввести свій улюбленний вид спорту.";
const age =
  yearOfBirth !== null
    ? YEAR - Number(yearOfBirth)
    : "Шкода, що Ви не захотіли ввести рік народження.";

alert(`Ваш вік: ${age}\n${checkCity(city)}\n${checkSport(favoriteSport)}`);

function checkCity(city) {
  if (city.toLowerCase() === "київ") {
    return "Ти живеш у столиці України.";
  }
  if (city.toLowerCase() === "вашингтон") {
    return "Ти живеш у столиці Америки.";
  }
  if (city.toLowerCase() === "Лондон") {
    return "Ти живеш у столиці Англії.";
  }
  return `Ти живеш у місті: ${city}`;
}

function checkSport(sport) {
  if (sport.toLowerCase() === "футбол") {
    return "Круто! Хочеш стати Ліонелем Мессі?";
  }
  if (sport.toLowerCase() === "бокс") {
    return "Круто! Хочеш стати Олександром Усіком?";
  }
  if (sport.toLowerCase() === "баскетбол") {
    return "Круто! Хочеш стати Майклом Джорданом?";
  }

  return `Ваш улюбленний вид спорту: ${sport}`;
}
