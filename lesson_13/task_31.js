/*Модифікувати інтернет-магазин таким чином, щоб була можливість переглянути всі збережені замовлення навіть після 
оновлення сторінки (використати localStorage).

На сторінці спочатку під списком категорій відображається також кнопка “Мої замовлення”.

При кліку на “Мої замовлення”:

- замість категорій відображається список усіх замовлень користувача (дата та сума)
- при кліку на замовлення в середній частині відображаються деталі замовлення.
- в правій частині відображаються дані про товар з замовлення

Також реалізувати можливість видалення замовлення зі списку. 
Потрібно реалізувати можливість видаляти замовлення по одному,
 тобто напроти кожного рядку зі збереженим заказом повинна бути кнопка для видалення цього рядку.
  (Підказка - можна використовувати значення `Date.now()` на момент збереження замовлення у якості 
  айдішника замовлення. Потім при виведенні списка замовлень цей айдішник додати як дата атрибут. 
  Таким чином можна буде обробляти кліки по кнопках видалення рідків з замовленнями)
*/
const categories = [
  {
    id: 1,
    category: "Toys",
  },
  {
    id: 2,
    category: "Sports",
  },
  {
    id: 3,
    category: "Toys",
  },
  {
    id: 4,
    category: "Grocery",
  },
  {
    id: 5,
    category: "Garden",
  },
];

const products = [
  {
    id: 1,
    category_id: 2,
    name: "Eggplant - Asian",
    price: 5.6,
    description:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  },
  {
    id: 2,
    category_id: 5,
    name: "Jagermeister",
    price: 7.7,
    description:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  },
  {
    id: 3,
    category_id: 2,
    name: "Wine - Lou Black Shiraz",
    price: 3.6,
    description:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
  },

  {
    id: 4,
    category_id: 3,
    name: "Beef - Ox Tongue",
    price: 8.5,
    description:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    id: 5,
    category_id: 3,
    name: "Beef - Bones, Marrow",
    price: 10,
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    id: 6,
    category_id: 2,
    name: "Appetizer - Shrimp Puff",
    price: 9.4,
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
  },
  {
    id: 7,
    category_id: 4,
    name: "Appetizer - Shrimp Puff",
    price: 6.6,
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  {
    id: 8,
    category_id: 1,
    name: "Ecolab - Ster Bac",
    price: 8.1,
    description: "Integer ac leo. Pellentesque ultrices mattis odio.",
  },
  {
    id: 9,
    category_id: 4,
    name: "Vegetable - Base",
    price: 6.3,
    description:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
  },
  {
    id: 10,
    category_id: 3,
    name: "Flour - Corn, Fine",
    price: 11.5,
    description:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
  },
  {
    id: 11,
    category_id: 1,
    name: "Beer - Guiness",
    price: 5.2,
    description:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 12,
    category_id: 4,
    name: "Napkin White",
    price: 4.9,
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  },
  {
    id: 13,
    category_id: 2,
    name: "Oil - Truffle, White",
    price: 4.1,
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    id: 14,
    category_id: 5,
    name: "Wine - Puligny Montrachet A.",
    price: 12.3,
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
  },
  {
    id: 15,
    category_id: 5,
    name: "Tomatoes Tear Drop",
    price: 16,
    description:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
  },
];

const container = document.querySelector(".container");
const productsUl = document.querySelector("#products");
const description = document.querySelector("#description");
const buyButton = document.querySelector("#buy-button");
const form = document.querySelector(".form");
const cities = document.querySelector("select");
const userName = document.querySelector("input[name = userName]");
const storage = document.querySelector("input[name = storage]");
const countProducts = document.querySelector("input[name = count]");
const continueBtn = document.querySelector(".continue");
const payment = document.querySelectorAll("input[type = radio]");
let price = 0;
let productId = "";

container.addEventListener("click", (e) => {
  const target = e.target;
  let productsByCategory;

  if (target.closest("#categories")) {
    showProductList(productsByCategory, target);
  }

  if (target.closest("#products")) {
    document.querySelector(".infoOrder").innerHTML = "";
    showProductInfo(target, products);
  }

  if (target.closest("#buy-button")) {
    form.style.display = "block";
    buyButton.style.display = "none";
    description.style.display = "none";
  }

  if (target.closest(".continueBtn")) {
    validate(cities.value, userName.value, storage.value, countProducts.value);
    returnInitialItateForm();
  }

  if (target.closest(".my_orders")) {
    if (createListOrders().length > 0) {
      document.querySelector("#categories").innerHTML = "";
      productsUl.innerHTML = "";
      document.querySelector(".info").innerHTML = "";
      form.style.display = "none";
      productsUl.id = "info_order";
      document.querySelector("#categories").classList.add("order_list");
      createLiWithOrders(createListOrders());
    }
  }

  if (target.closest(".order_list")) {
    if (!target.closest(".delite")) {
      showOrderInfo(target, createListOrders());
    } else {
      deliteOrder(target, createListOrders());
    }
  }
});

function createArrayByCategory(categoryId) {
  const arrayCategory = products.filter((el) => {
    return el.category_id === categoryId;
  });
  return arrayCategory;
}

function showProductList(list, target) {
  list = createArrayByCategory(Number(target.dataset.categoryId));
  productsUl.innerHTML = "";

  list.forEach((el) => {
    const li = document.createElement("li");
    li.innerText = el.name;
    productsUl.appendChild(li);
  });

  productsUl.style.visibility = "visible";
}

function showProductInfo(target, listProduct) {
  const product = listProduct.find((el) => el.name === target.innerText);
  description.innerText = product.description;
  price = product.price;
  productId = product.id;
  buyButton.style.visibility = "visible";
  description.style.visibility = "visible";
}

function validate(city, name, storage, countProduct) {
  if (
    city.length > 0 &&
    name.trim().length > 0 &&
    Number(storage) > 0 &&
    Number(countProduct) > 0
  ) {
    const order = createOrder(
      cities.value,
      userName.value,
      storage.value,
      countProducts.value,
      payment,
      productId
    );

    localStorage.setItem(`${order.orderId}`, JSON.stringify(order));
    document.querySelector(".massege").style.visibility = "hidden";
    form.style.display = "none";
    document.querySelector(".infoOrder").innerHTML = `<pre>${JSON.stringify(
      order,
      null,
      4
    )}<pre>`;
  } else {
    document.querySelector(".massege").style.visibility = "visible";
  }
}

function createOrder(city, name, storage, countProduct, payment, productId) {
  const order = {
    productId: productId,
    orderId: Date.now(),
    userCity: city,
    userName: name,
    storage: storage,
    countProduct: countProduct,
    payment: payment[0].checked ? "payment upon receipt" : "card payment",
    date: `${new Date().toDateString()}`,
    totalPrice: price * Number(countProduct),
  };

  return order;
}

function returnInitialItateForm() {
  cities.selectedIndex = 0;
  userName.value = "";
  storage.value = "";
  countProducts.value = "";
  payment[0].checked = "checked";
}

function createListOrders() {
  const lastIndex = localStorage.length;
  const orderList = [];
  for (let i = 0; i < lastIndex; i++) {
    const key = localStorage.key(i);
    const item = localStorage.getItem(key);
    if (item.indexOf("orderId") !== -1) {
      orderList.push(JSON.parse(item));
    }
  }
  return orderList;
}

function createLiWithOrders(orders) {
  orders.forEach((el) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "X";
    btn.classList.add("delite");
    btn.dataset.orderId = el.orderId;
    li.dataset.orderId = el.orderId;
    li.innerText = `Date: ${el.date}.
    TotalPrice: ${el.totalPrice}`;
    li.appendChild(btn);
    document.querySelector(".order_list").appendChild(li);
  });
}

function showOrderInfo(target, orderList) {
  productsUl.innerHTML = "";
  const li = document.createElement("li");
  const order = orderList.find(
    (el) => el.orderId === Number(target.dataset.orderId)
  );
  const product = products.find((el) => el.id === order.productId);
  li.innerText = `${JSON.stringify(order, null, 4)}`;
  productsUl.appendChild(li);
  document.querySelector(".info").innerText = product.description;
  document.querySelector(".info").style.width = "30vw";
  document.querySelector(".info").style.backgroundColor = "beige";
}

function deliteOrder(target, orderList) {
  if (orderList.length !== 0) {
    orderList.forEach((el) => {
      if (el.orderId === Number(target.dataset.orderId)) {
        localStorage.removeItem(Number(target.dataset.orderId));
        document
          .querySelector(
            `li[data-order-id = "${Number(target.dataset.orderId)}"]`
          )
          .remove();
        document.querySelector(".info").remove();
      }
    });
  }
}
