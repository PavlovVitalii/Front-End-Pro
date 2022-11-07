const input = document.querySelector(".input");
const ghost = document.querySelector(".ghost");

input.addEventListener("focus", () => {
  ghost.style.visibility = "visible";
});

input.addEventListener("blur", () => {
  ghost.style.visibility = "hidden";
});
