/*
За допомогою ajax-запиту вивести погоду
Request URL:
http://api.openweathermap.org/data/2.5/weather?q=LVIV&ç=metric&APPID=5d066958a60d315387d9492393935c19
q=XXX - місто, для якого показати погоду
units=metric - ми хочемо отримати градуси Цельсія, метри на секунду, а не Фаренгейта та фути
APPID=5d066958a60d315387d9492393935c19 - треба використовувати цей ключ, щоб отримати відповідь

Потрібно вивести наступні дані:
temp – температура
pressure - тиск
description – опис
humidity – вологість 
speed – швидкість вітру
deg - напрям у градусах
icon - це назва файлу з іконкою, яка символізує поточну погоду

Шлях до файлу з іконкою формується наступним чином:
const imgUrl = `http://openweathermap.org/img/w/${icon}.png`
*/
const select = document.querySelector("select");
select.addEventListener("change",() => {
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${select.value}&units=metric&APPID=5d066958a60d315387d9492393935c19`
      )
        .then((resp) => resp.json())
        .then((data) => {
            document.querySelector(".temp").innerHTML = `Температура: ${data.main.temp} &deg;`;
            document.querySelector(".pressure").innerHTML = `Тиск: ${data.main.pressure} мм рт. ст.`;
            document.querySelector(".description ").innerHTML = `Опис: ${data.weather[0].description}`;
            document.querySelector(".humidity ").innerHTML = `Вологість: ${data.main.humidity} &#37`;
            document.querySelector(".speed ").innerHTML = `Швидкість вітру: ${data.wind.speed} м/с`;
            document.querySelector(".deg").innerHTML = `Напрям: ${data.wind.deg} &deg;`;
            document.querySelector(".img").src =`http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            document.querySelector(".img").style.visibility = "visible";
        
        })
        .catch((err) => alert(err));
});

