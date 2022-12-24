import { products } from "./data.js";

let id = history.state;
let product = products.find((item) => item.id === Number(id));

document.querySelector(".product__title").innerHTML = product.name;
document.querySelector(".product__price").innerHTML = `${product.price} $`;
document.querySelector(".product__btn").disabled = !product.isActive;

