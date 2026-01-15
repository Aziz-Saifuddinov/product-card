// Task 3

const user = {
  firsName: 'Aziz',
  lastName: 'Saifuddinov',
  age: 22,
  email: 'saifuddinov.aziz@gmailcom',
  country: 'Poland',
  city: 'Warsaw',
  jobCompany: 'CAFE NERO',
  jobPosition: 'Administrator'
}

// Task 4

const vehicle = {
  brand: 'Audi',
  model: 'RS6',
  year: 2023,
  color: 'green',
  transmission: 'automatic'
}

vehicle.owner = user

console.log(user);

// Task 5

function checkMaxSpeed(vehicle) {
  if (!vehicle.maxSpeed) {
    vehicle.maxSpeed = '305 km/h';
  }

  console.log(vehicle);
}



// Task 6

function getObjectProperty(object, key) {
  console.log(object[key]);
}

getObjectProperty(vehicle, 'model');

// Task 7

const groceries = ['Meat', 'fish', 'Egg', 'Apple', 'Milk', 'Cheese'];

// Task 8

const bikes = [
  { 
    model: 'S1000RR',
    manufacturer: 'BMW',
    country: 'Germany',
    class: 'Sport',
    year: 2016,
    color: 'wight'
  },
  {
    model: 'R1',
    manufacturer: 'Yamaha',
    country: 'Japan',
    class: 'Sport',
    year: 2017,
    color: 'blue'
  },
  {
    model: 'Sportster 883',
    manufacturer: 'Harley Davidson',
    country: 'USA',
    class: 'Choper',
    year: 2014,
    color: 'black'
  },
  {
    model: 'Panigale',
    manufacturer: 'Ducati',
    class: 'Sport',
    year: 2019,
    color: 'red'
  }
]

// Task 9

const hondaBikes = [
  {
    model: 'CBR600RR',
    manufacturer: 'Honda',
    country: 'Japan',
    class: 'Sport',
    year: 2006,
    color: 'red'
  },
  {
    model: 'CB650R',
    manufacturer: 'Honda',
    country: 'Japan',
    class: 'Street',
    year: 2018,
    color: 'black'
  },
  {
    model: 'Hornet',
    manufacturer: 'Honda',
    country: 'Japan',
    class: 'Cruiser',
    year: 2015,
    color: 'grey'
  },
  {
    model: 'Fireblade',
    manufacturer: 'Honda',
    country: 'Japan',
    class: 'Sport',
    year: 2025,
    color: 'red'
  }
]

const allBikes = [...bikes, ...hondaBikes];

console.log(allBikes);

// Task 10 

function addRareBike(bikes) {
  return bikes.map(bikes => ({
    ...bikes,
    rare: bikes.year < 2006
  }));
}

console.log(addRareBikeRareBike(hondaBikes))