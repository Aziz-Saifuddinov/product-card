import { Drink } from "./Drink.js";

export class Lemonade extends Drink {

  constructor(name, size, price, temperature, syrup, fruit) {
    super(name, size, price, temperature);
    this.syrup = syrup;
    this.fruit = fruit;
  }

  prepare() {
    console.log(`Добавляем сироп ${this.syrup} и фрукты ${this.fruit}`);
    console.log(`Наливаем содовую и перемешиваем`);
    console.log(`Добавляем лёд и украшаем мятой`);
  }

}