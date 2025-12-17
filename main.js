// Покраска всех карточек

const productCards = document.querySelectorAll('.card-list-item');
const changeColorAllCardButton = document.querySelector('#change-color-all-card');
const redColorHash = '#ff1500ff';
const yellowColorHash = '#ddff00ff';

changeColorAllCardButton.addEventListener('click',() => {
 productCards.forEach((card) => card.style.backgroundColor = redColorHash)
})

// Покраска первой карточки

const firstProductCard = document.querySelector('.products-list');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
firstProductCard.style.backgroundColor = yellowColorHash;
})

// Открыть google

const openGoogleButtom = document.querySelector('#open-google');
openGoogleButtom.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open('https://google.com')
  } else {
    return;
  }
}

// Вывод консоль лог

const outputLogButton = document.querySelector('#output-console-log')

outputLogButton.addEventListener('click',() => outputConsoleLog("ДЗ №4"))

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
} 

// Когда наводим на заголовок- выводим текст в консоль

const titleProduct = document.querySelector('.title-product');

titleProduct.addEventListener('mouseover',() => {
  console.log('Текст заголовка',titleProduct.textContent);
})

// Меняем цвет кнопки

document.getElementById('color-toggle-button').addEventListener('click', function() {
  this.classList.toggle('bg-red');
  this.classList.toggle('bg-yellow');
});