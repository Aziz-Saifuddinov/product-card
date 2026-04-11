export class Cafe {

  constructor(name, adress) {
    this.name = name;
    this.adress = adress;
  }

  getCafeInfo() {
    return `Кафе называется ${this.name}, адрес: ${this.address}`;
  }

  orderDrink(drink) {
    console.log(`Вы заказали: ${drink.name}`);
    drink.serveDrink();
  }

  getDrinkInfo(drink) {
    return drink.getInfo();
  }

}