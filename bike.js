// 3. Создать структуру на ваш выбор, как было показано в лекции
// (имеется ввиду - с машинами/бьюти-продуктами). Придумайте свою структуру 
// и реализуйте наследуемость классов


export class Bike {
  constructor(name, model, manufacturer, year, color) {
    this.name = name;
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.color = color;
  }

  showBikeInfo() {
    console.log(`Это мотоцикл ${this.name} ${this.model}, разработанный компанией ${this.manufacturer} в ${this.year} году. Цвет: ${this.color}.`);
  }

  startEngine() {
    console.log(`${this.name} ${this.model} завёлся.`);
  }
}