// Перебирающие методы массива

// Коллекция объектов для всех примеров с автомобилями
const cars = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
];

// Example 1 - Метод map
// Пусть функция getModels возвращает массив моделей (поле model) всех автомобилей.

const getModels = cars => cars.map(({ model }) => model);

console.table(getModels(cars));

// Example 2 - Метод map
// Пусть функция makeCarsWithDiscount возвращает новый массив объектов с изменным значением
// свойства price в зависимости от переданной скидки.

const makeCarsWithDiscount = (cars, discount) =>
  cars.map(car => ({ ...car }.price *= 1 - discount));

console.table(makeCarsWithDiscount(cars, 0.2));
console.table(makeCarsWithDiscount(cars, 0.4));

// Example 3 - Метод filter
// Пусть функция filterByPrice возвращает массив автомобилей цена которых меньше чем значение
// параметра threshold.

const filterByPrice = (cars, threshold) => cars.filter(({ price }) => price < threshold);

console.table(filterByPrice(cars, 30000));
console.table(filterByPrice(cars, 25000));

// Example 4 - Метод filter
// Пусть функция getCarsWithDiscount возвращает массив автомобилей свойство onSale которых
// true.

const getCarsWithDiscount = cars => cars.filter(({ onSale }) => onSale);

console.table(getCarsWithDiscount(cars));

// Example 5 - Метод filter
// Пусть функция getCarsWithType возвращает массив автомобилей тип которых совпадает со
// значением параметра type.

const getCarsWithType = (cars, type) => cars.filter(({ type: carType }) => carType === type);

console.table(getCarsWithType(cars, 'suv'));
console.table(getCarsWithType(cars, 'sedan'));

// Example 6 - Метод find
const getCarByModel = (cars, model) => cars.find(({ model: carModel }) => carModel === model);

console.log(getCarByModel(cars, 'F-150'));
console.log(getCarByModel(cars, 'CX-9'));

// Example 7 - Метод sort
// Пусть функция sortByAscendingAmount возвращает новый массив автомобилей отсортированный по
//  возврастанию значения свойства amount.

const sortByAscendingAmount = cars => {};

console.table(sortByAscendingAmount(cars));

// Example 8 - Метод sort
// Пусть функция sortByDescendingPrice возвращает новый массив автомобилей отсортированный
// по убыванию значения свойства price.

const sortByDescendingPrice = cars => {};

console.table(sortByDescendingPrice(cars));

// Example 9 - Метод sort
// Пусть функция sortByModel возвращает новый массив автомобилей отсортированный по названию
// модели в алфавитном и обратном алфавитном порядке, в засисимости от значения параметра order.

const sortByModel = (cars, order) => {};

console.table(sortByModel(cars, 'asc'));
console.table(sortByModel(cars, 'desc'));

// Example 10 - Метод reduce
// Пусть функция getTotalAmount возвращает общее количество автомобилей(значение свойств
// amount).

const getTotalAmount = cars => {};

console.log(getTotalAmount(cars));

// Example 11 - Цепочки методов
// Пусть функция getAvailableCarNames возвращает массив моделей автомобилей, но только тех,
// которые сейчас на распродаже.

const getModelsOnSale = cars => {};

console.table(getModelsOnSale(cars));

// Example 12 - Цепочки методов
// Пусть функция getSortedCarsOnSale возвращает массив автомобилей на распродаже (свойство
// onSale), отсортированных по возрастанию цены.

const getSortedCarsOnSale = cars => {};

console.table(getSortedCarsOnSale(cars));

// Автопроверка
const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39,
  },
];

const getUsersWithFriend = (users, friendName) =>
  users.filter(user => user.friends.includes(friendName));
console.log(getUsersWithFriend(users, 'Briana Decker'));

const getTotalFriendCount = users =>
  users.reduce((total, user) => {
    console.log(user.friends);
    return total + user.friends.lenght;
  }, 0);
console.log(getTotalFriendCount(users));

const sortByDescendingFriendCount = users =>
  [...users].sort((firstUser, secondUser) => secondUser.friends.length - firstUser.friends.length);
console.log(sortByDescendingFriendCount(users));

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  {
    title: 'The Dreams in the Witch House',
    author: 'Howard Lovecraft',
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = books
  .filter(book => book.rating > MIN_BOOK_RATING)
  .map(book => book.author)
  .sort((author1, author2) => author1.localeCompare(author2));
console.log(names);

const getSortedFriends = users =>
  users
    .flatMap(user => user.friends)
    .filter((friend, index, friends) => friends.indexOf(friend) === index)
    .sort((name1, name2) => name1 - name2);

console.log(getSortedFriends(users));
