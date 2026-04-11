import { Drink } from "./Drink.js";

export class Tea extends Drink {

  constructor(name, size, price, temperature, type, sort) {
    super(name, size, price, temperature);
    this.type = type;
    this.sort = sort;
  }

  prepare() {
    console.log(`Насыпаем чай ${this.sort}`);
    console.log(`Завариваем ${this.type}`);
  }

}