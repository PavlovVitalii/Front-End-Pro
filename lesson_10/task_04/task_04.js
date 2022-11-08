// Пишемо свій слайдер зображень.
// На сторінці є зображення та кнопки Next, Prev з боків від зображення.
// При кліку на Next - показуємо наступне зображення.
// При кліку на Prev - попереднє.
// При досягненні останнього зображення - ховати кнопку Next.
// Аналогічно з першим зображенням і кнопкою Prev.

const img = document.querySelector("img");

const butttons = document.getElementsByTagName("button");
const prevButtton = butttons[0];
const nextButton = butttons[1];
const ArrayImageSrc = [
  "./img/dog1.jpeg",
  "./img/dog2.jpeg",
  "./img/dog3.jpeg",
  "./img/dog4.jpeg",
  "./img/dog5.jpeg",
  "./img/dog6.jpeg",
];
let index = 0;

function hideButton(index) {
  if (index === 0) {
    prevButtton.style.visibility = "hidden";
  }

  if (index === ArrayImageSrc.length - 1) {
    nextButton.style.visibility = "hidden";
  }
}

function showButton(index) {
  if (index !== 0) {
    prevButtton.style.visibility = "visible";
  }

  if (index !== ArrayImageSrc.length - 1) {
    nextButton.style.visibility = "visible";
  }
}

hideButton(index);
showButton(index);

prevButtton.addEventListener("click", () => {
  index -= 1;
  hideButton(index);
  showButton(index);
  img.src = ArrayImageSrc[index];
});

nextButton.addEventListener("click", () => {
  index += 1;
  hideButton(index);
  showButton(index);
  img.src = ArrayImageSrc[index];
});
