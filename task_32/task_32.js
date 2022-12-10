const btn = document.querySelector("button");
const input = document.querySelector("input");
const popUpBtn = document.querySelector(".pop_up_button");
const post = document.querySelector(".post");
const coments = document.querySelector(".coments");
const popUp = document.querySelector(".pop_up");
const comentsButton = document.querySelector(".coments_btn");
let numberPost;

btn.addEventListener("click", () => {
  numberPost = input.value;
  if (input.value > 0 && input.value < 101) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${numberPost}`)
      .then((response) => response.json())
      .then((json) => {
        post.textContent = json.body;
        popUp.style.visibility = "visible";
      })
      .catch((err) => alert(err));
  }
});

popUpBtn.addEventListener("click", () => {
  popUp.style.visibility = "hidden";
  comentsButton.style.display = "block";
  coments.style.display = "none";
});

comentsButton.addEventListener("click", () => {
  comentsButton.style.display = "none";
  coments.style.display = "block";
  fetch(`https://jsonplaceholder.typicode.com/comments?postId=${numberPost}`)
    .then((response) => response.json())
    .then((json) => {
      json.forEach((element) => {
        coments.innerHTML += `<div class="coment">Name: ${element.name}<br>Coment: ${element.body}</div>`;
      });
    })
    .catch((err) => alert(err));
});
