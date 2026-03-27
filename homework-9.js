let user = undefined 

// 4. К Форме, которая прикреплена в футере - добавить логику 
// email должен соответствовать стандартам (добавить валидацию)
// если он не заполнен - форма не отправляется. Кнопка "Подписаться"
// и есть "отправкой формы", при нажатии на которую мы будем выводить
// консоль лог в виде объекта: { email: 'введенная почта' }

function getFormData(event) {
  const form = event.target;
  const formData = new FormData(form);
  return Object.fromEntries(formData.entries());
}
const footerEmail = document.querySelector('#footer-email');
footerEmail.addEventListener('submit', (event) => {
event.preventDefault();
const data = getFormData(event);
console.log(data);
});

// 5. Создать форму для регистрации.
// 6. Сохраняем этот объект в переменную для дальнейшего использования.\

const password = document.getElementById("password");
const repeatPassword = document.getElementById("repeatPassword");
const registrationForm = document.querySelector('.registration-form');

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const form = event.target;
  const formData = new FormData(form)
  const formValue = Object.fromEntries(formData.entries())
  if (formValue.password !== formValue.repeatPassword) {
    registrationForm.innerHTML = 'Регистрация не пройдена!';
    return;
  }
  user = formValue;
  user.createdOn = new Date()
  console.log(user)
  form.reset()
});

// 7. Создать кнопку "Аутентификация"
// 8. Создать модальное окно, используя классы "modal, modal-showed". Логика такая: при нажатии на кнопку у нас открывается модальное окно

const authBtn = document.getElementById('authBtn');
const modal = document.getElementById('modal');
const authLogin = document.getElementById('auth-login');
const authPassword = document.getElementById('auth-password');
const closeBtn = document.querySelector('.close-btn');
const messageEl = document.getElementById('message');
const loginForm = document.getElementById('loginForm');
const overlay = document.querySelector('.overlay');

authBtn.addEventListener('click', () => {
  modal.classList.add('modal-showed')
  overlay.classList.add('overlay-showed');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('modal-showed');
  overlay.classList.remove('overlay-showed');
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const password = authPassword.value;
  const login = authLogin.value;

    if (password === user.password && login === user.login) {
    const currentUser = user;
    currentUser.loginDate = new Date()
    messageEl.style.color = 'green';
    messageEl.textContent = 'Успешный вход!';
    modal.classList.remove('modal-showed');
    overlay.classList.remove('overlay-showed');
  } else {
    messageEl.style.color = 'red';
    messageEl.textContent = 'Неверный логин или пароль';
  }
});

overlay.addEventListener('click', () => {
  modal.classList.remove('modal-showed');
  overlay.classList.remove('overlay-showed');
});