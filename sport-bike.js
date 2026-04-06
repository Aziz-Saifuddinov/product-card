// 3. Создать структуру на ваш выбор, как было показано в лекции
// (имеется ввиду - с машинами/бьюти-продуктами). Придумайте свою структуру 
// и реализуйте наследуемость классов


import { Bike } from './bike.js';

export class SportBike extends Bike {
  constructor(name, model, manufacturer, year, maxSpeed) {
    super(name, model, manufacturer, year);
    this.maxSpeed = maxSpeed;
  }

  showSportBikeInfo() {
    console.log(`Максимальная скорость этого спортбайка — ${this.maxSpeed} км/ч.`);
  }
}