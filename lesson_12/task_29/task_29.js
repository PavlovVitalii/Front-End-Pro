//Робимо на підставі дз 26.

//В праву частину з описом товару додати кнопку "купити".
//При натисканні на кнопку нижче з'являється форма оформлення замовлення з наступними полями:
//- ПІБ покупця
//- Місто (вибір зі списку декількох міст)
//- Склад Нової пошти для надсилання (числове поле)
//- Спосіб оплати: післяплата або оплата на банківську картку
//- Кількість продукції, що купується

//Реалізувати валідацію форми за допомогою JS, щоб всі поля були заповнені.
//При валідаціїї поля ПІБ видаляти зайві пробіли (за допомогою String.trim()).
//Якщо дані у формі некоректні, вивести повідомлення про це під формою.
//Дані замовлення зберегти у обʼєкті. До обʼєкту також додати властивості з даними про дату створення та суму замовлення.
//Якщо дані у формі коректні, вивести інформацію про замовлення під формою у форматі JSON.

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

container.addEventListener("click", (e) => {
  const target = e.target;
  let productsByCategory;

  if (target.closest("#categories")) {
    showProductList(productsByCategory, target);
  }

  if (target.closest("#products")) {
    showProductInfo(target, products);
  }

  if (target.closest("#buy-button")) {
    form.style.visibility = "visible";
    buyButton.style.visibility = "hidden";
  }

  if (target.closest(".continueBtn")) {
    description.style;
    validate(cities.value, userName.value, storage.value, countProducts.value);
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
  let productsList = productsUl.querySelectorAll("li");

  if (list.length > productsList.length) {
    const countIteration = list.length - productsList.length;

    for (let i = 0; i < countIteration; i++) {
      const li = document.createElement("li");
      productsUl.appendChild(li);
      console.log(productsUl.length);
    }

    productsList = productsUl.querySelectorAll("li");
  }

  productsList.forEach((el) => {
    el.innerText = "";
  });

  list.forEach((el, index) => {
    productsList[index].innerText = el.name;
  });

  productsUl.style.visibility = "visible";
}

function showProductInfo(target, listProduct) {
  const product = listProduct.find((el) => el.name === target.innerText);
  description.innerText = product.description;
  price = product.price;
  description.style.visibility = "visible";
  buyButton.style.visibility = "visible";
}

function validate(city, userName, storage, countProduct) {
  if (
    city.trim().length > 0 &&
    userName.trim().length > 0 &&
    Number(storage.trim()) > 0 &&
    Number(countProduct.trim()) > 0
  ) {
    const order = createOrder(
      cities.value,
      userName.value,
      storage.value,
      countProducts.value,
      payment
    );
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

function createOrder(city, name, storage, countProduct, payment) {
  const order = {
    userCity: city,
    userName: name,
    storage: storage,
    countProduct: countProduct,
    payment: payment[0].checked ? "payment upon receipt" : "card payment",
    date: new Date(),
    totalPrice: price * Number(countProduct),
  };

  return order;
}
