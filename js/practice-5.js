// Объекты

// Example 1 - Основы обьектов
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя
// Object.keys() и for...of

// Код
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

function changeUser(user) {
  user.mood = 'happy';
  user.hobby = 'skydiving';
  user.premium = false;

  for (const key of Object.keys(user)) console.log(`${key}:${user[key]}`);
}

changeUser(user);

// Example 2 - метод Object.values()
// У нас есть объект, в котором хранятся зарплаты нашей команды.
// Напишите код для суммирования всех зарплат и сохраните результат
// в переменной sum. Должно получиться 390. Если объект salaries пуст,
// то результат должен быть 0.

// Код
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function sumSalaries(salaries) {
  console.log(Object.values(salaries).reduce((a, b) => a + b));
}

sumSalaries(salaries);

// Example 3 - Массив объектов
// Напишите ф-цию calcTotalPrice(stones, stoneName), которая принимает
// массив обьектов и строку с названием камня. Ф - ция считает и возвращает
// общую стоимость камней с таким именем, ценой и количеством из обьекта

// Код
const stones = [
  { name: 'Изумруд', price: 1300, quantity: 4 },
  { name: 'Бриллиант', price: 2700, quantity: 3 },
  { name: 'Сапфир', price: 400, quantity: 7 },
  { name: 'Щебень', price: 200, quantity: 2 },
];

function calcTotalPrice(stones, stoneName) {
  let totalPrice = 0;
  for (const { name, price, quantity } of stones)
    if (stoneName === name) totalPrice += price * quantity;

  return totalPrice;
}

console.log(calcTotalPrice(stones, 'Сапфир'));

// Example 4 - Комплексные задачи
// Напиши скрипт управления личным кабинетом интернет банка. Есть объект
// account в котором необходимо реализовать методы для работы с балансом и
// историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const { transactions } = this;

    return {
      id: transactions.length + 1,
      type,
      amount,
    };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    const { transactions } = this;

    transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
    this.balance += amount;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    const { balance, transactions } = this;

    if (balance < amount) {
      console.log(`Снятие суммы в размере ${amount} невозможно. Текущий баланс = ${balance}.`);
      return;
    }

    transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
    this.balance -= amount;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    const { transactions } = this;

    return transactions.find(transaction => transaction.id === id);
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    const { transactions } = this;

    let totalAmount = 0;
    for (const transaction of transactions) {
      if (transaction.type === type) totalAmount += transaction.amount;
    }

    return totalAmount;
  },
};

account.withdraw(100);

account.deposit(1000);

account.deposit(16);

account.deposit(400);

account.withdraw(1300);

account.withdraw(110);

console.log('balance', account.balance);

account.withdraw(7);

console.log(account);

const transactionWhichWasFoundById = account.getTransactionDetails(1);
console.log('transactionWhichWasFoundById', transactionWhichWasFoundById);

console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
console.log('balance in the end:', account.getBalance());
