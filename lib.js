// Получите значения браузерного cookie-файла
// Получите значение файла cookie, обратившись к нему с помощью document.cookie

const cookie = (name) => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
cookie('_ga');
// Result: "GA1.2.1929736587.1601974046"

// Преобразовать RGB d Hex
const rgbToHex = (r, g, b) => '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

rgbToHex(0, 51, 255);
// Result: #0033ff

// Generate Random Hex
const randomHex = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')}`;

console.log(randomHex());
// Result: #92b008

// Скопировать в буфер обмена
// Easily copy any text to clipboard using navigator.clipboard.writeText.
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
copyToClipboard('Hello World');

// Проверьте, действительна ли дата
// Используйте следующий фрагмент, чтобы проверить, действительна ли данная дата или нет.
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());

isDateValid('December 17, 1995 03:24:00');
// Result: true

// Найдите день года
// Найти какой день по заданной дате
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

dayOfYear(new Date()); // Result: 272

// Сделать строку с заглавной буквы
// В Javascript нет встроенной функции капитализации, поэтому мы можем использовать для этой цели следующий код.
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

capitalize('follow for more');
// Result: Follow for more

// 8. Найдите количество дней между двумя днями
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);

dayDif(new Date('2020-10-21'), new Date('2021-10-22'));
// Result: 366

//  Очистить все файлы cookie
// Вы можете легко удалить все файлы cookie, хранящиеся на веб-странице, открыв файл cookie с помощью document.cookie и удалив его.

const clearCookies = document.cookie
  .split(';')
  .forEach(
    (cookie) =>
      (document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`)),
  );

// Log Time from Date
const timeFromDate = (date) => date.toTimeString().slice(0, 8);

console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0)));
// Result: "17:30:00"

// Проверьте, является ли число четным или нечетным
const isEven = (num) => num % 2 === 0;

console.log(isEven(2));
// Result: True

// Найти среднее число чисел
// Найдите среднее между несколькими числами, используя метод уменьшения.
const average = (...args) => args.reduce((a, b) => a + b) / args.length;

average(1, 2, 3, 4);
// Result: 2.5

// Scroll to Top
const goToTop = () => window.scrollTo(0, 0);

goToTop();

// Check if array is empty
const isNotEmpty = (arr) => Array.isArray(arr) && arr.length > 0;

isNotEmpty([1, 2, 3]);
// Result: true

//  Получить выделенный текст
// Получите текст, выбранный пользователем, используя встроенное свойство getSelection.
const getSelectedText = () => window.getSelection().toString();
getSelectedText();

// Перемешать массив
// Перетасовывать массив очень просто с помощью методов сортировки и случайных чисел.
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
console.log(shuffleArray([1, 2, 3, 4]));
// Result: [ 1, 4, 3, 2 ]

// Обнаружить темный режим
// Проверьте, находится ли устройство пользователя в темном режиме, с помощью следующего кода.
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

console.log(isDarkMode); // Result: True or False

// Remove Duplicated from Array
const removeDuplicates = (arr) => [...new Set(arr)];
console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5, 5, 6]));
// Result: [ 1, 2, 3, 4, 5, 6 ]

// Вычислить площадь круга
const calculateCircleArea = (radius) => Math.PI * Math.pow(radius, 2);
calculateCircleArea(5);
// Result: 78.53981633974483

// Проверьте, является ли число простым
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
isPrime(13);
// Result: true

// Подсчет количества символов в строке
const countOccurrences = (str, char) => str.split(char).length - 1;
countOccurrences('banana', 'a');
// Result: 3

// Создать случайное число в диапазоне
const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
randomInRange(1, 10);
// Result: Random number between 1 and 10 (inclusive)

// Создать случайное число от 1 до 10
const random1To10 = () => Math.floor(Math.random() * 10) + 1;
console.log(random1To10());
// Output: Random number between 1 and 10 (inclusive)

// Convert Seconds to HH:MM:SS Format
const secondsToHHMMSS = (seconds) => {
  const pad = (num) => String(num).padStart(2, '0');
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
};
secondsToHHMMSS(3660); // Result: "01:01:00"

// Сортировка массива чисел в порядке возрастания
const sortAscending = (arr) => arr.slice().sort((a, b) => a - b);
sortAscending([3, 1, 4, 1, 5, 9, 2, 6, 5, 3]);
// Result: [1, 1, 2, 3, 3, 4, 5, 5, 6, 9]

// Вычислить факториал числа
const factorial = (num) => {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
};
factorial(5);
// Result: 120

// Find the Maximum Value in an Array
const findMax = (arr) => Math.max(...arr);
findMax([10, 5, 8, 20, 3]);
// Result: 20

// Get the Current Date in DD/MM/YYYY Format
const getCurrentDate = () => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
getCurrentDate(); // Result: "02/08/2023"

// Вычислить степень числа
const power = (base, exponent) => Math.pow(base, exponent);
power(2, 5); // Result: 32

// Найдите первые N чисел Фибоначчи
const fibonacci = (n) => {
  const result = [0, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
};
fibonacci(8);
// Result: [0, 1, 1, 2, 3, 5, 8, 13]

// Подсчитайте количество слов в строке
const countWords = (str) => str.trim().split(/\s+/).length;
console.log(countWords('Hello world, how are you?')); // Output: 5

// Проверьте, имеет ли объект определенное свойство
const hasProperty = (obj, prop) => prop in obj;
const person = { name: 'John', age: 30 };
console.log(hasProperty(person, 'name'));
// Output: true
console.log(hasProperty(person, 'gender'));
// Output: false

// Вычислить среднее число чисел в массиве
const average = (arr) => arr.reduce((acc, val) => acc + val, 0) / arr.length;
console.log(average([1, 2, 3, 4, 5])); // Output: 3

// Найдите максимальное значение в массиве объектов
const findMaxValue = (arr, key) => Math.max(...arr.map((item) => item[key]));
const students = [
  { name: 'Alice', score: 80 },
  { name: 'Bob', score: 95 },
  { name: 'Charlie', score: 70 },
];
console.log(findMaxValue(students, 'score'));
// Output: 95

// Check if a String starts with a specific character
const startsWithChar = (str, char) => str.startsWith(char);
console.log(startsWithChar('Hello, world!', 'H'));
// Output: true
console.log(startsWithChar('Hello, world!', 'h'));
// Output: false

//  Convert a String to Title Case
const toTitleCase = (str) => str.replace(/\b\w/g, (match) => match.toUpperCase());
console.log(toTitleCase('hello world'));
// Output: "Hello World"

// Проверьте, является ли год високосным
const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
console.log(isLeapYear(2024));
// Output: true
console.log(isLeapYear(2023));
// Output: false

// Check if an Array is Sorted in Ascending Order
const isSortedAscending = (arr) => arr.every((el, i) => i === 0 || el >= arr[i - 1]);
console.log(isSortedAscending([1, 2, 3, 5, 8]));
// Output: true
console.log(isSortedAscending([1, 5, 3, 8, 2]));
// Output: false

// Усечь строку до заданной длины
const truncateString = (str, maxLength) => (str.length > maxLength ? str.slice(0, maxLength) + '...' : str);
console.log(truncateString('Hello, world!', 5));
// Output: "Hello..."

//60
