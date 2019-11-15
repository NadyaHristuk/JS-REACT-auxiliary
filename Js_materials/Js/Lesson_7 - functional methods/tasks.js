// ==================== #1 ==========================
const scientist = [{
        first: 'Albert',
        last: 'Einstein',
        year: 1879,
        passed: 1955
    },
    {
        first: 'Isaac',
        last: 'Newton',
        year: 1643,
        passed: 1727
    },
    {
        first: 'Galileo',
        last: 'Galilei',
        year: 1564,
        passed: 1642
    },
    {
        first: 'Marie',
        last: 'Curie',
        year: 1867,
        passed: 1934
    },
    {
        first: 'Johannes',
        last: 'Kepler',
        year: 1571,
        passed: 1630
    },
    {
        first: 'Nicolaus',
        last: 'Copernicus',
        year: 1473,
        passed: 1543
    },
    {
        first: 'Max',
        last: 'Planck',
        year: 1858,
        passed: 1947
    },
    {
        first: 'Katherine',
        last: 'Blodgett',
        year: 1898,
        passed: 1979
    },
    {
        first: 'Ada',
        last: 'Lovelace',
        year: 1815,
        passed: 1852
    },
    {
        first: 'Sarah E.',
        last: 'Goode',
        year: 1855,
        passed: 1905
    },
    {
        first: 'Lise',
        last: 'Meitner',
        year: 1878,
        passed: 1968
    },
    {
        first: 'Hanna',
        last: 'Hammarström',
        year: 1829,
        passed: 1909
    }
];

// let sum = scientist.reduce(function(acc, el){
//     return acc + (el.passed - el.year);
// },0)

// let result = scientist.sort(function (a, b) {
//     return a.first > b.first ? 1 : -1
// });

// let result = scientist.sort((a, b) => a.first > b.first ? 1 : -1)
// console.log(result);

// let result = scientist.sort(function(a, b){
//     return (a.passed - a.year) - (b.passed - b.year);
// });

// let result = scientist.sort((a, b) => ((a.passed - a.year) - (b.passed - b.year)))

// console.log(result);

// let result = scientist.filter(function (el) {
//     return el.year < 1400 || el.year >= 1700
// })

// console.log(result);

// let result = scientist.find(function(el){
//     return el.first === 'Albert' && el.last === 'Einstein'
// })

// let result = scientist.filter(function(el){
//     return el.last[0] === 'C';
// })
// console.log(result);

// console.log(result.year);
// 1) отримати масив вчених що народилися в 19 ст
// 2) знайти суму років скільки прожили всі вченні
// 3) Відсортувати вчених по алфавіту
// 4) Відсортувати вчених по даті народження
// 5) Відсортувати вчених по кількості прожитих років
// 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті
// 7) Знайти вченого який народився найпізніше.
// 8) Знайти рік народження Albert Einstein
// 9) Знайти вчених прізвище яких починається на літеру С
// 10) Видалити з масива всіх вчених імя яких починається на A

// let result = scientist.filter(function(el){
//     if (el.year >=1800 && el.year < 1900) {
//         return el;
//     }
// }).map(function(el) {
//     return el.first
// })

// let result = scientist
//     .filter(el => el.year >= 1800 && el.year < 1900)
//     .map(el => el.first)

// let result = scientist.map(el => el.passed - el.year).reduce((acc , el)=> acc + el, 0);
// let result = scientist.reduce((acc , el)=> acc + (el.passed - el.year),0)
// let result = scientist.sort((a,b)=> a.first > b.first ? 1 : -1).map(el => el.first)
// scientist.sort((a, b)=> a.year - b.year);
// console.log(scientist);

// scientist.sort((a,b)=> (a.passed - a.year) - (b.passed - b.year))
// console.log(scientist);

// let result = scientist.filter(el => el.year < 1400 || el.year > 1700)
// console.log(result);

// scientist.sort((a, b)=> b.year - a.year)
// console.log(scientist[0]);

// let result = scientist.find(el => el.first === 'Albert' && el.last === 'Einstein').year
// console.log(result);

// let result = scientist.filter(el => el.last[0] === 'C');
// let result = scientist.filter(el => el.first[0] !== 'A');
// console.log(result);

// ============================= #2 =================================
/*
Написати ф-ю convertToRem(px) яка приймає строку і повертає значення в rem
console.log('16px'); // 1rem
console.log('24px'); // 1.5rem
console.log('0px'); // 0rem
*/

// =============================== #3 ===================================

/*
Написати ф-ю convertToPrc(container, block) яка приймає розміри контейнера та розміри блока в форматі строк і повертає значення блока в %. Якщо результат дробовий округлювати до двох знаків після коми.
console.log('1000px', '100px'); //10%
console.log('950px', '150px'); // 15.79%
*/

// =============================== #4 ===================================
/*
Написати ф-ю pxConvertor(from, to, block, container)  яка приймає параметри:
 from - одиниці з яких конвертувати, 
 to - одиниці в які конвертувати, 
 block - розміри блока для конвертації, 
 container - розмір контейнера. Всі параметри це строки. Ф-я повертає результат або % або rem.
   console.log('px', 'rem', 16); // 1rem
   console.log('px', 'rem', 24); // 1.5rem
   console.log('px','%', 100px', '1000px'); //10%
   console.log('px', '%', '150px', '950px'); // 15.79%
*/

// =============================== #5 ===================================

/*
Написати ф-ю convertFromKmToMetric(km). Ця функція приймає відстань в кілометрах і перетворює її в м, дм, см. Ф-я повертає обєкт конвертованих даних.
console.log(convertFromKm(1)); // {cm: 100000, dm: 10000, m: 1000,}
console.log(convertFromKm(1.5)); // {cm: 150000, dm: 15000, m: 1500,}
console.log(convertFromKm(3)); // {cm: 300000, dm: 30000, m: 3000,}

*/
// =============================== #6 ===================================
/*
Написати ф-ю convertFromKmToImperial(km). Ця функція приймає відстань в кілометрах і перетворює її в фути, дюйми, ярди. Ф-я повертає обєкт конвертованих даних.
console.log(convertFromKm(1)); // {feet: 3280,84, inch: 39370,08, yards: 1093,613,}
console.log(convertFromKm(1.5)); // {feet: 4921,26, inch: 59055,12, yards: 1640,42,}
*/
// =============================== #7 ===================================

/*
let worker = {
    workSchedule: [
        {day: 'M', hours: 9},
        {day: 'T', hours: 10},
        {day: 'W', hours: 11},
        {day: 'T', hours: 5},
        {day: 'F', hours: 12},
        ],
        penalty: [
        {day: 'M', value: 0},
        {day: 'T', value: 120},
        {day: 'W', value: 50},
        {day: 'T', value: 0},
        {day: 'F', value: 35},
        ],
        premium: 500,
}

написати ф-ю getSalary(worker, rate) яка приймає аргументами обєкт робітника і погодинну ставку.
Ф-я вертає зарплату робітника за тиждень з урахуванням штрафів і премій
hours - години роботи
value - сума штрафу
premium - премія
console.log(getSalary(worker, 20)); // 1235
console.log(getSalary(worker, 8)); // 671
*/


// function findGreaterThan (num, arr) {
//  return arr.filter(function(el) {
//         if (el > num) {
//             return el;
//         }
//     })
// };

// const findGreaterThan = (num, arr) => arr.filter(el => el > num);

// console.log(findGreaterThan(2, [1, 2, 3, 4, 5])); // [3, 4, 5,]
// console.log(findGreaterThan(3, [1, 2, 3, 4, 5])); // [4, 5,]
// console.log(findGreaterThan(1, [1, 2, 3, 4, 5])); // [2, 3, 4, 5,]






// ===================================================================

/*
Написати ф-ю convertToRem(px) яка приймає строку і повертає значення в rem
console.log('16px'); // 1rem
console.log('24px'); // 1.5rem
console.log('0px'); // 0rem
*/

// ===================================================================

/*
Написати ф-ю convertToPrc(container, block) яка приймає розміри контейнера та розміри блока в форматі строк і повертає значення блока в %. Якщо результат дробовий округлювати до двох знаків після коми.
console.log('1000px', '100px'); //10%
console.log('950px', '150px'); // 15.79%
*/

// ===================================================================

//  #1
// Напишите ф-ю которая принимает число и возвращает его зеркальную копию.
// console.log(reverseNumber(12)) // 21
// console.log(reverseNumber(567)) // 765
// console.log(reverseNumber(1004)) // 4001

// #2
// Напишите ф-ю которая принемает строку и делает из нее строку в стиле capitalize.
// console.log(capitalize('write javaScript function)) //Write JavaScript Function
// console.log(capitalize('the quick brown fox')) //The Quick Brown Fox
// console.log(capitalize('go to the editor')) //Go To The Editor

// #3
// Напишите ф-ю которая принемает строку и возвращает количество гласных букв в строке
// console.log(countOfVowels('The quick brown fox')) // 5
// console.log(countOfVowels('Example string')) // 4 
// console.log(countOfVowels('Go to the editor')) // 6 

//#4
// Напишите ф-ю которая принимает строку и букву и возвращает количество этой буквы в строке
// console.log(countLetter('w3school.com', 'o')) // 3

// #5 Напишите ф-ю которая переводит rgb цвет в hex цвет
// Здесь поможет Number() i toString() 
// console.log(convertColor('rgb(255,255,255)')) // #ffffff
// console.log(convertColor('rgb(0,0,0)')) #000000
// console.log(convertColor('rgb(66, 134, 244)')) #4286f4

// #6 
// Дан непустой массив целых чисел (X). В этой задаче вам нужно вернуть массив, состоящий только из неуникальных элементов данного массива. Для этого необходимо удалить все уникальные элементы (которые присутствуют в данном массиве только один раз). Для решения этой задачи не меняйте оригинальный порядок элементов. Пример: [1, 2, 3, 1, 3], где 1 и 3 неуникальные элементы и результат будет [1, 3, 1, 3].

// nonUniqueElements([1, 2, 3, 1, 3]) // [1, 3, 1, 3]
// nonUniqueElements([1, 2, 3, 4, 5]) // []
// nonUniqueElements([5, 5, 5, 5, 5]) // [5, 5, 5, 5, 5]
// nonUniqueElements([10, 9, 10, 10, 9, 8]) // [10, 9, 10, 10, 9]