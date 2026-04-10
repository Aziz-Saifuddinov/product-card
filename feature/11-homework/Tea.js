import { Drink } from "./Drink.js";

export class Tea extends Drink {

  constructor(name, size, price, temperature, type, sort) {
    super(name, size, price, temperature);
    this.type = type;
    this.sort = sort;
  }

  getInfo() {
    super.getInfo()
    console.log(`Вид чая: ${ this.type }, сорт чая: ${ this.sort }`);
  }

  #prepareTea() {
    setTimeout(() => {
console.log(`Насыпаем ${ this.name }, сорта - ${ this.sort }`)
    }, 1000);

    setTimeout(() => {
      console.log(`Наливаем кипятка`)
    }, 3000);

    setTimeout(() => {
      console.log(`даем настояться`)
    }, 5000);
  }

  serveDrink() {
    this.#prepareTea();
    super.serveDrink();
  }
  
}