import { Drink } from "./Drink.js";

export class Coffee extends Drink {

  constructor(name, size, price, temperature, grain, milk) {
    super(name, size, price, temperature);
    this.grain = grain;
    this.milk = milk;
  }

  getInfo() {
    super.getInfo();
    console.log(`Тип зёрен: ${ this.grain }, Молоко: ${ this.milk }`);
  }

  #prepareCoffee() {
    setTimeout(() => {
      console.log( `Перемалываем зёрна ${ this.grain } кофемолкой`)
    }, 1000);

    setTimeout(() => {
      console.log(`Темперируем в холдер и проливаем эспрессо`)
    }, 2000);

    setTimeout(() => {
      console.log(`Заливаем ${ this.milk } в питчер, начинаем взбивать`)
    }, 3000);

    setTimeout(() => {
      console.log(`В эспрессо вливаем молоко ${ this.milk } и подаем`)
    }, 4000);
  }

  serveDrink() {
    this.#prepareCoffee();
    super.serveDrink();
  }

}