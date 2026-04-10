export class Cafe {

  constructor(name, adress) {
    this.name = name;
    this.adress = adress;
  }

  getCafeInfo() {
    return ` Кафе называется ${ this.name }, вы можете посетить нас по адресу ${ this.adress } и насладиться нашим меню!`;
  }

  orderDrink(drink) {
    return drink.serveDrink();
  }

  getDrinkInfo(drink) {
    return drink.getInfo();
  }

}