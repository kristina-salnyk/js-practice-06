console.log("Hello Kitty");

function digital_root(n) {
  if (n > 9) {
    const nStr = String(n);

    let sum = 0;
    for (let elem of nStr) {
      sum += Number(elem);
    }

    return digital_root(sum);
  } else {
    return n;
  }
}

// console.log(digital_root(234554));

function DNAStrand(dna) {
  dna = dna.replace(/A/g, "#");
  dna = dna.replace(/T/g, "@");

  dna = dna.replace(/C/g, "!");
  dna = dna.replace(/G/g, "%");

  dna = dna.replace(/#/g, "T");
  dna = dna.replace(/@/g, "A");

  dna = dna.replace(/!/g, "G");
  dna = dna.replace(/%/g, "C");

  return dna;
}

// console.log(DNAStrand("TTYAGGFSC"));

function digPow(n, p) {
  const nStr = n.toString();

  let res = 0;
  let i = p;
  for (let elem of nStr) {
    res += elem ** i;
    i++;
  }

  if (res % n === 0) return res / n;
  return -1;
}

// console.log(digPow(46288, 3));

function numbers(min, max) {
  for (let i = max; i >= min; i--) console.log(i);
}

// numbers(3, 6);

//4. Напишите код, который будет спрашивать
//логин с помощью prompt и логировать результат
//в консоль браузера

//Если посетитель вводит "Админ",
//то prompt запрашивает пароль.
//Если ничего не ввели или нажата клавиша Esc
//вывести строку "Отменено"
//В противном случае вывести строку "Я вас не знаю"

//Пароль проверять так:
//Если введён пароль "Я главный",
//то вывести строку "Здравствуйте!"
//иначе выводить строку "Неверный пароль!"

// const loginInput = prompt("Введите свой логин");

function askLogin() {
  const login = prompt("Введите свой логин");
  if (login === "Админ") {
    const password = prompt("Введите свой пароль");
    if (password === null || password === "") {
      alert("Отменено");
    } else {
      alert("Я вас не знаю");
    }
  }
}

// askLogin();

//5. При загрузке страницы пользователю предлагается
//в prompt ввести число. Ввод добавляется к значению
//переменной total.
//Операция ввода числа продолжается до тех пор,
//пока пользователь не нажмет кнопку Cancel в prompt.
//После того как пользователь прекратил ввод нажав на
//кнопку Cancel, показать alert со строкой "Общая сумма введенных чисел равна [число]."
//Делать проверку,что пользователь ввел именно число,
//а не произвольный набор символов, не нужно.

// let inputValue = prompt('Введите число');
// let chech = false;
// let total = 0;

function sumOfNumbers(total = 0) {
  const inputNumber = prompt("Введите число");
  if (inputNumber === null) {
    alert("Общая сумма введенных чисел равна " + total);
  } else {
    total += Number(inputNumber);
    sumOfNumbers(total);
  }
}

// sumOfNumbers();

//7. Напишите цикл, который предлагает ввести
//число больше 100 через prompt.
//Если если посетитель ввёл другое число - попросить
//ввести ещё раз и так далее.
//Цикл должен спрашивать число, пока посетитель не
//введёт число больше 100, либо не нажмет кнопку
//Отмена в prompt

// let input = prompt("Введите число больше 100");

function askNumber100() {
  let input = prompt("Введите число больше 100");
  if (input === null) {
    alert("Отменено");
  } else if (input <= 100) {
    askNumber100();
  }
}

// askNumber100();

// 8. В переменной min лежит число от 0 до 59.
// Определите в какую четверть часа попадает
// это число(в первую, вторую, третью или четвертую).

// var min = 10;

function getQuarter(min) {
  if (min >= 0 && min <= 14) {
    console.log("Первая четверть");
  } else if (min >= 15 && min <= 29) {
    console.log("Вторая четверть");
  } else if (min >= 30 && min <= 44) {
    console.log("Третья четверть");
  } else if (min >= 45 && min <= 59) {
    console.log("Четвертая четверть");
  }
}

// getQuarter(45);

//9. Дана строка, состоящая из символов, например, 'abcde'.
// Проверьте, что первым символом этой строки является буква 'a'.
// Если это так - выведите 'да', в противном случае выведите 'нет'.

function checkFirstLetter(str) {
  if (str[0] === "a") {
    console.log("да");
  } else {
    console.log("нет");
  }
}

// checkFirstLetter("abcde");

//За каждый месяц налоговая начисляет на зп разработчика 5% от суммы.
// Напишите консольную функцию, для которую пользователь вводит сумму зп
//  и количество месяцев с помощью prompt() не забываем что промпт возвращает строку.
// А налоговая вычисляет конечную сумму зп без налогов за год,
// сумму налогов всего и чистый доход разработчика за каждый месяц.
// Для вычисления суммы с учетом процентов используйте цикл for.

function getSalary(salary, months) {
  let tax = 0;
  let brutto = 0;
  let netto = 0;

  for (let i = 0; i < months; i++) {
    brutto += salary;
    tax += brutto * 0.05;
    netto += brutto - tax;
  }

  console.log(
    "Сумма зп без налогов за год: " +
      netto +
      " Сумма налогов за год: " +
      tax +
      " Чистый доход за год: " +
      brutto
  );
}

// const salary = Number(prompt("Введите сумму зп"));
// const months = Number(prompt("Введите количество месяцев"));

// console.log(getSalary(10000, 2));

// Напишите через свич поиска автора  языка программирования
// пишем название языка в шаблонной строке получает ответ язык и автор
// PHP Расмус Лердорф
// C# группа инженеров компании Microsoft под руководством Андерса Хейлсберга и Скотта Вильтаумота
// Swift Крис Латтнер
// JS Брендан Эйх
// Java Джеймс Гослинг
// Python Гвидо ван Россум

// Записать массив, const arr = [“BEST”, “the”, “foo”, “is”,  “JS” ]
// развернуть массив,
// вырезать foo,
// перевести его в строку разделенную пробелами

// Change code below this line
function calculateMeanTemperature(forecast) {
  // const todayLow = forecast.today.low;
  // const todayHigh = forecast.today.high;
  // const tomorrowLow = forecast.tomorrow.low;
  // const tomorrowHigh = forecast.tomorrow.high;

  const {
    today: { low: todayLow, high: todayHigh },
    tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  } = forecast;

  console.log(todayLow);
  console.log(todayHigh);
  console.log(tomorrowLow);
  console.log(tomorrowHigh);

  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

// console.log(
//   calculateMeanTemperature({
//     today: { low: 28, high: 32 },
//     tomorrow: { low: 25, high: 29 },
//   })
// );

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions)
      if (potion.name === newPotion.name)
        return `Error! Potion ${newPotion} is already in your inventory!`;
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1)
      if (this.potions[i].name === potionName) {
        this.potions.splice(i, 1);
        return;
      }
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1)
      if (this.potions[i].name === oldName) {
        this.potions[i].name = newName;
        return;
      }
    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};

// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));

const obj = {
  name: "html",
};

// console.log(obj);

obj.name = "css";

// console.log(obj);

// Напишите ф-цию calcTotalPrice(stones, stoneName),
// которая принимает массив обьектов и строку с названием
// камня.Ф - ция считает и возвращает общую стоимость
// камней с таким именем, ценой и количеством из обьекта

const stones = [
  { name: "Изумруд", price: 1300, quantity: 4 },
  { name: "Бриллиант", price: 2700, quantity: 3 },
  { name: "Сапфир", price: 400, quantity: 7 },
  { name: "Щебень", price: 200, quantity: 2 },
];

function calcTotalPrice(stones, stoneName) {
  let totalPrice = 0;
  for (const stone of stones) {
    if (stone.name === stoneName) {
      totalPrice += stone.price * stone.quantity;
    }
  }
  return totalPrice;
}

console.log(calcTotalPrice(stones, "Сапфир"));
