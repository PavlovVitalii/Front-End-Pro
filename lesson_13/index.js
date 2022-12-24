import { products } from "./data.js";

const productList = document.querySelector(".products");
showProducts(products);

document.querySelector(".products").addEventListener("click", (e) => {
  history.pushState(e.target.id, "product", "./product.html");
  window.location.reload();
});

window.addEventListener('popstate', () =>{
    history.forward();
  });

document.querySelector(".product__btn").addEventListener("click", (e) => {
  e.stopPropagation();
});

export function createProductItem(productName, productPrice, productId, productIsActive) {
  const item = document.createElement("div");
  item.classList.add("product");
  item.setAttribute("id", productId);
  const title = document.createElement("div");
  title.classList.add("product__title");
  title.innerText = productName;
  item.appendChild(title);
  const image = document.createElement("div");
  image.classList.add("product__image");
  item.appendChild(image);
  const price = document.createElement("div");
  price.classList.add("product__price");
  price.innerText = `${productPrice} $`;
  item.appendChild(price);
  const button = document.createElement("button");
  button.classList.add("product__btn");
  button.innerText = "Add to cart";
  button.disabled = !productIsActive;
  item.appendChild(button);
  return item;
}

function showProducts(products) {
  if (products.length) {
    products.forEach((element) => {
      const item = createProductItem(element.name, element.price, element.id, element.isActive);
      productList.appendChild(item);
    });
  } else {
    productList.innerHTML = "No products !";
  }
}


customElements.define("my-element", MyCustomElement);
let myEl = new MyCustomElement("div").addClass("my-class").setMyAttribute("id","id").removeMyAttribute("id");
console.log(myEl);