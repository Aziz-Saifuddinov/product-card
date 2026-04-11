import "./Drink.js"
import "./Coffee.js"
import "./Tea.js"
import "./Lemonade.js"
import "./Cafe.js"
import { Tea } from "./Tea.js"
import { Lemonade } from "./Lemonade.js"
import { Coffee } from "./Coffee.js"
import { Cafe } from "./Cafe.js"


const nero = new Cafe('NERO', 'город Душанбе ул Карабаева 102');
const citrusLemonade = new Lemonade('цитрусовый лемонад', '400мл', 300, 10, 'цитрус', 'малина');
const cappuccino = new Coffee('Капучино', '300мл', 200, 70, 'арабика', 'коровье');
const greenTea = new Tea('Зеленый чай', '400мл', 100, 90, 'зеленый', 'сенча');

console.log(nero.getCafeInfo());
console.log(nero.getDrinkInfo(cappuccino));

nero.orderDrink(citrusLemonade);
nero.orderDrink(cappuccino);
nero.orderDrink(greenTea);