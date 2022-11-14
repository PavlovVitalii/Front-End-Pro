// На сторінці інпут та кнопка.
// При натисканні на кнопку - переходимо за посиланням, яке введено у інпут.
// Також треба реалізувати перевірку введеного значення, чи вказаний протокол http/https.
// Якщо протокол не вказаний - додаємо https

const form = document.forms.link;
const inputText = form.elements["adress"];
const btn = form.elements["button"];
console.log(inputText);
console.log(btn);
btn.addEventListener("click", openLink);

function openLink() {
  if (
    inputText.value.indexOf("http") < 0 ||
    inputText.value.indexOf("https") < 0
  ) {
    inputText.value = `https://www.${inputText.value}`;
  }

  window.open(inputText.value, "_blanck");
}
