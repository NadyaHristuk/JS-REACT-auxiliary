// console.log(Math.floor(2.99));
// console.log(Math.ceil(2.000000000001));
// console.log(Math.round(2.499999));
// console.log(Math.abs(10));
// console.log(Math.pow(9,2));
// console.log(Math.sqrt(4));
// console.log(Math.max(-50,-40));
// console.log(Math.min(9/12,3/4));
// console.log(Math.floor(Math.random()*500)+501);
// console.log(Math.floor(Math.random()*100)+1);

// 0 - 1
// let randomNumber = Math.floor(Math.random()*100)+ 1;
// console.log(randomNumber);

// let password = prompt('Enter password');
// console.log(password.length >= 4);


// let a = 5;
// let b = '5';
// console.log(a == b);
// console.log(a === b); 

// let a = 1;
// let b = '1';
// console.log(a === b);
// console.log(a == b);

//
// let a = NaN,
//     b = NaN;
// // console.log(a != b);
// // console.log(a !== b);
// console.log(a == b);
// console.log(a === b);

// let a = 0,
// b = null;
// // //
// console.log(a == b);
// console.log(a === b);
//
// let a = null,
// b = null;
// console.log(a == b);
// console.log(a === b);

// let a = null,
// b = undefined;

// console.log(a == b);
// console.log(a === b);

// let a = 0,
// b = undefined;
// console.log(a == b);
// console.log(a === b);
//
// let a = 'a',
//     b = null;
// console.log(a == b);
// console.log(a === b);

// let a = '0',
//     b = 0;
// console.log(a == b);
// console.log(a === b);

// let a = 'H';
// let b = 'h';

// console.log(a == b);
// console.log(a === b);

// let c = "Hello";
// let d = "Hello";
// console.log(c == d);
// console.log(c === d);

// let a = 5;
// let b = 10;

// console.log(a >= b);

// || or 
// && and
// ! not

// console.log('Отримав відпустку' && "Квитки" && 'Train');
// console.log('Отримав відпустку' || "Квитки" || 'Train');

// false
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(-0));
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(false));

// true
// console.log(Boolean('add'));
// console.log(Boolean(Infinity));
// console.log(Boolean(' '));
// console.log(Boolean(-5));

// console.log(0 || '' || '0');
// console.log(0 || null || '0');
// console.log(0 || undefined || null);
// console.log(4 + 5 === 8 || 5 * 4 === '20' || 'q' + 'w' === 'w');
// console.log(0 || '' || 0);
// console.log(0 || null || 'undefined'); 
// console.log(NaN || null || 5);
// console.log(28 || null || '');
// console.log(Infinity || 55 || NaN);
// console.log(undefined || 'true' || NaN);

// console.log('a' && 1 && 0);
// console.log('a' && 1 && 2);
// console.log('a' && 0 && 2);
// console.log('0' && NaN && 2);
// console.log('' && NaN && 2);
// console.log(' ' && NaN && 2);
// console.log({age:25} && 'null' && 2);
// console.log({age:25} && null && 2);
// console.log({age:25} && undefined && 2);
// console.log({age:25} && 8 && -Infinity);
// console.log(false && 'false' && -Infinity);
// console.log('true' && -0 && null);
// console.log(a = 5 + 6);

// let value = prompt('Enter month`s number');
// let month = Number(value);
// if(month === 1 || month === 2 || month === 12) {
//     alert('Winter');
// } else if (month === 3 || month === 4 || month === 5) {
//     alert('Spring');
// } else if (month === 6 || month === 7 || month === 8) {
//     alert ('Summer');
// } else if (month === 9 || month === 10 || month === 11) {
//     alert ('Autumn');
// } else {
//     alert ('Enter number from 1 to 12');
// }

// switch (month) {
//     case 1:
//         alert('Winter');
//         break;
//     case 2:
//         alert('Winter');
//         break;
//     case 12:
//         alert('Winter');
//         break;
//     case 3:
//     case 4:
//     case 5:
//         alert('Spring');
//         break;
//     case 6:
//     case 7:
//     case 8:
//         alert('Summer');
//         break;
//     case 9:
//     case 10:
//     case 11:
//         alert('Autumn');
//         break;
//     default:
//         alert('Enter number from 1 to 12')
//         break;
// }
// 
// let a =5;
// let b = 10;
// let result = a > b ? 'Hello' : 'Bye';
// let result = a > b ? 'Hello' : a < b ? 'Good' : a === b ? 'Equal' : 'Bye';
// console.log(result);

// if (yourMoney >= 20000) {
//     alert('Welcomen Turkey');
// } else if (yourMoney >= 15000 && yourMoney < 20000) {
//     alert('Welcomen to Egypt');
// } else if ( yourMoney > 10000 && yourMoney < 15000 ) {
//     alert('Welcomen to Bulgaria');
// } else if ( yourMoney === 10000) {
//     alert ('Welcome to Tryskavets')
// } else {
//     alert('Go to work');
// }



// let month = +prompt('Введи номер місяця');
// console.log(month);
// if (month === 12 || month === 1 || month === 2) {
//     console.log('Зима')
// }
// else if (month === 3 || month === 4 || month === 5) {
//     console.log('Весна')
// }
// else if (month === 6 || month === 7 || month === 8) {
//     console.log('Літо')
// }
// else if (month === 9 || month === 10 || month === 11) {
//     console.log('Осінь')
// }
// else {
//     console.log('Error')
// }

// let condition = true;
//
// if (condition) {
//     console.log('Evrika');
// }


// let condition = false;
//
// if (condition) {
//     console.log('Evrika');
// }

// let condition = true;
//
// if (condition) {
//     console.log('Evrika');
// } else {
//     console.log('Losser');
// }

// let condition = false;
//
// if (condition) {
//     console.log('Evrika');
// } else {
//     console.log('Losser');
// }

// let car = prompt('Enter car brend');
//
// if (car === 'Audi') {
//     console.log('Хороша машина');
// } else if (car === "Zaporojets") {
//     console.log('Для села підійде');
// } else {
//     console.log('Пішохід');
// }
// f
// let car = prompt('Enter car brend');
//
// if (car === 'Audi' || 'BMW' || 'Opel') {
//     console.log('Хороша машина');
// } else if (car === "Zaporojets" || "Traktor") {
//     console.log('Для села підійде');
// } else {
//     console.log('Пішохід');
// }

//
// let car = prompt('Enter car brend');
//
// if (car === 'Audi' || car === 'BMW' || car === 'Opel') {
//     console.log('Хороша машина');
// } else if (car === "Zaporojets" || car === "Traktor") {
//     console.log('Для села підійде');
// } else {
//     console.log('Пішохід');
// }

//
// let myTime = prompt("what hour is it?");
//
// if(myTime >= 8 && myTime < 12) {
//     console.log("Wake up its morning");
// } else if (myTime >= 12 && myTime < 13) {
//     console.log("go to Lunch");
// } else if (myTime >= 13 && myTime <= 16) {
//     console.log("Go to work");
// } else if (myTime >16 && myTime < 20) {
//     console.log("Dinner Time");
// } else if (myTime >= 22) {
//     console.log("Time to go to sleep");
// } else {
//     console.log("You should be sleeping");
// }
//
// let luckyNumber = 1;
// if (luckyNumber === 1) {
//     console.log('more');
// } else if (luckyNumber === 3) {
//     console.log('little more');
// } else if (luckyNumber === 7) {
//     console.log('You win');
// } else {
//     console.log('try again');
// }
// switch (luckyNumber) {
//     case 1:
//     case 2:
//         console.log('more');
//         break;
//     case 3:
//         console.log('little more');
//         break;
//     case 7:
//         console.log('You win');
//         break;
//     default:
//         console.log('try again');
//         break;
// }


// switch (luckyNumber) {
//     case 1:
//         console.log('test');
//         break;
//     case 8:
//         console.log("this is 8");
//         break;
//     case 7:
//         console.log("You win");
//         break;
//     default:
//         console.log('error');
//         break;
// }
//
// if (luckyNumber === 1) {
//     console.log('it is one');
// } else if (luckyNumber === 8) {
//     console.log("this is 8");
// } else if (luckyNumber === 7) {
//     console.log("You win");
// } else {
//     console.log('error');
// }
// let a = 5;
// let b = 5;
//
// switch (a) {
//     case b:
//         console.log('true');
//         break;
//     default:
//         console.log('false');
// }
// switch (luckyNumber) {
//     case 1 :
//         console.log('it is 1');
//         break;
//     case 8:
//         console.log('It is 8');
//         break;
//     default:
//         console.log('default');
//         break;
// }
// забрати break


// if (a === b) {
//     console.log('true');
// } else if (a > b ) {
//     console.log('Up');
// } else  {
//     console.log('fale');
// }

//
// let result = a === b ? 'true' : a > b ? 'Up' : 'false';
// console.log(result);

// let str = null;
// if (6 > 5) {
//     str = 'Evrika'
// } else {
//     str = 'Loser'
// }
// console.log(str);

// let str = 6 > 5 ? 'Evrica' : 'Loser';
// console.log(str);

// let test = 5 > 6 ? 'Evrika' : 'Too bad';
// console.log(test);

// let color = prompt('Enter color');
// //
// let result = color === 'white' || color === 'red' || color === 'green' ? "Day" : "Night";
// console.log(result);

// let num = 5;
//
// let result = num === '5' ? 'Evrika' : num === '4' ? 'Loser' : 'Fail';



// 1 && '5' & 2
// 'a'&& null & '0'
// 1 && undefined & 5

// ask a question
// random number for random response
// use switch to create some random responses
// output the response back with the question


// let question = prompt("Запитай мене");
// let randomNumber = Math.floor(Math.random()*6);
// switch (randomNumber){
//     case 0:
//         answer = "Все буде ок";
//         break;
//     case 1:
//         answer = "Може бути, може бути, і ні";
//         break;
//     case 2:
//         answer = "Напевно ні";
//         break;
//     case 3:
//         answer = "Дуже ймовірно";
//         break;
//     default:
//         answer = "Я не знаю про це нічого";
// }
//
// document.write(`Поставлене питання "${question}" <br/> шар думає що "${answer}"`);
//


// player choice
// computer choice
// Tie check
// player win combinations
// computer win combinations
// document.write result


//
// let player = prompt("Камінь, Ножиці, Папір");
// let ps = player.toUpperCase();
//
// let computer = Math.random();
// if (computer < 0.34) {
//     computer = "Камінь";
// }
// else if (computer < 0.67) {
//     computer = "Папір";
// }
// else {
//     computer = "Ножиці";
// }
// let cs = computer.toUpperCase();
// console.log(computer);
//
// if (cs === ps) {
//     console.log("Нічия");
// }
// else {
//     if (ps === "KАМІНЬ" && cs === "HОЖИЦІ") {
//         console.log('Ти виграв');
//     }
//     else if (ps === "ПАПІР" && cs === "KАМІНЬ") {
//         console.log('Ти виграв');
//     }
//     else if (ps === 'НОЖИЦІ' && cs === "ПАПІР") {
//         console.log('Ти виграв');
//     } else {
//         console.log('Ти програв');
//     }
// }

/*
1) Попросити користувача ввести пору року +
2) Якщо ввели Зима - виводимо на екран слово "Холодно"
3) Якщо ввели Літо - виводимо на екран слово "Жарко"
4) Якщо ввели Осінь - виводимо на екран слово "Дощі"
5) Якщо ввели Весна - виводимо на екран слово "Квіточки"
*/
// let season = prompt('Enter season').toLowerCase();
// if (season === 'зима') {
//     alert('Холодно');
// } else if (season === 'літо') {
//     alert('Жарко');
// } else if (season === 'осінь') {
//     alert('Дощі');
// } else if (season === 'весна'){
//     alert('Квіточки');
// } else {
//     alert('Wrong season');
// }

// switch (season) {
//     case 'зима':
//         alert('Холодно');
//         break;
//     case 'літо':
//         alert('Жарко');
//         break;
//     case 'осінь':
//         alert('Дощі');
//         break;
//     case 'весна':
//         alert('Квіточки');
//         break;
//     default:
//         alert('Wrong season');
// }


// let login = prompt('Enter login');

// if (login.length >= 4) {
//     alert('Congratulation you in');
// } else {
//     alert('Enter larger login')
// }

// login.length >= 4 ? alert('Congratulation you in') : alert('Enter larger login');

// season === 'зима' ? alert('Холодно') : season === 'літо' ? alert('Жарко') :season === 'весна' ? alert('Квіточки') : season === 'осінь' ? alert('Дощі') : alert('Wrong season');

// написати гру Камінь-Ножиці-Папір
// 1.1 Комп'ютер загадує один з трьох варіантів випадково.
// 1.2 Юзер вводить свій варіант.
// 1.3 Алертом показуємо переможця.

// етап №1 
// Написати код щоб комп'ютер виводив в консоль випадкову фразу "Камінь-Ножиці-Папір" (random)
// етап №2
// Запитати в користувача його варіант "Камінь-Ножиці-Папір" (prompt)
// етап №3
// Зробити первірку варіанта від комп'ютера і юзера і вивести алертом переможця
// (Якщо варіанти співпали вивести фразу "Нічия") (if and switch)
// етап №4 
// Якщо користувач вводить не коректне слово вивдиться алерт "Я так не граю";


// 1) Питаємся в користувача яка в нього є валюта
// 2) Питаємся в яку він хоче перевести
// 3) Питаємся яку суму хоче поміняти 
// 4) Вивести на екран суму яка вийшла. 
// usd eur uah
// const USD_UAH = 28.3;
// const UAH_USD = 1 / USD_UAH;
// const EUR_UAH = 30;
// const UAH_EUR = 1 / EUR_UAH;