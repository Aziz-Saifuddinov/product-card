import { Modal } from "./feature/10-homework/modal";
import { Form } from "./feature/10-homework/form";
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
const registrationForm = new Form('.registration-form');

registrationForm.form.addEventListener('submit', (event) => {
  event.preventDefault()

  const formValue = registrationForm.getFormData();
  if (!registrationForm.isValid()) {
    console.log ('Форма не валидна!');
    return;
  }
  if (formValue.password !== formValue.repeatPassword) {
    registrationForm.form.innerHTML = 'Регистрация не пройдена!';
    return;
  }
  user = formValue;
  user.createdOn = new Date()
  registrationForm.reset()
  console.log(user)
});

// 7. Создать кнопку "Аутентификация"
// 8. Создать модальное окно, используя классы "modal, modal-showed". Логика такая: при нажатии на кнопку у нас открывается модальное окно

const authBtn = document.getElementById('authBtn');
const authLogin = document.getElementById('auth-login');
const authPassword = document.getElementById('auth-password');
const messageEl = document.getElementById('message');
const loginForm = document.getElementById('loginForm');
const overlay = document.querySelector('.overlay');

const modalId = new Modal('#modal');
authBtn.addEventListener('click', () => modalId.openModal());

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const password = authPassword.value;
  const login = authLogin.value;

    if (password === user.password && login === user.login) {
    const currentUser = user;
    currentUser.loginDate = new Date()
    messageEl.style.color = 'green';
    messageEl.textContent = 'Успешный вход!';
    modalId.closeModal();
  } else {
    messageEl.style.color = 'red';
    messageEl.textContent = 'Неверный логин или пароль';
  }
});