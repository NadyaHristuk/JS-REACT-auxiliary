// function addTwoNumbers() {
//   console.log(10 + 11);
// }
// create
// let a = 1;
// let b = 2;
// let c = 5;
// addTwoNumbers();
// function addTwoNumbers() { // function declaration
//   console.log(10 + 11);
// }

// function addTwoNumbers(num1, num2) {
//   return num1 + num2
// }

// console.log(addTwoNumbers(11,10));
// console.log(addTwoNumbers(-3, 3));
// console.log(addTwoNumbers(1, 6));



// let addThreeNumbers = function () { // function expresion
//   console.log(10 + 12 + 22);
// }

// function addTwoNumbers() {
//   // console.log(5 + 6);
//   return 5 + 6;
// }
// let functionResult = addTwoNumbers();
// let result = functionResult + c;
// console.log(result);

// let numbers = [5,6,10,25,36,12];

// function sumArray () {
//   let total = 0;
//   for (let number of numbers) {
//     total += number;
//   }
//   return total;
// }

// function addTwoNumbers(number1,number2) {
//   // console.log(5 + 6);
//   return number1 + number2;
// }

// let login = ['user', 'admin', 'dart'];
// let userName = ['superUser', 'superAdmin', 'superDart'];
// let nickName = ['user23', 'admin4569q', 'dart784545weqwe'];


// function checkLogin(array) {
//   let userStr = prompt('Enter word');
//   // let result = array.includes(userStr);
//   // return result;
//   return array.includes(userStr);
// }

// console.log(checkLogin(login));
// console.log(checkLogin(userName));
// console.log(checkLogin(nickName));


// console.log(addTwoNumbers(10,20));
// console.log(addTwoNumbers(5,7));
// console.log(addTwoNumbers(2,8));

// return
// function sumOfArray() {
//   let arr = [];
//   let total = 0;
//   for (let i = 0; i < 5; i++) {
//     let number = prompt();
//     arr.push(Number(number));
//   }
//   for (let el of arr) {
//     total += el;
//   }
//   return total;
// }
// let result = sumOfArray()
// console.log(sumOfArray());

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

// 1) Написати ф-ю яка приймає рік
// 2) Повертає нам через алерт століття.

// function convertYear (year) {
//   return Math.floor(year/100) + 1;
// }

// console.log(convertYear(2018)); // 21
// console.log(convertYear(1875)); // 19
// console.log(convertYear(675)); // 7

// function convertYear(year) {
//   // if (year % 4 === 0) {
//   //   return 'yes'
//   // } else {
//   //   return 'no'
//   // }
//   // let word = '';
//   // if (year % 4 === 0) {
//   //   word = 'yes'
//   // } else {
//   //   word = 'no'
//   // }
//   // return word;
//   return year % 4 === 0 ? 'yes' : 'no';
// }

// console.log(convertYear(2004)); // yes
// console.log(convertYear(1998)); // no
// console.log(convertYear(1991)); // no

// const century = function(year) {
//   return Math.ceil(year / 100);
// }

// console.log(century(1958)); // 20
// console.log(century(2018)); // 21
// console.log(century(1548)); // 16




// function showCentury (year) {
//     // let century = Math.ceil(year/100);
//     // return century;
//     return Math.ceil(year/100);
// }
// let userYear = +prompt('Enter year');
// console.log(showCentury(userYear));


// 1) Запитуємо в користувача роки до тих пір поки він не натисне Cancel
// 2) Всі роки які вводить користувач записується в масив years
//  3) Коли зупинився цикл потрібно перебрати масив years
// і вивести в консоль запис 
// 1952 рік - 20 століття
// 1440 рік - 15 століття
// 3,1 ) Для перетворення використати нашу ф-ю showCentury.

// function showCentury(year) {
//     let result = Math.ceil(year / 100);
//     return `${year} рік - ${result} століття`;
// }

// function convertCentury() {
//     let arr = [];
//     do {
//         let userInput = prompt('Введіть будь-який номер');
//         if (userInput === null || isNaN(userInput)) {
//             break;
//         }
//         arr.push(+userInput);
//     } while (true);

//     for (let i of arr) {
//         console.log(showCentury(i));
//     }

// }
// convertCentury();

// 1) Написати ф-ю showYear що приймає рік і перевіряє чи він є високосний
// 2) Функція повертає true якщо рік високосний і false якщо ні

// console.log(showYear(2016)); // true
// console.log(showYear(2018)); // false
// console.log(showYear(2000)); // true

// function showYear(year) {
//     // if (year % 4 === 0) {
//     //     return true
//     // } else {
//     //     return false
//     // }
//     return year % 4 === 0;
// }


// function add(a= 10, b = 100, c = 0) {
//     return a + b + c;
// }
// console.log(add(50, 60, 2));
// console.log(add());

// function m(a = 1, b = 5, c = 10) {
//     if (a === null) {
//         return b * c
//     }
//     return a * b * c
// }

// console.log(m(null, 5 , 10));
// arguments

// function add() {
//   // console.log(arguments);
//   // console.log(typeof arguments);
//   let arr = Array.from(arguments);
//   console.log(arr);
//   let total = 0;
//   for (let number of arr) {
//     total += number
//   }
//   return total;
// }
// console.log(add(5, 10, 20));
// console.log(add(1));
// console.log(add(7, 4, 5, 6, 10));

// connect(5,'q')
// connect('q');
// connect(null, 'q');

// function add(a = 1, b = 1) {
//   return a + b;
// }
// // let a = 10;
// console.log(add(5,10));
// console.log(add(100,3));
// console.log(add());
// console.log(add(8));
// console.log(add(null,8));




// function transformPxtoRem(px, fontSize) {
//   let rem = `${px/fontSize}rem`;
//   return rem;
// }
// console.log(transformPxtoRem(250,10));
// console.log(transformPxtoRem(12,12));
// console.log(transformPxtoRem(1,10));
// console.log(transformPxtoRem(1024,16));

// let logins = ['sdfs', 'a', 'b'];
// let passwords = ['112345', 'qqqqq', 'qwe'];

// function checkLogin(login, loginArr) {
//   return loginArr.includes(login);
// }

// function checkPassword(password, passwordArray) {
//   return passwordArray.includes(password);
// }

// function checkForm(checklogin, checkloginArr, checkpassword, checkpasswordArray) {
//   let loginResult = checkLogin(checklogin, checkloginArr);
//   let passwordResult = checkPassword(checkpassword, checkpasswordArray);
//   // if(checkLogin(checklogin, checkloginArr) && checkPassword(checkpassword, checkpasswordArray)) {
//   //   alert('Hello')
//   // } else {
//   //   alert('Fatal')
//   // }
//   if (loginResult && passwordResult) {
//     alert('Hello')
//   } else {
//     alert('Fatal')
//   }
// }

// checkForm('a', logins, '1111', passwords);


// function connect(par1 = 3, par2 = 5, par3 = 100) {
//   return par1 + par2 + par3;
// }
// console.log(connect(5, 6));
// console.log(connect(1, null, 3));
// console.log(connect());
// console.log(connect(5));

// function add() {
//     console.log(arguments);
//     let arr = Array.from(arguments);
//     console.log(arr);
//     let sum = 0;
//     for (let number of arr) {
//         sum = sum + number;
//     }
//     return sum;
// }
// console.log(add());
// console.log(add(5, 2));
// console.log(add(54, 12, 36, 87, 96));

// function minus(a, b) {
//     return a - b;
// }

// console.log(minus(6, 5));
// console.log(minus(5, 6));

// let a = 30;
// let b = 40;

// function addNumbers() {
//     // let a = 5;
//     // let b = 6;
//     // console.log(a);
//     // console.log(b);
//     function number2() {
//         // let a = 10;
//         // let b = 20;
//         // console.log(a);
//         // console.log(b);
//         return innerFunction();
//         function innerFunction() {
//             let a = 100;
//             let b = 200;
//             return a + b;
//         }
//     }
//     return number2();
// }
// console.log(addNumbers());
// console.log(56);




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

// function sum(a, b) {
//   return a + b
// }

// console.log(sum(10,15));
// console.log(sum(null,15));


// default parameters
// function showText(name, days) {
//     return `${name} has trial version ${days} days`;
// }
// console.log(showText());

// function showText(name = 'Jim', days = 30) {
//     return `${name} has trial version ${days} days`
// }
// console.log(showText('Mick', 20));
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

// let a = 10;

// function showNumber () {
//   let a = 20;
//   console.log(a);
//   function showAnotherNumber() {
//     let a = 30;
//     console.log(a);
//     function lastNumber () {
//       let a = 40
//       console.log(a);
//     }
//     lastNumber();
//   }
//   showAnotherNumber()
// }
// showNumber();

// function sum(a, b) {
//   return a + b;
// }

// const sum = function (a, b) {
//   return a + b;
// }

// const sum = (a, b) => {
//   return a + b
// }

// const sum = (a, b) => a + b;

// const hello = str => str + '!!!';


// Scope
// global Window
// local
// 
// const a = 20;
// const b = 10;
//
//  function add () {
//    let a = 10;
//    console.log(a);
//    function second () {
//      let a = 100;
//      console.log(b);
//      console.log(a);
//      function tr () {
//        let b = 54;
//        console.log(b);
//        console.log(a);
//      }
//      tr();
//    }
//    second();
// };
// add();




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

// let password = 'xh38sk';

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

// let passwordGame = secretPassword();
// // console.log( passwordGame );

// let result = passwordGame('qwerty');
// let tryTwo = passwordGame('xh38sk');

// let count = 0; //1 //2 //3

// function sun (a, b) {
//   return a + b;
// }

// console.log(sun);
// console.log(sun(10,20));

// function counter() {
//   let a = 0;
//   function increment() {
//     a++;
//     console.log(a);
//     // return count;
//   }
//   return increment;
// }
// let user = counter(); // 1
// let user2 = counter(); // 2

// // console.log(user);
// user();
// user();
// // console.log(user2);
// user2();
// user2();
// user2();
// user2();
// user2();
// user2();
// user2();








// console.log(user);

// user2();
// user2();
// user2();

// let user2 = counter();





// let user1 = counter(); // 1 count 0+++++++
// let user2 = counter(); // 2 count 0++++

// user1();
// user1();
// user1();


// user2();
// user2();
// user2();

// let tryOne = passwordGame('heyisthisit?');
// let tryTwo = passwordGame('xh38sk');
// console.log(tryOne);
// console.log(tryTwo);



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


//arrow function
// function add (a, b) {
//   return a + b;
// }

// const add = (a,b) => {
//   return a + b;
// }

// const add = (a, b) => a + b;

// const hello = str => str + '!'

// function add (a,b) {
//   return a + b;
// }
// function mult () {
//   console.log('mult');
//   let result = add(5,6) * 2;
//   console.log(result);
//   return result
// }
// function min () {
//   return mult() - 10;
// }
// console.log(min());
// console.log('Hello');



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
// numbers.methodName(function(element,index,arr){
//return
// })


// =========================================================
// template

// let numbers = [10, 2, 4];

// for (let el of numbers) {
//   function a () {
//     console.log(el);
//   }
//   a();
// }

// let result = numbers.method(function(el,index,arr){
//   console.log(el); // 10
//   console.log(arr[index + 1]); // 2
//   console.log(index); // 2
//   console.log(arr); //[10, 2, 4]
//   // code
//   // code
//   // code
//   // code
//   // code
// })






// map
// let money = [500, 800, 100, 400, 1000];
// let result = [];
// for (let el of money) {
//   result.push(el * 0.7);
// }
// console.log(result);

// let result = money.map(function(el){
//  return el * 0.7;
// });

// let result = money.map(el => el * 0.7);
// console.log(result);




const inventors = [{
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
// let result = [];
// for (let el of inventors) {
//   result.push(el.first);
// }
// console.log(result);

// let result = inventors.map(function(el){
//   return el.first
// });

// let result = inventors.map(el => el.first);

// filter

const numbers = [250, 1, 10, 3, 25, 5, 60, 7, 12, 9];

// let result = [];

// for (let el of numbers) {
//   if (el <= 10) {
//     result.push(el)
//   }
// }
// console.log(result);

// let result = numbers.filter(function(el){
//   if(el <= 10) {
//     return el
//   }
// })

// let result = numbers.filter(function(el){
// return el <=10;
// })

// let result = numbers.filter(el => el <=10);

// console.log(result);

// let result = numbers.find(el => el === 1000);
// console.log(result);

// let result = inventors.filter(function(el){
//   return el.year >=1800 && el.year <1900
// }).map(function(el){
//   return el.first
// })

// let result = inventors
//   .filter(el => el.year >= 1800 && el.year < 1900)
//   .map(el => el.first)

// let names  = result.map(function(el){
//  return el.first
// })
// console.log(result);


// let result = inventors.filter(function(el){
//   if(el.year >= 1800 && el.year < 1900) {
//     return el
//   }
// })

// let result = inventors
//   .filter(el => el.year >= 1800 && el.year < 1900)
//   .map(el => el.first)
// // let mapResult = result.map(el => el.first);
// console.log(result);
// // console.log(mapResult);



// find

// const numbers = [0, 1, 10, 3, 25, 5, 60, 7, 12, 9];

// let result = numbers.find(el => el > 5);
// console.log(result);

// // reduce

// const number = [250, 1, 10, 3];

// let total = 0;
// for (let el of number) {
//   total += el
// }
// console.log(total);

// let result = number.reduce(function(acc,el){
//   return acc + el
// },0)
// console.log(result);


// const hoursWorkedPerWeek = [
//     {day: 'M',number: 9},
//     {day: 'T',number: 10},
//     {day: 'W',number: 11},
//     {day: 'T',number: 5},
//     {day: 'F',number: 12}
//     ];

// let result = hoursWorkedPerWeek.reduce(function(acc, el){
//   return acc + el.number
// },0)

// let result = hoursWorkedPerWeek.reduce((acc, el) => acc + el.number,0)
// console.log(result);





// let result = hoursWorkedPerWeek.reduce(function(acc , el) {
//   return acc + el.number;
// }, 0);

// let result = hoursWorkedPerWeek.reduce((acc, el)=> acc + el.number,0);
// console.log(result);

//     // let result = hoursWorkedPerWeek.reduce(function(acc, el) {
//     //   return acc + el.number
//     // },0)

//     let result = hoursWorkedPerWeek.reduce((acc, el)=> acc + el.number, 0)

//     console.log(result);




// // let sum = 0;
// // for (let el of hoursWorkedPerWeek) {
// //     sum +=el
// // }
// // console.log(sum);
//
//     let result = hoursWorkedPerWeek.reduce(function (acc, el) {
//     return acc + el.number;
// },0);
// let arrResult = hoursWorkedPerWeek.reduce((acc, el) => acc + el.number, 0);
// console.log(result);

// let superArr = [
//   [1, 5, 58, 11],
//   [54, 15, 16, 17],
//   [2, 65, 47, 89]
// ];
// let result = superArr
//   .reduce(function (acc, el) {
//     return acc.concat(el)
//   }, [])
//   .sort(function (a, b) {
//     return a - b
//   })
//   .filter(function(el) {
//     return el >= 16
//   })

// let result = superArr
//   .reduce((acc, el) => acc.concat(el), [])
//   .sort((a, b) => a - b)
//   .filter(el => el >= 16)

// console.log(result);

// console.log(flatArr);
// let emptyArr = [];
// console.log(emptyArr.concat(superArr[0], superArr[1], superArr[2]));
//
// // every

// const temperature = [-25, -15, -30, -28, -25]; //[true, true, true, true, true]

// let result = temperature.some(el => el >=15);
// console.log(result);

// // const temperature = [-25, -15, 10, -28, 5];

// let result = temperature.some(el => el > 0);

// console.log(result);

// // sort -1 before and 1 after

// let number = [1, 250, 10, 300, 25, 5, 60, 7, 12, 9]; // [250, 10, 1]

// number.sort(function(a,b){
//   if(a < b) {
//     return 1
//   } else {
//     return -1
//   }
// })

// number.sort((a,b)=> a < b ? 1 : -1);
// number.sort((a,b)=> b - a);
// console.log(number);
// numbers.sort(function(a, b){
//   return b - a
// })

// numbers.sort((a,b)=> a - b);
// console.log(numbers);

// console.log(numbers);

// const words = ['a', 'q', 'b', 's', 'z'];

// words.sort((a,b)=> a < b ? 1 : -1)

// number.sort();
// console.log(number);

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
// convert км в м, дм, см +
// convert км а фут, дюйм, милі, ярди +
// universal km convertor from to
// calculate salary +
// Number.prototype.toString()
// rgb color
// parseInt()
// hex to rgb
// universal color convertor from to
// Cesar code
// closer to 0
// budjet on week, month, day
// Celsius to Fahrenheit
// T(°F) = T(°C) × 9/5 + 32
//Fahrenheit to Celsius
//T(°C) = (T(°F) - 32) × 5/9
// universal temperature convertor from to
// Simple interest formula
// Compound interest formula

// const products = {
//   bread: 10,
//   milk: 15,
//   apples: 20,
//   cheese: 30,
//   chicken: 40
// };

// const orderA = {
//   bread: 2,
//   apples: 4,
//   chicken: 1
// };

// const orderB = {
//   bread: 1,
//   milk: 2,
//   cheese: 3
// };

// // // Вызовы функции для проверки
// console.log(getTotalPrice(products, orderA)); // 140

// console.log(getTotalPrice(products, orderB)); // 130

// function getTotalPrice(products, order) {
//   let list = Object.keys(order);
//   let result = list.map(key => products[key] * order[key]);
//   let sum = result.reduce((acc, el) => acc + el, 0);
//   return sum;
// }

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
// inventors.sort((a,b)=> a.first > b.first ? 1 : -1);
// console.log(inventors);
/*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */

/*
  Функция findGreaterThan получает два аргумента - число и массив.
  Возвращает новый массив, содержащий элементы которые больше числа.
*/
// const findGreaterThan = (num, arr) => {
//     const result = [];
//
//     for (let i = 0, max = arr.length; i < max; i += 1) {
//         if (arr[i] > num) {
//             result.push(arr[i]);
//         }
//     }
//
//     return result;
// };
// const findGreaterThen = (num, arr) => arr.filter(item => item > num);
//
// console.log( findGreaterThen(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
// console.log( findGreaterThen(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
// console.log( findGreaterThen(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5,]

/*
  Функция multiplyBy принимает два аргумента - число и массив.
  Возвращает массив все значения которого умножены на число.
*/
/*const multiplyBy = (num, arr) => {
    let result = [];

    for (let i = 0, max = arr.length; i < max; i += 1) {
        result.push(arr[i] * num);
    }

    return result;
};*/
/*const multiplyBy = (num, arr) => {
 return  arr.map(function (item) {
     return item * num;
    })
}*/
/*
const multiplyBy = (num, arr) => arr.map(item =>item * num);

console.log( multiplyBy(2, [1, 2, 3, 4, 5]) ); // [2, 4, 6, 8, 10]
console.log( multiplyBy(3, [1, 2, 3, 4, 5]) ); // [3, 6, 9, 12, 15]
console.log( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]
*/

/*
  Функция summAllNumbers принимает любое число аргументов.
  Возвращает число - сумму всех аргументов.
*/

/*function summAllNumbers(...args) {
    let accumulator = 0;

    for (let i = 0, max = args.length; i < max; i += 1) {
        accumulator += args[i];
    }

    return accumulator;
}*/
/*function summAllNumbers(...args){
    let newResult = args.reduce(function(accum, item){
        return accum + item;
    });
    return newResult;
}*/

/*let summAllNumbers = (...args)=> args.reduce((accum, item ) => accum + item, 0);


console.log( summAllNumbers(1, 2, 3) ); // 6
console.log( summAllNumbers(1, 2, 3, 4) ); // 10
console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15*/

/*
  Функция findEvery получает два аргумента - число и массив.
  Возвращает true если все элементы массива больше или равны числу.
  Иначе если есть хоть один элемент меньше числа, то возвращается false.
*/
/*const findEvery = (num, arr) => {
    for (let i = 0, max = arr.length; i < max; i += 1) {
        if (arr[i] < num) {
            return false;
        }
    }

    return true;
};*/
//  const findEvery = (num ,arr) => arr.every((item) => item >= num);
//
//
// console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
// console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
// console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true


/*
  Напишите функию getPropValues(arr, prop), принимающую
  параметры arr - массив, и prop - имя ключа в объекте.

  Функция должна возвращать массив всех значений этого ключа из arr.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
// ];
//
// // Вызовы функции для проверки
//
// const getPropValues = (arr, prop) => arr.map(elem => elem[prop]);
//
// console.log( getPropValues(guests, "name") ); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
//
// console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]
//
// console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]

/*
  Напишите функию getActiveGuests(guests), принимающую
  один параметр guests - массив объектов гостей.

  Функция должна возвращать массив объектов гостей,
  значение поля isActive которых true.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
// ];

// Вызовы функции для проверки
// const getActiveGuests = (guests) => {
//     return guests.filter(function (el) {
//         if (el.isActive === true) {
//             return el
//         }
//     })
// }

// //arrow func
// const getActiveGuests = (guests) => guests.filter(el => el.isActive === true ? el : null)
//
// console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax


/*
  Напишите функцию getGuestsOlderThan(guests, age), где
  guests - массив объектов гостей, age - предел возраста
  для сортировки.

  Функция возвращает массив объектов значение свойства
  age которых больше чем параметр age.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
// ];

// Вызовы функции для проверки
// const getGuestsOlderThan = (guests, age) => {
//     return guests.filter (function (el) {
//         if (el.age > age) {
//             return el
//         }
//     })
// }

//arrow func
// const getGuestsOlderThan = (guests, age) => guests.filter(el => el.age > age ? el : null)
//
// console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey
//
// console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]
//
// console.log(getGuestsOlderThan(guests, 55)); // []


// const users = [
//     {
//         id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         phone: '+1 (848) 556-2344',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         skills: ['ipsum', 'lorem'],
//         gender: 'male',
//         age: 37,
//     },
//     {
//         id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         phone: '+1 (855) 582-2464',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//         gender: 'female',
//         age: 34,
//     },
//     {
//         id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         phone: '+1 (814) 593-3825',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//         gender: 'male',
//         age: 24,
//     },
//     {
//         id: '249b6175-5c30-44c6-b154-f120923736f5',
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         phone: '+1 (909) 547-2687',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         skills: ['adipisicing', 'irure', 'velit'],
//         gender: 'female',
//         age: 21,
//     },
//     {
//         id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         phone: '+1 (956) 512-2693',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         skills: ['ex', 'culpa', 'nostrud'],
//         gender: 'male',
//         age: 27,
//     },
//     {
//         guid: '150b00fb-dd82-427d-9faf-2879ea87c695',
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         phone: '+1 (876) 411-2433',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         skills: ['non', 'amet', 'ipsum'],
//         gender: 'male',
//         age: 38,
//     },
//     {
//         id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         phone: '+1 (979) 504-2554',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         skills: ['lorem', 'veniam', 'culpa'],
//         gender: 'female',
//         age: 39,
//     },
// ];

// const getAllSkills = arr => {
//     return arr
//         .map(item => item.skills)
//         .reduce((acc, el) => [...acc, ...el])
//         .sort()
//         .filter((item, index, arr) => item !== arr[index + 1]);
// };

// console.log(getAllSkills(users));

/*
  Напишите функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/
// // ===== звичайна функція ====
// // function checkForSpam (str) {
// //     let smallWords = str.toLowerCase();
// //     if (smallWords.includes('spam') || smallWords.includes('sale')) {
// //         return true;
// //     } else {
// //         return false;
// //     }
// // }

// //=== тернарний оператор ====
// // function checkForSpam (str) {
// //     let smallWords = str.toLowerCase();
// //     return smallWords.includes('spam') || smallWords.includes('sale');
// // }

// // ====== стрелочна функція ====== 

// // const checkForSpam = (str) => {
// //     let smallWords = str.toLowerCase();
// //     return smallWords.includes('spam') || smallWords.includes('sale');
// // }


// // ==== стрелочна функція без {} та 'retutn' ====

// // const checkForSpam = str => str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale');


// // Вызовы функции для проверки
// console.log( checkForSpam('Latest technology news') ); // false

// console.log( checkForSpam('JavaScript weekly newsletter') ); // false

// console.log( checkForSpam('Get best sale offers now!') ); // true

// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true


// 1) Наприсати ф-ю celsiusVsFahrenheit в якої перший аргумент це масив температур в Україні по цельсію. Другий аргумент це масив температур по фаренгейту в Палау
// 2) Функція має вивести скільки разів в Палау було тепліше ніж в Україні


// function celsiusVsFahrenheit(yourTemps, friendsTemps) {
//     let count = 0;
//     for(let i = 0; i < friendsTemps.length; i+=1) {
//         if (friendsTemps[i] > 9 * yourTemps[i] / 5 +32 ) {
//             count +=1;
//         }
//     }
//     console.log(count);
//     return count;
// }


// celsiusVsFahrenheit([25, 32, 31, 27, 30, 23, 27], [78, 83, 86, 88, 86, 89, 79]) // 3

// celsiusVsFahrenheit([26], [77]) // 0
// celsiusVsFahrenheit([-11, -4, 13], [100, 82, 53]) // 2
// celsiusVsFahrenheit([-42, 0, -30, 0, 29, 43, 25, 32, 8, -37], [1, 87, 52, 72, 48, 42, 116, -45, -26, 79]) // 6
// celsiusVsFahrenheit([25, 24, 33, 26, 15, 17, 22, 21, 28, 22, 33, 30, 21, 32, 19, 20, 32, 33, 17, 23], [54, 59, 70, 70, 74, 67, 74, 52, 74, 76, 69, 66, 58, 70, 65, 76, 57, 51, 58, 59]) // 5
// celsiusVsFahrenheit([2, 3, 7], [23, 37, 72]) //1

// console.log(removeFromArray([25, 20, 5, 15, 10, 30], 5, 10, 12));

// function removeFromArray(arr) {
//   let args = Array.from(arguments).slice(1);
//   for (let el of args) {
//     if (arr.includes(el)) {
//       arr.splice(arr.indexOf(el), 1);
//     }
//   }
//   return arr;
// }

// let numbersArr = [5,10,20,30,40];
// let checkNumber = 10;

// function checkArr(arr, num) {
//   if(arr.includes(num)) {
//     return true
//   } else {
//     return false
//   }
// }

// function showResult(array, number) {
//   let result = checkArr(array, number);
//   if(result) {
//     console.log('Hello');
//   } else {
//     console.log('Error');
//   }
// }


// showResult(numbersArr, checkNumber)

// let a = 5;
// let b = 2;

// function show() {
//   let a = 50;
//   let b = 100;
//   console.log(a);
//   console.log(b);

//   function innerFunction() {
//     let a = 200;
//     let b = 300;
//     console.log(a);
//     console.log(b);

//     function lastFunction() {
//       let a = 20;
//       let b = 30;
//       console.log(a);
//       console.log(b);
//     }
//     return lastFunction()
//   }
//   return innerFunction()
// }

// show()

// function add(a, b) {
//   return a + b;
// }

// const add = (a, b) => {
//   return a + b
// }

// const add = (a, b) => a + b;

// const add = (a, b) => a > b ? 10 : 20;

// const showStr = str => `${str}!`;

// const hello = () => 'Hello world';

// function greet (callback) {
//   let code = callback();
//   return code + '!!!!!!!'
// }



// console.log(greet(function() {
//   let a = 5;
//   return 'dasdasdas' + a;
// }));

// let a = 10;
// let b = 20;

// function showNumber() {
//   let a = 50;
//   console.log(a); 
//   console.log(b); 

//   // function secondLog() {
//   //   // let a = 30;
//   //   // let b = 120;
//   //   let c = 800;
//   //   console.log(a); 
//   //   console.log(b); 

//   //   function third() {
//   //     // let a = 500;
//   //     // let b = 135;
//   //     console.log(a); 
//   //     console.log(b);
//   //     console.log(c);
//   //   }
//   //   third();
//   // }
//   // secondLog()
// }

// fetch('http://api.football-api.com/2.0/matches?comp_id=1204&from_date=18.01.2019&to_date=20.01.2019&Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76')
// .then((res)=> res.json())
// .then(data => console.log(data))


//1204
// https://football-api.com/documentation2/#!/Matches/get_matches
// 'http://api.football-api.com/2.0/competitions?Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76'


// Написати ф - ю яка знаходить в масиві число яке найблище знаходиться до нуля і повертає його.Якщо таких чисел 2(тобто 1 і - 1) тоді повертати додатнє
// function closestToZero (nums) {
//   let posNum = [];
//   for (let el of nums){
//     posNum.push(Math.abs(el));
//   }
//   let minNum = posNum[0];
//   // let min = Math.min(...posNum); // Math.min(5,3,1,2,3,5)
//   for(let item of posNum){
//     if(item < minNum) {
//       minNum = item;
//     }
//   }
//   return !nums.includes(minNum) ? minNum * -1 : minNum;
// }

// console.log(closestToZero([-5, -3, 1, 2, 3, 5])) // 1
// console.log(closestToZero([-2, 3, 5, 10])) // -2
// console.log(closestToZero([-7, -5, -3, 3, 5, 8])) //3

// #6 
// Дан непустой массив целых чисел (X). В этой задаче вам нужно вернуть массив, состоящий только из неуникальных элементов данного массива. Для этого необходимо удалить все уникальные элементы (которые присутствуют в данном массиве только один раз). Для решения этой задачи не меняйте оригинальный порядок элементов. Пример: [1, 2, 3, 1, 3], где 1 и 3 неуникальные элементы и результат будет [1, 3, 1, 3].

// nonUniqueElements([1, 2, 3, 1, 3]) // [1, 3, 1, 3]
// nonUniqueElements([1, 2, 3, 4, 5]) // []
// nonUniqueElements([5, 5, 5, 5, 5]) // [5, 5, 5, 5, 5]
// nonUniqueElements([10, 9, 10, 10, 9, 8]) // [10, 9, 10, 10, 9]