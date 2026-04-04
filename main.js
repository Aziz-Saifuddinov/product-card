import './homework-4.js';
import './homework-5.js';
import './homework-6.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js';
import './productCards.js';
import './feature/10-homework/form.js'
import './feature/10-homework/modal.js'

// 3. Создать структуру на ваш выбор, как было показано в лекции
// (имеется ввиду - с машинами/бьюти-продуктами). Придумайте свою структуру 
// и реализуйте наследуемость классов

class Bike {
  constructor(name, model, manufacturer, year) {
    this.name = name; 
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year 
  }
  showBikeInfo() {
    console.log(`Это мотоцикл ${this.name} ${this.model} этой модели, разработала ${this.manufacturer} ${this.year} в году`
    );
  }
}

const cbr = new Bike('CBR', 'Fireblade', 'Honda', 2007);
const mt = new Bike('MT', '09', 'Yamaha', 2014);

cbr.showBikeInfo();
mt.showBikeInfo();