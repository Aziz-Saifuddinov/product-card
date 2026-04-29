const statusBlock = document.getElementById('status');
const userCards = document.querySelector('.user-cards');

loadUsers();

function getUsersFromStorage() {
  const data = localStorage.getItem('users');
  return data ? JSON.parse(data) : null;
}

async function loadUsers() {
  try {
    statusBlock.textContent = 'Данные загружаются...';
    userCards.innerHTML = '';

    const users = getUsersFromStorage();

    if (users) {
      statusBlock.textContent = 'Данные загружены из localStorage';
      renderUserCards(users);
     return;
}

    const response = await fetch('./users.json');

    if (!response.ok) {
      localStorage.removeItem('users');
      throw new Error(`Ошибка загрузки ${ response.status }`);
    }

    const data = await response.json();
    localStorage.setItem('users', JSON.stringify(data.users));

    setTimeout(() => {
      statusBlock.textContent = '';
      renderUserCards(data.users);
    }, 1000);

  } catch(error) {
    console.error(error)
    statusBlock.textContent = 'Ошибка при загрузке данных';
    userCards.innerHTML = '';
  }
}

function renderUserCards(usersArray) {
  userCards.textContent = '';
  const userTemplate = document.querySelector('#user-card-template');

  usersArray.forEach(user => {
    const userClone = userTemplate.content.cloneNode(true);

    userClone.querySelector('.user-name').textContent = `Имя: ${ user.name }`;
    userClone.querySelector('.user-surname').textContent = `Фамилия: ${ user.surname }`;
    userClone.querySelector('.user-email').textContent = `Почта: ${ user.email }`;
    userClone.querySelector('.user-age').textContent = `Возраст: ${ user.age }`;
    userClone.querySelector('.user-city').textContent = `Город: ${ user.city }`;
    userClone.querySelector('.delete-btn').addEventListener('click', () => {

    if (confirm('Удалить пользователя?')) {
        deleteUser(user.id);
    }
});

    userCards.appendChild(userClone);
  });
}

function deleteUser(id) {
  let users = getUsersFromStorage();

  if (!users) {
    return; 
  }

  users = users.filter(user => user.id !== id);
  if (users.length === 0) {
    localStorage.removeItem('users');
  } else {
    localStorage.setItem('users', JSON.stringify(users));
  }

  renderUserCards(users);
}

const getAllUsersButton = document.querySelector('.get-all-btn');
getAllUsersButton.addEventListener('click', () => {

  const users = getUsersFromStorage();

  if (!users) {
    loadUsers();
    return;
  }

  if (userCards.children.length === users.length) {
    statusBlock.textContent = 'Все пользователи уже отображены';
    return;
  }

  renderUserCards(users);
});

const deleteAllUsersButton = document.querySelector('.delete-all-btn');
deleteAllUsersButton.addEventListener('click', () => {
  localStorage.removeItem('users');
  userCards.innerHTML = '';
  statusBlock.textContent = 'Все пользователи удалены';
});