// import uniqid from 'uniqid';

//4. Создайте объект calculator с тремя методами
//read(a, b) - принимает два аргумента и сохраняет их
//как свойства объекта
//sum() возвращает сумму сохраненных значений
//mult() перемножает сохраненные значения и возвращает результат

const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    return Object.values(this).reduce(
      (totalSum, val) => (typeof val === 'number' ? totalSum + val : 0),
      0
    );
  },
  mult() {
    return Object.values(this).reduce(
      (totalSum, val) => (typeof val === 'number' ? totalSum * val : totalSum),
      1
    );
  },
};

calculator.read(2, 10);
console.log(calculator);
console.log(calculator.sum());
console.log(calculator.mult());

//5. Напишите функцию updateObject, которая принимает объект и возвращает
//новый объект без указанного параметра
//Ожидаемый результат ({a: 1. b: 2}, 'b') => {a: 1}

const updateObject = (obj, param) => {
  const parameters = Object.keys(obj);
  parameters.splice(parameters.indexOf(param), 1);

  const newObj = {};
  parameters.forEach(element => {
    newObj[element] = obj[element];
  });

  return newObj;
};

console.log(updateObject({ a: 1, b: 2 }, 'b'));

//5.1 Напишите функцию updateObject, которая принимает объект и возвращает
//новый объект без указанных параметров
//Ожидаемый результат ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}

// Task 1
const myUser = {
  name: 'Peter',
  surname: 'Parker',
  age: 22,
  position: 'spider-man',
};

const userFunction = user => {
  return Object.keys(user).reduce((acc, key, index, array) => {
    return (
      acc +
      `${key[0].toUpperCase() + key.slice(1, key.length).toLowerCase()}: ${
        user[key].toString()[0].toUpperCase() +
        user[key].toString().slice(1, user[key].toString().length).toLowerCase()
      } ${index === array.length - 1 ? '' : ', '}`
    );
  }, ``);
};

console.log(userFunction(myUser));

//1. Напиши скрипт, который для объекта user,
//последовательно:
//1 добавит поле mood со значением 'happy'
//2 заменит hobby на 'skydiving'
//3 заменит значение premium на false
//4 выводит содержимое объекта users в фортмате
//ключ:значение используя Object.keys() и for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = 'happy';

// user['hobby'] = 'skydiving';

// user['premium'] = false;

// for ( const key of Object.keys(user) ) {
//   console.log(`${key}:${user[key]}`);
// }

//=======================

//2. У нас есть объект, в котором храняться зарплаты
//нашей команды
//Напишите код для сумирования всех зарплат и
//сохраните его результат в переменной sum.
//Если объект salaries пуст, то результат должен быть 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// function calculateSalaries (salaries){
//   let total = 0;
//   for( const value of Object.values(salaries)){
//     total += value;
//   }
//   return total
// }

// console.log(calculateSalaries({}))
//=======================

//3. Напишите ф-цию calcTotalPrice(stones, stonesName),
//которая принимает массив объектов и
//строку с названием камня.
//Функция считает м возвращает общую стоимость камней
//с таким именем, ценой и количеством из объекта

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];

// const calcTotalPrice = (stones, stonesName) => {

//   for (const stone of stones){

//     if (stone.name === stonesName){
//  return stone.price * stone.quantity
//     }
//   } return " This stone is not exist"
// }

// console.log(calcTotalPrice(stones, 'Щебень'));

//=======================

//4. Создайте объект calculator с тремя методами
//read(a, b) - принимает два аргумента и сохраняет их
//как свойства объекта
//sum() возвращает сумму сохраненных значений
//mult() перемножает сохраненные значения и возвращает результат

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   sum() {
//     return this.a + this.b
//   },
//   mult() {
//    return this.a * this.b
//   },
// };
// calculator.read(2, 6);
// console.log(calculator.sum());
// console.log(calculator.mult());

//=======================

//5. Напишите функцию updateObject, которая принимает объект и возвращает
//новый объект без указанного параметра
//Ожидаемый результат ({a: 1. b: 2}, 'b') => {a: 1}

// const updateObject = (obj, key) =>{
//   const newObj = {...obj};
//   delete newObj[key];
//   return newObj;
// }

// console.log(updateObject({a: 1, b: 2}, 'b'));
//=======================

//5.1 Напишите функцию updateObject, которая принимает объект и возвращает
//новый объект без указанных параметров
//Ожидаемый результат ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}

// const updateObject1 = (obj, ...keys) =>{
//   const newObj = {...obj};
//   keys.forEach(key => delete newObj[key]);

//   return newObj;
// }
// console.log(updateObject1({a: 1, b: 2, c: 3}, 'b', 'a'));

//=======================

//6. Напишите функцию, которая принимает как параметр объект
//и формирует объекты в новом массиве в формате [key, value]

// const user6 = {
//   name: "John",
//   surName: "Stones",
//   age: 20,
//   hobby: "tenis",
//   haveCar: true,
//   merried: false,
// };
// const updateUser6 = (user) => {
//  const newArray = Object.entries(user)
//  console.log(newArray)
// }
// updateUser6(user6)
//=======================

//7. Напиши скрипт управления личным кабинетом интернет банка
//Есть объект account в котором необходимо реализовать
//методы для работы с балансом и историей транзакций

//Типов транзакций всего два.
//Можно положить либо снять деньги со счета

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

//Каждая транзакция это объект со свойствамиЖ id, type, amount

const account = {
  //текущий баланс счёта
  balance: 0,

  //История транзакций
  transactions: [],

  //Метод создает и возвращает объект транзакций
  //Принимает сумму и тип транзакций
  createTransaction(type, amount) {
    return {
      type,
      amount,
      // id: uniqid(),
    };
  },

  //Метод отвечающий за добавление суммы к балансу.
  //Принимает сумму транцакции.
  //Вызывает createTransaction для создания объекта транзакции
  //после чего добавляет его в историю транзакций
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(Transaction.DEPOSIT, amount));
  },

  //Метод отвечающий за снятие суммы с баланса.
  //Принимает сумму транцакции.
  //Вызывает createTransaction для создания объекта транзакции
  //после чего добавляет его в историю транзакций
  //Если amount больше чем текущий баланс, выводим сообщение о том,
  //что недостаточно средств на счету
  withdraw(amount) {
    if (this.balance < amount) {
      return console.log('Недостатньо грошей на рахунку');
    }
    this.balance -= amount;
    this.transactions.push(this.createTransaction(Transaction.WITHDRAW, amount));
  },

  //Метод возвращает текущий баланс
  getBalance() {
    return this.balance;
  },

  getAllTransactions() {
    return this.transactions;
  },

  //Метод ищет и возвращает объект транзакции по id
  getTransactionDetails(id) {
    return this.transactions[id];
    // return this.transactions.find((item) => item.id === id);
  },

  //Метод возвращает количество средств определенного типа
  //транзакции из всей истории транзакций
  getTransactionType(type) {
    return this.transactions.filter(item => item.type === type);
  },
};

account.deposit(1000);
account.withdraw(500);
account.withdraw(500);
account.deposit(5000);
console.log(account.getBalance());
console.log(account.getAllTransactions());
console.log(account.getTransactionDetails(1));
console.log(account.getTransactionType(Transaction.DEPOSIT));
// console.log(account.getBalance())

const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

// Task 1

// Получить массив имен всех пользователей (поле name).
// console.log(getUserNames(usersData))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

const getUsersNames = users => users.map(user => user.name);

// console.log(getUsersNames(users));
// Task 2

// Получить массив объектов пользователей по цвету глаз (поле eyeColor).
// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

const getUsersWithEyeColor = (users, eyeColor) =>
  users.filter(user => user.eyeColor.toLowerCase() === eyeColor.toLowerCase());

// console.log(getUsersWithEyeColor(users, 'Blue'));

// Task 3

// Получить массив имен пользователей по полу (поле gender)
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

const getUsersWithGender = (users, gender) =>
  users.filter(user => user.gender.toLowerCase() === gender.toLowerCase());

console.log(getUsersNames(users, 'male'));

// Task 4

// Получить массив только неактивных пользователей (поле isActive).
// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// Task 5

// Получить пользователя (не массив) по email (поле email, он уникальный).
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// Task 6

// Получить массив пользователей в возрасте от min до max

// console.log( getUsersWithAge( users, 20, 30 ) );
// [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
// console.log( getUsersWithAge( users, 30, 40 ) );
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// Task 7

// Получить общую сумму баланса (поле balance) всех пользователей.
// console.log(calculateTotalBalance(users)); // 20916

// Task 8

// Массив имен всех пользователей у которых есть друг с указанным именем.
// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// Task 9

// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// Task 10

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть
// повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// Task 11

// На входе массив чисел, например: arr = [1,2,3,4,5].
// Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.
// Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов,
// в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.

// То есть:
// для arr = [ 1, 2, 3, 4, 5 ]
// getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
// Функция не должна модифицировать входной массив.
// В решении используйте метод arr.reduce.

// const getSums = (arr) => {
// пиши код тут
// }

// Task 1
// Добавить метод getinfo в объект user, который будет возвращать инфу о пользователе в формате
// Name: Peter. Surname: Parker. Age: 22. Position: spider-man.

// const user = {
//     name: 'Peter',
//     surname: 'Parker',
//     age: 22,
//     position: 'spider-man'
// }

// const user2 = {
//   name: "Batman",
//   surname: "Hz",
//   age: 36,
//   position: "batman",
// };

// Task
// Напиши функцию, которая будет возвращать шаблонную строку из значений объекта
// const user = {
//   name: "Peter",
//   surname: "Parker",
//   age: 22,
//   position: "spider-man"
// };
// const userFunc = (user) => {
//   const entriesArray = Object.entries(user);
//   return entriesArray.reduce((acc, entries, index) => {
//     return acc + `${entries[0][0].toUpperCase() + entries[0].slice(1)}: ${
//       entries[1]
//     }${entriesArray.length - 1 === index ? "" : ", "}`;
//   }, '');
// };
// console.log(userFunc(user));

// console.log(getValuesString(user)) // 'Name: Peter, Surname: Parker, Age: 22, Position: spider-man'

// вызов функции для проверки работоспособности
// console.log(user.getInfo())

// Task 2
// Нужно написать функцию которая принимает 1 параметр key, которая будет перебирать объект
// если у объекта есть такой ключ - вернет true
// Есть 2 варианта решения, сначала напишем функцию, потом решим простым способом

// const obj = {
//     name: 'Igor',
//     car:  'Mercedes',
//     carColor: 'black'
// }

// console.log(getBool())

// Task 3
// Нужно перебрать объекты и вывести имя лучшего сотрудника
// const findBestEmployee = (object) =>
//   Object.entries(object).reduce(
//     (acc, array) => (array[1] > acc[1] ? array : acc),
//     ["", 0]
//   )[0];

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99
//   })
// ); // lorence
// console.log(
//     findBestEmployee({
//         poly: 12,
//         mango: 17,
//         ajax: 4,
//     }),
// ); // mango
// console.log(
//     findBestEmployee({
//         lux: 147,
//         david: 21,
//         kiwi: 19,
//         chelsy: 38,
//     }),
// ); // lux

// Task 5
// Напиши функцию которая будет считать факториал числа, обязательно использовать рекурсию

// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

// 1 Напишите функцию, для проверки объекта,
// является ли элемент простым объектом,
// а не массивом, null и т.п.

// 2 Напишите функцию, которая  проверяет пустой ли объект
