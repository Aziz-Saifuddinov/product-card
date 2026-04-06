import './homework-4.js';
import './homework-5.js';
import './homework-6.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js';
import './productCards.js';

// 3. Создать структуру на ваш выбор, как было показано в лекции
// (имеется ввиду - с машинами/бьюти-продуктами). Придумайте свою структуру 
// и реализуйте наследуемость классов

import { SportBike } from './sport-bike.js';

const cbr = new SportBike('CBR', 'Fireblade', 'Honda', 2007, 299);
const mt = new SportBike('MT', '09', 'Yamaha', 2014, 245);

cbr.showBikeInfo();
cbr.showSportBikeInfo();

mt.showBikeInfo();
mt.showSportBikeInfo();