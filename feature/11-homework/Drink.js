export class Drink {
  #temperature;

  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getInfo() {
    return `Название напитка: ${ this.name }, Размер напитка: ${ this.size }, Стоимость напитка: ${ this.price } рублей`;
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(temperature) {
    return this.#temperature = temperature;
  }

  #prepareDrink() {
    console.log(`Готовится ${ this.name }`);
  }

  serveDrink() {
    this.#prepareDrink();

    setTimeout(() => {
      console.log(`Температура готового напитка - ${ this.name }, ${ this.#temperature }°C`)
    }, 9000);

    setTimeout(() => {
      console.log(`Ваш напиток ${ this.name } готов, объёмом в ${ this.size }. К оплате ${ this.price } рублей`)
    }, 11000);
  }
  
}