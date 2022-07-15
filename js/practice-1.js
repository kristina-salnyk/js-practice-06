// Переменные, типы и операторы

// Example 1 - Базовые математические операторы
// Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.

const apples = 47;
const grapes = 135;
const total = apples + grapes;
console.log(total);
const diff = Math.abs(apples - grapes);
console.log(diff);

// Example 2 - Комбинированные операторы
// Замени выражение переопределения комбинированным оператором +=.

let students = 100;
students += 50;
console.log(students);

// Example 3 - Приоритет операторов
// Разбери приоритет операторов в инструкции присвоения значения переменной result.

const result = 108 + 223 - 2 * 5;
console.log(result);

// Example 4 - Класс Math
// Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения переменной
// value.Используй методы Math.floor(), Math.ceil() и Math.round().Проверь что будет в консоли
// при значениях 27.3 и 27.9.

const myValue = 27.5;
console.log(Math.floor(myValue)); // 27
console.log(Math.ceil(myValue)); // 28
console.log(Math.round(myValue)); // 28

const myValue2 = 27.9;
console.log(Math.floor(myValue)); // 27
console.log(Math.ceil(myValue)); // 28
console.log(Math.round(myValue)); // 28

// Example 5 - Шаблонные строки
// Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные
// в строку.

const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// Example 6 - Методы строк и чейнинг
// Напиши скрипт который рассчитывает индекс массы тела человека. Для этого необходимо разделить
// вес в киллограммах на квадрат высоты человека в метрах. Вес и высота хранятся в переменных
// weight и height, но не как числа, а в виде строк(специально для задачи).Нецелые числа могут
// быть заданы в виде 24.7 или 24, 7, то есть в качестве разделителя дробной части может быть
// запятая. Индекс массиы тела необходимо округлить до одной цифры после запятой;

let weight = '88,3';
let height = '1.75';

weight = Number(weight.replaceAll(',', '.'));
height = Number(height.replaceAll(',', '.'));

const bmi = (weight / height ** 2).toFixed(1);
console.log(bmi); // 28.8

// Example 7 - Операторы сравнения и приведение типов
// Каким будет результат выражений?

console.log(5 > 4); // true

console.log(10 >= '7'); // true

console.log('2' > '12'); // true - compare as a string by first symbols

console.log('2' < '12'); // false

console.log('4' == 4); // true

console.log('6' === 6); // false

console.log('false' === false); // false

console.log(1 == true); // true

console.log(1 === true); // false

console.log('0' == false); // true

console.log('0' === false); // false

console.log('Papaya' < 'papaya'); // true

console.log('Papaya' === 'papaya'); // false

console.log(undefined == null); // true

console.log(undefined === null); // false

// Example 8 - Логические операторы
// Каким будет результат выражений?

console.log(true && 3); // 3

console.log(false && 3); // false

console.log(true && 4 && 'kiwi'); // 'kiwi'

console.log(true && 0 && 'kiwi'); // 0

console.log(true || 3); // true

console.log(true || 3 || 4); // true

console.log(true || false || 7); // true

console.log(null || 2 || undefined); // 2

console.log((1 && null && 2) > 0); // false - trying to convert null to number we got 0

console.log(null || (2 && 3) || 4); // 3

// Example 9 - Значение по умолчанию и оператор нулевого слияния
// Отрефактори код так, чтобы в переменную value присваивалось значение переменной incomingValue,
// если оно не равно undefined или null.В противном случае должно присваиваться значение
// defaultValue.Проверь работу скрипта для слепдующих значений переменной incomingValue: null,
// undefined, 0, false.Используй оператор ?? (nullish coalescing operator).

let incomingValue = 5;
let defaultValue = 10;
let value = incomingValue ?? defaultValue;
console.log(value);

incomingValue = null;
defaultValue = 10;
value = incomingValue ?? defaultValue;
console.log(value);

incomingValue = 0;
defaultValue = 10;
value = incomingValue ?? defaultValue;
console.log(value);

incomingValue = false;
defaultValue = 10;
value = incomingValue ?? defaultValue;
console.log(value);

// Example 10 - Опертор % и методы строк
// Напиши скрипт который переведёт значение totalMinutes (количество минут) в строку в формате
// часов и минут HH: MM.

// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24:01

let totalMinutes = 70;

let hours = Math.floor(totalMinutes / 60);
let minutes = totalMinutes % 60;
let doubleDigitHours = String(hours).padStart(2, 0);
let doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

totalMinutes = 450;

hours = Math.floor(totalMinutes / 60);
minutes = totalMinutes % 60;
doubleDigitHours = String(hours).padStart(2, 0);
doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

totalMinutes = 1441;

hours = Math.floor(totalMinutes / 60);
minutes = totalMinutes % 60;
doubleDigitHours = String(hours).padStart(2, 0);
doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
