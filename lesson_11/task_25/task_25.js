// Створити програму для відображення результатів голосування.
// З наступними умовами:
// Як варіанти відповіді - смайлики. За замовчуванням, 5шт.
// Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл.
// При натисканні на смайл - під ним змінюється значення лічильника.
// Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.

const reactions = ["👍", "👎", "💚", "💩", "🤣"];

const container = document.querySelector(".container");

const reactionElements = reactions.map((reaction) => {
  const wrapper = document.createElement("div");
  const button = document.createElement("button");
  button.innerText = reaction;
  const counter = document.createElement("div");
  counter.classList.add("counter");
  counter.innerText = 0;
  wrapper.append(button, counter);

  return wrapper;
});

reactionElements.forEach((elem) => container.appendChild(elem));
container.addEventListener("click", addReaction);

function addReaction(e) {
  let reaction = e.target;
  if (reaction.closest("button")) {
    const index = reactionElements.findIndex(
      (el) => el.querySelector("button").innerText === reaction.innerText
    );

    const count = reactionElements[index].querySelector(".counter");
    count.innerText = Number(count.innerText) + 1;
  }
}
