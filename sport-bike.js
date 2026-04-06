// 3. Создать структуру на ваш выбор, как было показано в лекции
// (имеется ввиду - с машинами/бьюти-продуктами). Придумайте свою структуру 
// и реализуйте наследуемость классов


import { Bike } from './Bike.js';

export class SportBike extends Bike {
  constructor(name, model, manufacturer, year, color, maxSpeed) {
    super(name, model, manufacturer, year, color);
    this.maxSpeed = maxSpeed;
  }

  showBikeInfo() {
    console.log(`Это спортбайк ${this.name} ${this.model}, разработанный компанией ${this.manufacturer} в ${this.year} году. Цвет: ${this.color}. Максимальная скорость — ${this.maxSpeed} км/ч.`);
  }
}