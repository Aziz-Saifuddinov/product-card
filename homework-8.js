import{ productCards } from "./productCards.js"; 

// 3. По аналогии из лекции — создать и реализовать шаблон для продуктовых карточек.

const productTemplate = document.getElementById('product-template');
const productList = document.getElementById('product-list');

function outputProductCards(productCards) {
  productCards.forEach(product => {
    const productClone = productTemplate.content.cloneNode(true);
    productClone.querySelector('.product-img').src = `./images/${product.img}.svg`;
    productClone.querySelector('.product-category').textContent = product.category;
    productClone.querySelector('.product-name').textContent = product.name;
    productClone.querySelector('.product-description').textContent = product.description;
    productClone.querySelector('.product-compound').innerHTML = product.compound.map(item => `<li>${item}</li>`).join("");
    productClone.querySelector('.cost-product').textContent = product.price + " \u20BD";
    productList.appendChild(productClone);
  })
};

// 4. Используя метод .reduce(), получить строку, которая состоит из названий продуктовых карточек, разделенных точкой с запятой

const getProductNames = productCards.reduce((accum, productCard) => [...accum, productCard.name], []).join('; ');
console.log(getProductNames);

// 5. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

const productDescription = productCards.reduce((accum, product) => [...accum, {[product.name]: product.description}], []);
console.log(productDescription);

// 6*. Реализовать функцию, которая при старте нашей страницы выводит сообщение с текстом, мол "Сколько карточек отобразить? От 1 до 5"
// и в зависимости от результата - будет выводить это количество. Должна быть защита от введенных других значений (имеется ввиду проверка if).
// P.S - код из задания №3 переместить в функцию, не нужно его дублировать

const showCards = () => {
  const question = prompt("Сколько карточек отобразить? От 1 до 5");
  const numbers = Number(question);
  if (numbers > 0 && numbers <= productCards.length) {
    outputProductCards(productCards.slice(0, numbers));
  } else {
    alert("Введите число от 1 до 5");
  }
};

showCards();