//1. Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

function task1() {
  const question = prompt('Какое официальное название JavaScript?');
  if (question === 'ECMAScript') return alert('Верно!');
  return alert('Не знаете? ECMAScript!');
}

//2. Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

function time(minutes) {
  let hours = Math.floor(minutes / 60)
    .toString()
    .padStart(2, '0');
  let mins = minutes % 60;
  let formattedMins = mins.toString().padStart(2, '0');
  console.log(`${hours}:${formattedMins}`);
}

time(69);

//3. Напишите цикл, который выводит в консоль
//числа от max до min по убыванию
// Выведите в консоль всех четных чисел от min до max

const max = 50;
const min = 23;

let numbers = '';

function task3(min, max) {
  numbers = '';
  for (let i = max; i > min; --i) {
    if (!(i % 2)) {
      numbers += `${i} `;
    }
  }
  console.log(numbers);
}

task3(3, 25);
task3(3, 25);

//4. При помощи цикла for додайте все четные числа от   min до max

const max2 = 50;
const min2 = 0;

function task4(min2, max2) {
  numbers2 = '';
  for (let i = min; i < max; ++i) {
    if (!(i % 2)) {
      numbers2 += `${i} `;
    }
  }
  console.log(numbers2);
}

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

function task4_1() {
  const login = prompt('Login');
  if (login === 'Admin') {
    const password = prompt('Password');
    if (password === "I'm head") {
      alert('Hello');
    } else alert('Wrong password!');
  } else if (login) {
    alert("I don't know you");
  } else alert('Canceled');
}

task4_1();

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
// let chec= false;
// let total = 0;

function task5() {
  let check = true;
  let total = 0;
  let inputValue;

  while (check) {
    inputValue = prompt('Введите число');
    console.log(inputValue);
    if (inputValue === null) {
      check = false;
      alert(total);
    }
    total += Number(inputValue);
  }
}

task5();

//7. Напишите цикл, который предлагает ввести
//число больше 100 через prompt.
//Если если посетитель ввёл другое число - попросить
//ввести ещё раз и так далее.
//Цикл должен спрашивать число, пока посетитель не
//введёт число больше 100, либо не нажмет кнопку
//Отмена в prompt

// let input = prompt("Введите число больше 100");

function askNumber100() {
  let input = prompt('Введите число больше 100');
  while (input !== null && input <= 100) input = prompt('Введите число больше 100');
}

askNumber100();

// 8. В переменной min лежит число от 0 до 59.
// Определите в какую четверть часа попадает
// это число(в первую, вторую, третью или четвертую).

// var min = 10;

function task8(min) {
  if (min >= 0 && min <= 14) return 1;
  if (min >= 15 && min <= 29) return 2;
  if (min >= 30 && min <= 44) return 3;
  return 4;
}

console.log(task8(55));

//9. Дана строка, состоящая из символов, например, 'abcde'.
// Проверьте, что первым символом этой строки является буква 'a'.
// Если это так - выведите 'да', в противном случае выведите 'нет'.

function task9(string) {
  if (string.toLowerCase()[0] === 'a') {
    console.log('да');
  } else {
    console.log('ні');
  }
}
task9('ango1245');

//10. За каждый месяц налоговая начисляет на зп разработчика 5% от суммы.
// Напишите консольную функцию, для которую пользователь вводит сумму зп
//  и количество месяцев с помощью prompt() не забываем что промпт возвращает строку.
// А налоговая вычисляет конечную сумму зп без налогов за год,
// сумму налогов всего и чистый доход разработчика за каждый месяц.
// Для вычисления суммы с учетом процентов используйте цикл for.

function task10(salary = 10000, month = 2) {
  let tax = 0;
  let brutto = 0;
  let netto = 0;

  for (let i = 1; i <= month; i++) {
    brutto += salary;
    tax = brutto * 0.05;
    netto = brutto - tax;
  }

  console.log(
    'Сумма зп без налогов за год: ' +
      netto +
      ' Сумма налогов за год: ' +
      tax +
      ' Чистый доход за год: ' +
      brutto
  );
}

// Напишите через свич поиска автора  языка программирования
// пишем название языка в шаблонной строке получает ответ язык и автор
// PHP Расмус Лердорф
// C# группа инженеров компании Microsoft под руководством Андерса Хейлсберга и Скотта Вильтаумота
// Swift Крис Латтнер
// JS Брендан Эйх
// Java Джеймс Гослинг
// Python Гвидо ван Россум

const lang = prompt('введите язык');

function lang1(lang) {
  switch (lang) {
    case 'PHP':
      console.log('PHP Расмус Лердорф');
      break;
    case 'C#':
      console.log(
        'C# группа инженеров компании Microsoft под руководством Андерса Хейлсберга и Скотта Вильтаумота'
      );
      break;
    case 'Swift':
      console.log('Swift Крис Латтнер');
      break;
    case 'JS':
      console.log('JS Брендан Эйх');
      break;
    case 'Java':
      console.log('ava Джеймс Гослинг');
      break;
    case 'Python':
      console.log('Python Гвидо ван Россум');
      break;
    default:
      console.log('Ds ytghfds');
      break;
  }
}

lang1(lang);

// Записать массив, const arr = [“BEST”, “the”, “foo”, “is”,  “JS” ]
// развернуть массив,
// вырезать foo,
// перевести его в строку разделенную пробелами
