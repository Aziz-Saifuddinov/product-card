export class Drink {
  #temperature;

  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getInfo() {
    return `Название: ${this.name}, Размер: ${this.size}, Цена: ${this.price}`;
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(temp) {
    this.#temperature = temp;
  }

  // шаблонный метод
  serveDrink() {
    this.prepare(); // вызываем то, что переопределят наследники

    setTimeout(() => {
      console.log(`Температура готового напитка - ${this.name}, ${this.#temperature}°C`);
    }, 9000);

    setTimeout(() => {
      console.log(`Ваш напиток ${this.name} готов, объёмом ${this.size}. К оплате ${this.price} рублей`);
    }, 11000);
  }

  prepare() {
    console.log(`Готовится ${this.name}`);
  }
  
}