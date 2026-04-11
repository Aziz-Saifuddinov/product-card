import { Drink } from "./Drink.js";

export class Coffee extends Drink {

  constructor(name, size, price, temperature, grain, milk) {
    super(name, size, price, temperature);
    this.grain = grain;
    this.milk = milk;
  }

  prepare() {
    console.log(`Перемалываем зёрна ${this.grain}`);
    console.log(`Готовим кофе с молоком: ${this.milk}`);
  }

}