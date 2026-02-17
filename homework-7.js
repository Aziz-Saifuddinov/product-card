import { commentaries } from "./comments.js";

// 2. Создать массив чисел от 1 до 10. Отфильтровать его таким образом,
// что бы мы получил массив чисел, начиная с 5.

import { commentaries } from "./comments.js";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filteredNumbers = numbers.filter(number => number >= 5);

console.log(filteredNumbers)

// 3. Создать массив строк, относящихся к любой сущности
// (название фильмов/книг, кухонные приборы, мебель и т.д.),
// проверить, есть ли в массиве какая-то определенная сущность.

const games = [
  'NBA2k',
  'battlefield',
  'call of duty',
  'counter strike',
  'MOTOGP',
  'ufc',
]

const checkGame = games.includes('MOTOGP');
console.log(checkGame);

// 4. Написать функцию, которая аргументом будет принимать массив
// и изменять его порядок на противоположный ("переворачивать")
// Два вышеуказанных массива с помощью этой функции перевернуть.

const reverseArray = (array) => {
  console.log(array.reverse())
}

reverseArray(games);
reverseArray(numbers);

// 7. Вывести в консоль массив тех комментариев
// почта пользователей которых содержит ".com"

const filteredEmail = commentaries.filter(commentaries => commentaries.email.includes('.com'));
console.log(filteredEmail);

// 8. Перебрать массив таким образом, что бы
// пользователи с id меньше или равно 5 имели postId: 2
// а те, у кого id больше 5, имели postId: 1

const filteredId = commentaries.map(commentaries => ({...commentaries, postId: commentaries.id <= 5 ? 2 : 1}))
console.log(filteredId);

// 9. Перебрать массив, что бы объекты состояли только из айди и имени

const updatedCommentaries = commentaries.map(commentaries => ({id: commentaries.id, name: commentaries.name}))
console.log(updatedCommentaries);

// 10. Перебираем массив, добавляем объектам
// свойство isInvalid и проверяем: если длина тела сообщения
// (body) больше 180 символов - устанавливаем true, меньше - false.

const calculateSymbols = commentaries.map(commentaries => ({...commentaries, isInValid: commentaries.body.length > 180}));
console.log(calculateSymbols);

// 11. Почитать про метод массива reduce. Используя его,
// вывести массив почт и провернуть тоже самое с помощью метода map

const showEmailsByReduce = commentaries.reduce((accum, comment) => {
  accum.push(comment.email);
  return accum;
}, [])
console.log(showEmailsByReduce);

const showEmailsByMap = commentaries.map(commentaries => commentaries.email)
console.log(showEmailsByMap);

// 12. Почитать про методы toString(),
// join() и перебрав массив с задания №11, привести его к строке.

const turnEmailsToString = showEmailsByMap.join()