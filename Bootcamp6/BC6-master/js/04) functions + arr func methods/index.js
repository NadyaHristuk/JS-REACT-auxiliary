// create
// function showText() {
//     console.log('inside text');
// }
//
// showText();

// call

// function add() {
//     console.log(5 + 6);
// }
// sum();
// function sum(num1, num2) {
//     console.log(num1 + num2);
// }
// let calc = function (num1, num2) {
//     console.log('inside text');
// };
// calc();
// sum(10,12);
// sum(50,100);
// sum(200,-30);
// sum('s','b');


// calc(); // move top


// return
//
// function showText() {
//     let str = 'I am function';
//    return str;
// }
// //
// console.log(showText());
// function calculator(a, b) {
//     let sum = a + b; // 15
//     let mult = a * b; // 50
//     let minus = a - b; // 5
//     let div = a / b; // 2
//     let result = sum + mult + minus + div; // 72
//     return ['сума ' + sum, mult, minus, div, result];
// }
//
// let functionResult = calculator(10, 5);
// console.log(functionResult);


// let a = 30;
// let b = 40;

// function addNumbers() {
//     // let a = 5;
//     let b = 6;
//     function number2() {
//         // let a = 10;
//         let b = 20;
//         return innerFunction();
//         function innerFunction() {
//             // let a = 100;
//             // let b = 200;
//             return a + b;
//         }
//         function i() {
//             let a = 100;
//         }
//     }
//     return number2();
// }
// console.log(addNumbers());
// function secondF() {
//     let a = 10;
//     let b = 20;
// }


// console.log(a);

// let result = addNumbers();
// console.log(result);
//
// function showText() {
//     let str = 'I am function';
//     return str;
// }
//
// console.log(showText());


// function calc (number1, number2) {
//     return number1 + number2;
// }
// //
// console.log(calc(5,6));
// console.log(calc(10,100));
// console.log(calc('10','100'));
// function arrSum(arr) {
//     let total = 0;
//     for (let item of arr) {
//         total += item;
//     }
//     return total;
// }
//
// console.log(arrSum([1, 2, 3, 5, 6, 10]));

// function calc (number1, number2) {
//     return number1 + number2;
// }
//
// console.log(calc(5,10));
// console.log(calc(20,30));
// console.log(calc(5, 'function'));
//
// function minus(a, b) {
//     return a - b;
// }
//
// console.log(minus(5, 2));
// console.log(minus(2, 5));

// default parameters
// function showText(name, days) {
//     return `${name} has trial version ${days} days`;
// }
// console.log(showText());

// function showText(name = 'Jim', days = 30) {
//     return `${name} has trial version ${days} days`
// }
// console.log(showText(20,'Mick'));
// 1) Написати функцію що приймає в себе строку
// 2) Перевіряє чи є сторока паліндромом
// 3) Повертає true чи false
// 4) A man, a plan, a canal. Panama
// 5) split, reverse. join

// function pol(str) {
//     let original = str.toLowerCase().split(' ').join('').split(',').join('').split('.').join('');
//     let reverseStr = original.split('').reverse().join('');
//     // if (original === reverseStr) {
//     //     return true
//     // } else  {
//     //     return false
//     // }
//     return original === reverseStr ? true : false;
//
// }
//
// console.log(pol('A man, a plan, a canal. Panama'));


// function checkPalindrome(string) {
//     let modString = string.toLowerCase().split(' ').join('').split(',').join('').split('.').join('');
//     let palindrom = modString.split('').reverse().join('');
//     if (modString === palindrom) {
//         return true
//     } else {
//         return false
//     }
//     // return modString === palindrom ? true : false;
//     // return modString === palindrom;
// }

// console.log(checkPalindrome("A man, a plan, a canal. Panama"));


// console.log(showText());
// console.log(showText('Tim', 15));

// Scope
// global Window
// local
// let test = 'Global scope';
//
// // 'use strict'
// function local() {
//     // let test = 'Local scope'; // remove let
//     // console.log(test);
//
//     function inner() {
//         let test = 'Phone';
//         // console.log(test);
//         return test;
//     }
//
//     return inner();
// }
// console.log(local());
// console.log(test);
//
// function sum(a, b) {
//     return a + b;
// }
//
// let sum = (a, b) => {
//     return a + b
// };
//
// let sum = (a, b) => a + b;


// // const a = 20;
// const b = 10;
//
//  function add () {
//     const a = 5;
//     return a + b;
// };
// console.log(a);
// console.log(add());

// // arguments
// function pow(base, exponent) {
//     return Math.pow(base, exponent);
// };
//
// console.log(`2 ** 10 =  ${pow(2, 10)}`); // "2 ** 10 =  1024"
//
// console.log(`10 ** 2 =  ${pow(10, 2)}`); // "10 ** 2 =  100"

// function sumArg() {
//     // console.log(arguments);
//     // arguments = 1, 5, 9, 12, 1, 100;
//     // return arguments;
//     // console.log(arguments[1]);
//     let arr = Array.from(arguments);
//     // console.log('Array arguments', arr);
//     if (typeof arr[0] === 'number') {
//         let sum = 0;
//         for (let item of arr) {
//             sum += item;
//         }
//         return sum;
//     } else {
//         let sum = '';
//         for (let item of arr) {
//             sum += item + ' ';
//         }
//         return sum;
//     }
//
// }
// let arr =[]
// console.log(arr);
//
// console.log(sumArg(1, 5, 9, 12, 1, 100.56));
// console.log(sumArg(5, 9));
// console.log(sumArg('test', 'string', 'hello'));

// let checkWachek = ['Henry Every', 'Mick', 'Den', 'Alex', 'Michael', 'Katya', 'pvg'];
//
// let check = (checkWachek[(Math.floor(Math.random() * checkWachek.length))]);
// alert(check);

// let add = ((a,b)=> a+b);
// let add= (a, b) => a + b;
// let add= (a, b) => {
//     let sum = a + b;
//     let devide = a / b;
//     let result = sum - devide;
//     return result
// };
// console.log(add(5, 6));

// let a = 100;
//
// function showNumber() {
//     let a = 10;
//     console.log(a);
//     function number() {
//         let a = 5;
//         console.log(a);
//     }
//
//     number();
// }
//
// showNumber();
//
// let sum = function (a, b) {
//     return a + b;
// };
//
// sum(5,10);

// let minus = function min (a, b) {
//     return min(5,6);
// };
//
// minus();

// Clousure
// function generator(input) {
//     let number = input;
//     function rise() {
//         return number * 2;
//     }
//     return rise();
// }

// let launchFirst = generator(500);
// console.log(launchFirst);
// console.log(launchFirst);
// console.log(launchFirst);
// console.log(result());
// console.log(result());

// let launchSecond = generator(300);
// console.log(launchSecond());

// function sum (a,b) {
//     if (isNaN(a) || isNaN(b)) {
//         return;
//     } else {
//         console.log(arguments);
//         console.log(Array.from(arguments));
//         return a + b;
//
//     }
// }

// let result = sum(1,10);
// console.log(result);

//


// let x = 10;
// function foo(a) { // 5
//     let b = 20; // b 20
//
//     function bar(c) { // c 15
//         let d = 30;  // d 30
//         return boop(x + a + b + c + d);
//     }
//
//     function boop(e) { // e 80
//         return e * -1;
//     }
//
//     return bar;
// }
//
// let moar = foo(5); // Closure
// moar(15);
//
// let password = 'xh38sk';
//
// function secretPassword() {
//     let password = 'xh38sk';
//     function guessPassword(guess) {
//         if (guess === password) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     return guessPassword;
// }
// let count = 0;
// function counter() {
//     let count = 0;
//     function increment() {
//         count +=1;
//         return count;
//     }
//     return increment;
// }
// let user1 = counter();
// console.log(user1);
// let first = user1();
// let user2 = counter();
// let user2First = user2();
// let user2Second = user2();
// let user2Third = user2();
// let user2Fourth = user2();
// console.log('first user counter',first);
// console.log('second user counter',user2Fourth);


// let passwordGame = secretPassword();
// console.log(passwordGame);
// let tryOne = passwordGame('heyisthisit?');
// let tryTwo = passwordGame('xh38sk');
// console.log(tryOne);
// console.log(tryTwo);

// Guard Clause
// const printArray = function (arr) {
//     if (!Array.isArray(arr)) {
//         console.log('Error');
//         return "Error";
//     }
//     for (let value of arr) {
//         console.log(value);
//     }
// };

// printArray( [1, 2, 3, 4] ); // 1, 2, 3, 4
// printArray( [5, 10, 15, 20] ); // 5, 10, 15, 20
// console.log(printArray('some string')); // undefined

// IIFE
// LS
// (function calc() {
//     console.log("calc");
// })();


// let x = 5;
// // //
// ;(function () {
//     let x = 10;
//     let y = 20;
//
//     console.log(x);  // 10
//     console.log(y);  // 20
// })();
//
// // //
// console.log(x);  // 5
// console.log(y); // Uncaught ReferenceError, y is not defined

// function sum(a = 20, b = 10) {
//     return a + b
// }
//
// console.log(sum(5));
// cb

//  function printString(func) {
//     let str = func();
//     let sum = 5 + 6;
//     return str + sum;
// };
//
// //
// function hello() {
//     return 'Hello World';
// }
//
// function n300() {
//     return 100 + 200;
// }
//
// console.log(printString(n300));
/*
  Создайте функцию titleCase(str), которая
  получает строку и возвращает предоставленную строку
  с первой буквой каждого слова, заглавными.
  Остальные буквы слова должны быть не заглавными.
*/
// function titleCase(str) {
//     if (typeof str !== 'string'){
//         return
//     }
//     let lowCa = str.toLowerCase();
//     let splCa = lowCa.split(' ');
//     let newArra = [];
//     for (let word of splCa) {
//         let custo = word.replace(word[0],word[0].toUpperCase());
//         newArra.push(custo);
//     }
//     return newArra.join(' ')
// }
// // Вызовы функции для проверки
// console.log(
//     titleCase("I'm a little tea pot")
// ); // вернет "I'm A Little Tea Pot"
//
// console.log(
//     titleCase("sHoRt AnD sToUt")
// ); // вернет "Short And Stout".
//
/*
  Есть массив уникальных чисел uniqNumbers.

  Написать функцию, addUniqNumbers(...),
  которая получает произвольное кол-во чисел как аргументы,
  и добавляет в массив uniqNumbers только уникальные,
  а повторяющиеся игнорирует.
*/

// const uniqNumbers  = [2, 1, 4, 9];
// function addUniqNumbers() {
//     let arr = Array.from(arguments);
//     console.log(arr);
//     for(let number of arr){
//         if(!uniqNumbers.includes(number)){
//             uniqNumbers.push(number)
//         }
//     }
// }

// Вызовы функции для проверки
// addUniqNumbers(1, 2, 3);
// console.log(
//     uniqNumbers
// ); // будет [2, 1, 4, 9, 3]

// addUniqNumbers(12, 2, 3, 19);
// console.log(
//     uniqNumbers
// ); // будет [2, 1, 4, 9, 3, 12, 19]

// addUniqNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(
//     uniqNumbers
// ); // будет [2, 1, 4, 9, 3, 12, 19, 5, 8]


/*
  Создайте функцию removeFromArray(arr),
  которая получает 1 параметр, исходный массив arr.

  При вызове функции, первым аргументов всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел.

  Удалите все элементы из исходного массива,
  которые имеют такое же значение, что и аргументы.
*/

// function removeFromArray(arr) {
//     let newArr = Array.from(arguments);
//     console.log("newArr1", newArr);
//     newArr.shift();
//     console.log("newArr2", newArr);
//     for (let item of newArr){
//         if(arr.includes(item) ) {
//           let index = arr.indexOf(item);
//           arr.splice(index,1);
//         }
//     }
//     return arr;
// }


// Вызовы функции для проверки
// console.log(
//     removeFromArray([1, 2, 3, 4, 5], 2, 4)
// ); // вернет [1, 3, 5]
//
// console.log(
//     removeFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
// ); // вернет [12, 8, 17]
// const getString = function () {
//     return "Some text";
// }
//
// printString(getString); // "Some text"

// function sum(a,b) {
//     return a + b;
// }

// let sum = (a,b) => {
//     return a + b
// };
// console.log(sum(5, 10));
//
// let showText = text => console.log(text);
//
// showText('test');

// let sum = (a,b) => a + b;

// const guessNumber = (num) => {
//     const userNumber = Number( prompt('Введите число', '') );
//
//     return num === userNumber
//         ? "Поздравляем! Вы угадали секретное число"
//         : "Сожалеем! Вы не угадали секретное число";
// };
//
// const showMessage = (cb) => {
//     const secretNumber = 15;
//     const msg = cb(secretNumber);
//
//     alert(msg);
// };
// showMessage(guessNumber);

// function mylt(number) {
//     return number * 2;
// }
//
// mylt(10)
//
// function sum(parametr) {
//     let a = 5;
//     let b = parametr(a); // mylt(a)
//     return a + b;
// }
//
// let result = sum(mylt);
// console.log(result);

// recursion
//

// const pow = (base, exponent) => {
//     if (exponent === 0) return 1;
//
//     return base * pow(base, exponent - 1);
// };
//2,3
// function pow(a, b) {
//     let result = 1;
//     for (let i = 0; i < b; i +=1){
//         result = result * a;
//     }
//     return result;
// }

// console.log(pow(2, 0));
// function fac(number) {
//     if (number === 0) {
//         return 1
//     } else {
//         return number * fac(number - 1);// 3 * fac(2)=> 2 *fac(1)=> 1*fac(0)
//     }
// }
// fac(3);

//
// const pow = (2,3) =>{
//     if (3 === 0 ) return 1;
//     return 2 * pow(2,2) => {
//         if (2 === 0 ) return 1;
//         return 2 * pow(2,1) => {
//             if (1 === 0 ) return 1;
//             return 2 * pow(2,0) => {
//                 if (0 === 0 ) return 1;
//             }
//         }
//     }
// }

//
// console.log(pow(2, 3)); // 8
//
// return 2 * pow(2, 3 - 1); // 8
// return 2 * pow(2, 2 - 1); //4
// return 2 * pow(2, 0) //2


// const pow2 = (2,3) => {
//     if (exponent === 0) return 1;
//
//     return base * pow(base, exponent - 1);
// }

// map
// let numbers = [0,2,4];
// let newNumbers = numbers.map(function (element,index,arr) {
//     return element * 2;
// });
// console.log(numbers);
// console.log(newNumbers);
//
// let arrowNumbers = numbers.map(element => element*20);
// console.log(arrowNumbers);
// const addOne = arr.map(n => n + 1);
// console.log(addOne); // [1, 3, 5]
// к значению массива добавим значение позиции этого числа
// const numbers = [0, 2, 4, 6, 8, 10];
// const flipFlop = numbers.map(function (element, index) {
//     return element + index
// });
// console.log(flipFlop);
// const flipFlop = numbers.map((element, index) => element + index);
// console.log(flipFlop);
//
// const addPosition = odd.map((n, i) => n + i);
// console.log(addPosition); // [0, 3, 6, 9, 12, 15]
// // filter


// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// // const even = numbers.filter(function (el) {
// // if (el > 5) {
// //     return el
// // }
// // return el === 5 ? el : null;
// // });
// const even = numbers.filter(function (element) {
//    if (element % 2 === 0) {
//        return element
//    }
// });
// console.log(even);


// console.log(even);

// let crypto = [
//     {
//         "id": "bitcoin",
//         "name": "Bitcoin",
//         "symbol": "BTC",
//         "rank": "1",
//         "price_usd": "10033.7",
//         "price_btc": "1.0",
//         "24h_volume_usd": "9678670000.0",
//         "market_cap_usd": "168939784887",
//         "available_supply": "16837237.0",
//         "total_supply": "16837237.0",
//         "max_supply": "21000000.0",
//         "percent_change_1h": "-1.23",
//         "percent_change_24h": "-4.99",
//         "percent_change_7d": "-10.61",
//         "last_updated": "1517412569",
//         "price_eur": "8063.1114211",
//         "24h_volume_eur": "7777808248.01",
//         "market_cap_eur": "135760517954"
//     },
//     {
//         "id": "ethereum",
//         "name": "Ethereum",
//         "symbol": "ETH",
//         "rank": "2",
//         "price_usd": "1104.04",
//         "price_btc": "0.110798",
//         "24h_volume_usd": "4494890000.0",
//         "market_cap_usd": "107451537175",
//         "available_supply": "97325765.0",
//         "total_supply": "97325765.0",
//         "max_supply": null,
//         "percent_change_1h": "-0.68",
//         "percent_change_24h": "-2.67",
//         "percent_change_7d": "7.35",
//         "last_updated": "1517412553",
//         "price_eur": "887.20985612",
//         "24h_volume_eur": "3612107088.67",
//         "market_cap_eur": "86348377629.0"
//     },
//     {
//         "id": "ripple",
//         "name": "Ripple",
//         "symbol": "XRP",
//         "rank": "3",
//         "price_usd": "1.12924",
//         "price_btc": "0.00011333",
//         "24h_volume_usd": "1554730000.0",
//         "market_cap_usd": "43745789628.0",
//         "available_supply": "38739142811.0",
//         "total_supply": "99993093880.0",
//         "max_supply": "100000000000",
//         "percent_change_1h": "-0.89",
//         "percent_change_24h": "-7.66",
//         "percent_change_7d": "-17.46",
//         "last_updated": "1517412541",
//         "price_eur": "0.9074606517",
//         "24h_volume_eur": "1249385692.19",
//         "market_cap_eur": "35154247782.0"
//     },
//     {
//         "id": "bitcoin-cash",
//         "name": "Bitcoin Cash",
//         "symbol": "BCH",
//         "rank": "4",
//         "price_usd": "1487.83",
//         "price_btc": "0.149315",
//         "24h_volume_usd": "842371000.0",
//         "market_cap_usd": "25206518294.0",
//         "available_supply": "16941800.0",
//         "total_supply": "16941800.0",
//         "max_supply": "21000000.0",
//         "percent_change_1h": "-0.42",
//         "percent_change_24h": "-5.36",
//         "percent_change_7d": "-9.24",
//         "last_updated": "1517412557",
//         "price_eur": "1195.62465149",
//         "24h_volume_eur": "676931862.713",
//         "market_cap_eur": "20256033721.0"
//     },
//     {
//         "id": "cardano",
//         "name": "Cardano",
//         "symbol": "ADA",
//         "rank": "5",
//         "price_usd": "0.505419",
//         "price_btc": "0.00005072",
//         "24h_volume_usd": "597154000.0",
//         "market_cap_usd": "13104034064.0",
//         "available_supply": "25927070538.0",
//         "total_supply": "31112483745.0",
//         "max_supply": "45000000000.0",
//         "percent_change_1h": "-1.23",
//         "percent_change_24h": "-10.47",
//         "percent_change_7d": "-16.64",
//         "last_updated": "1517412559",
//         "price_eur": "0.4061562247",
//         "24h_volume_eur": "479874745.862",
//         "market_cap_eur": "10530441086.0"
//     },
//     {
//         "id": "stellar",
//         "name": "Stellar",
//         "symbol": "XLM",
//         "rank": "6",
//         "price_usd": "0.53434",
//         "price_btc": "0.00005363",
//         "24h_volume_usd": "327765000.0",
//         "market_cap_usd": "9547965379.0",
//         "available_supply": "17868707899.0",
//         "total_supply": "103649583897",
//         "max_supply": null,
//         "percent_change_1h": "-1.42",
//         "percent_change_24h": "2.74",
//         "percent_change_7d": "-4.26",
//         "last_updated": "1517412544",
//         "price_eur": "0.429397227",
//         "24h_volume_eur": "263392937.295",
//         "market_cap_eur": "7672773622.0"
//     },
//     {
//         "id": "neo",
//         "name": "NEO",
//         "symbol": "NEO",
//         "rank": "7",
//         "price_usd": "142.445",
//         "price_btc": "0.0142955",
//         "24h_volume_usd": "494648000.0",
//         "market_cap_usd": "9258925000.0",
//         "available_supply": "65000000.0",
//         "total_supply": "100000000.0",
//         "max_supply": null,
//         "percent_change_1h": "-1.13",
//         "percent_change_24h": "-7.09",
//         "percent_change_7d": "5.61",
//         "last_updated": "1517412550",
//         "price_eur": "114.469229335",
//         "24h_volume_eur": "397500616.744",
//         "market_cap_eur": "7440499907.0"
//     },
//     {
//         "id": "litecoin",
//         "name": "Litecoin",
//         "symbol": "LTC",
//         "rank": "8",
//         "price_usd": "161.029",
//         "price_btc": "0.0161605",
//         "24h_volume_usd": "488125000.0",
//         "market_cap_usd": "8857578590.0",
//         "available_supply": "55006108.0",
//         "total_supply": "55006108.0",
//         "max_supply": "84000000.0",
//         "percent_change_1h": "-1.23",
//         "percent_change_24h": "-6.03",
//         "percent_change_7d": "-10.92",
//         "last_updated": "1517412541",
//         "price_eur": "129.403387487",
//         "24h_volume_eur": "392258714.375",
//         "market_cap_eur": "7117976727.0"
//     },
//     {
//         "id": "eos",
//         "name": "EOS",
//         "symbol": "EOS",
//         "rank": "9",
//         "price_usd": "11.6079",
//         "price_btc": "0.00116494",
//         "24h_volume_usd": "1309950000.0",
//         "market_cap_usd": "7424517298.0",
//         "available_supply": "639608999.0",
//         "total_supply": "900000000.0",
//         "max_supply": "1000000000.0",
//         "percent_change_1h": "-1.54",
//         "percent_change_24h": "-9.13",
//         "percent_change_7d": "-12.95",
//         "last_updated": "1517412556",
//         "price_eur": "9.3281432637",
//         "24h_volume_eur": "1052679749.85",
//         "market_cap_eur": "5966364375.0"
//     },
//     {
//         "id": "nem",
//         "name": "NEM",
//         "symbol": "XEM",
//         "rank": "10",
//         "price_usd": "0.752723",
//         "price_btc": "0.00007554",
//         "24h_volume_usd": "56599700.0",
//         "market_cap_usd": "6774506999.0",
//         "available_supply": "8999999999.0",
//         "total_supply": "8999999999.0",
//         "max_supply": null,
//         "percent_change_1h": "-1.69",
//         "percent_change_24h": "-10.66",
//         "percent_change_7d": "-21.21",
//         "last_updated": "1517412545",
//         "price_eur": "0.604890461",
//         "24h_volume_eur": "45483688.7191",
//         "market_cap_eur": "5444014148.0"
//     }
// ];

// const filterCrypto = crypto.filter(function (element) {
//     if (element['rank'] <= 5) {
//         return element
//     }
// })

// const mapRes = filterCrypto.map(element => element['name']);
// console.log(filterCrypto);
// console.log(mapRes);

// const filterCrypto = crypto.filter(element => element['rank'] <= 5 ? element : null).map(element => element['name']);
// console.log(filterCrypto);


// const even = numbers.filter(n => n % 2 !== 0);
// console.log(even); // [1, 3, 5, 7, 9]
//
// const inventors = [
//     { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
//     { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//     { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//     { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
//     { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
//     { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
//     { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
//     { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
//     { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
//     { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
//     { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
//     { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
// ];

// let arrXIX = inventors.filter(el => el.year >1801 && el.year < 1900 ? el : null).map(el => el.first);
// console.log(arrXIX);
// console.log(inventors.length);


// // find
// const login = ['Einstein', 'Newton', 'Galilei', 'Copernicus'];
// console.log(login.indexOf('Newton'));
// let result = login[login.indexOf('Newton')];
// console.log(result);
// let findLlogin = inventors.find(function (el) {
//     return el.first === 'Nicolaus';
// });
// console.log(findLlogin);

//
// const findLogin = login.find(item => item === 'Einstein' );
// console.log(findLogin);
//
// // reduce
// const hoursWorkedPerWeek = [9, 8, 8, 8, 10, 5];

// const totalPerWeek = inventors.reduce(
//     (acc, element) => acc + (element.passed - element.year) , 0
// );
// console.log(totalPerWeek / inventors.length); // 48

// let superArr = [[1,5,10,11], [12,15,16,17], [25,65,47,89]];
//
// let flatArr = superArr.reduce((acum, element)=> acum.concat(element), [] );
//
// console.log(flatArr);
// let emptyArr = [];
// console.log(emptyArr.concat(superArr[0], superArr[1], superArr[2]));
//
// // every
//

// const money = [100,500,300,250, 5]; //[true, true, true, true]
// const go1 = money.every(function (element) {
//     return typeof element === 'number';
// });
// console.log(go1);
// const go = money.every(item => item >=100);
// console.log(go);
//
// // some
//
// const money2 = [100,500,300,250];
// const go = money2.some(function (element) {
//     return element >=500
// });
// console.log(go);
// const go2 = money2.some(item => item >=500);
// console.log(go2);
//
// // sort -1 before and 1 after
// let numbers2 = [4, 2, 5, 1, 3, 11];
// numbers2.sort(function(a, b) {
//  // if (a > b) {
//  //  return -1
//  // } else {
//  //  return 1
//  // }
//     return b - a;
// });

// [5,4,1,2]
// console.log(numbers2.sort());
// console.log(numbers2); // [1, 2, 3, 4, 5]
//

// function factorial (num){
//     if(num === 1){
//         return 1
//     }
//     return num * factorial(num-1)
// }
// console.log(factorial(5));
// function sum (num){
//     if(num === 1){
//         return 1
//     }
//     return num + sum(num-1)
// }
// console.log(sum(100));

// Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел var arr = [5, 6, 7, 8, 9];
// let arr = [5, 6, 7, 8, 9];
// let newArr = arr.map(el => { return el*el; }) // квадрат
//     .filter( el => { return el > 40 }) // фільтр більше 40
//     .reduce((curent, item) => { return curent + item }); // додавання
// console.log(newArr)
// let news = newArr.filter(function(el){
//   return el > 40
//
// })

// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля. let arr = [5, 6, 7, 8, 9];
//Якщо цифри більше нуля ?повертаємо парні, :непарні.
// let arr = [5, 6, 7, -8, 9];
// let result = arr.every(element => {
//
//     return element > 0;
// })
//
// if (result) {
//     let even = arr.filter(function (el) {
//         if (el % 2 === 0) {
//             return el;
//         }
//
//
//     })
//     console.log(even);
// }
// else {
//     let odd = arr.filter(el => {
//         // return el % 2 !== 0 ? el : null
//         if (el % 2 !== 0) {
//             return el;
//         }
//     })
//     console.log(odd);
// }
//
// console.log(result);


// calc();
// console.log(arrSum([10, 20, 100, 35]));

// Написати ф-ю що приймає аргументом строку формата '160px' і вертає строку формата '10rem'

// console.log(rem('160px')); // 10rem
// console.log(rem('16px')); // 1rem
// console.log(rem('80px')); // 5rem
// console.log(rem('8px')); // 0.5rem

// // написати ф-ї що приймає 2 параметра (розмір елемента і розмір контейнера) і повертає розмір елемента в %
// console.log(prc('160px','1600px')); // 10%
// console.log(prc('16px','1600px')); // 1%
// console.log(prc('80px','1600px')); // 5%
// console.log(prc('8px','1600px')); // 0.5%
// Написаьи ф-ю що приймає 3 параметра:
// 1) Розмір елемента - string
// 2) Розмір контейнера - string
// 3 ) одиниці виміру в які треба конвертувати - 'rem' or 'prc'

// pixelConvert(el,cont, unit);

// console.log(pixelConvert('160px', null, 'rem')); // 10rem
// console.log(pixelConvert('160px', '1600px', 'prc')); // 10%

// Написати функцію яка питає користувача яку валюту він має і в яку хоче перевести
// вказує суму і на основі курса виводиться готова сума.
// UAH, EUR, USD
// 1)Запит яку валюту має
// 2)Запит в яку валюту хоче перевести
// 3)Запит яка сума для конвертації
// 4) В замиканні зберегти 6 курсів валют
// 5) 6 перевірок в залежності від валют виводити кінцпеву суму
// 6) Перетворити введену валюту до єдиного формату
// 7) Перевірка на ціле і додатнє число.
//8 ) alert вивести суму яку він отримає.





// px to rem +
// px to % +
// universal px convertor +
// convert км в м, дм, см
// convert км а фут, дюйм, милі, ярди
// universal km convertor from to
// convert usd to eur and uah
// calculate salary
// Number.prototype.toString()
// rgb color
// parseInt()
// hex to rgb
// universal color convertor from to
// Cesar code
// closer to 0
// chart.js?
// budjet on week, month, day
// Celsius to Fahrenheit
// T(°F) = T(°C) × 9/5 + 32
//Fahrenheit to Celsius
//T(°C) = (T(°F) - 32) × 5/9
// universal temperature convertor from to
// Квадратне рівняння
// Simple interest formula
// Compound interest formula


