'use strict'
// JS чутливий до регістру


// var year = 2018;
// let month = "November";
// const date = 27;
// let number = 10;
// let Number = 50;
// let numBer = 100;

// let peoplename = 'Bob';
// let peopleName = 'Bob';

// const UAH = 8;



//  ;jadf;dfjd
/*
skdf;sdkfsdfksdk;flskd
lsjdflsdjflsdjflsdjflj
dfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf
sdfsdfsdfsdfsdfsd
*/

// let word = 'JS';
// let number = 20;
// let bool = true;
// let n = null;
// let a = undefined;

// let coffe = {
// //   id: Symbol('Americano'),
//   name: 'Americano',
//   price: 15,
//   curency: 'UAH',
//   milk: true

// }

// typeof
// let w = 'JS';
// let num = 5;
// let b = true;
// let un = undefined;
// let empty = null;
// console.log(typeof w);
// console.log(typeof num);
// console.log(typeof b);
// console.log(typeof un);
// console.log(typeof empty);
// console.log(typeof coffe);

// let answer = prompt('Enter your name');
// console.log(answer);
// let answer2 = confirm('Are you happy?');
// console.log(answer2);


// Create variables

// var x = 5;
// console.log('varX',x);
// let y = 10;
// console.log('let y',y);
// const z = 50;
// console.log('const z',z);

// const

// var x = 5;
// x = 20;
// console.log(x);
// let y = 10;
// y = 30;
// console.log(y);
// const z = 50;
// z = 60;
// console.log(z);



// duplicate declared
// var x = 5;
// var x = 10;
// console.log(x);

// let y = 20;
// let y = 30;
// console.log(y); // Error

// const z = 50;
// const z = 60;
// console.log(z); // Error


// if(true) {
//     var a = 10;
//     console.log(a);
// }

// console.log(a);

// Hoisting

// console.log(x); // undefined
// var x;
// x = 5;
// var x = 5;

// console.log(y); // is not defined
// let y = 10;
// console.log('Hello');

// console.log(z); // is not defined
// const z = 50;

// +
//
// let a = 5;
// a = a + 1;
// a += 2;
// a = a + 2;
// console.log(a++);
// console.log(a);
// console.log(++a);

// let b = 10;
// let c = '12';
// console.log(c + b + a); // 15
// let a = 5;
// a = a + 5;
// console.log(a);
// a += 5;
// a -= 3;
// console.log(a++); // 5
// console.log(a); // 6
// console.log(++a); // 7
// console.log(a++);
// a--;
// // let c = a + b;
// // a = c;
// // a += b
// console.log('after', a);

// let a = 5;
// console.log(a++); // 5
// console.log(a);
// console.log(++a); // 7

// let a = 'Join ';
// let b = 'us';
// let c = ' ';
// console.log(a + b); // Join us*/
// console.log(typeof a + b)


// let a = 3;
// let b = ' join';
// let c = ' ';
// console.log(a + b); // 3 join

// let a = true;
// let b = ' join';
// console.log(a + b); // true join

// let a = 12;
// let b = '1';
// console.log(a + b); // 121

// let a = true;
// let b = 12;
// console.log(a + b); //13

// let a = true;
// let b = true;
// console.log(a + b); //2

// let a = true;
// let b = false;
// console.log(a + b); // 1

// let a = 12;
// let b = null;
// console.log(a + b); //12

// let a = undefined;
// let b = 10;
// console.log(a + b); //NaN
// console.log(typeof NaN);

// console.log((5 + 5 + 'a') + undefined);
// let a = undefined;
// let b = ' join';
// console.log(a + b); // undefined join

// -

// let a = 10;
// // a--;
// console.log(a--); //9
// console.log(--a);

// let a = 'join us';
// let b = 'us';
// console.log(a - b); // NaN

// let a = 10;
// let b = '2';
// console.log(b - a);

// *

// let a = 10;
// console.log(a**); // error

// let a = 2;
// let b = '2.2';
// console.log(a * b); // 4.4

// let a = 2;
// let b = 'start';
// console.log(a * b); //NaN

// let a = 5;
// let b = null;
// console.log(a * b); // 0

// let a = 5;
// let b = undefined;
// console.log(a * b);

// let a = Infinity;
// let b = 0;
// console.log(a * b);

// /
// let a = 10;
// let b = '2';
// console.log(a / b); // 5


// let a = 10;
// let b = 'two';
// console.log(a / b); // NaN

// let a = 10;
// let b = 0;
// console.log(a / b); // Infinity


// let a = 10;
// let b = Infinity;
// console.log(a / b); //0

//  %
// let a = 10;
// let b = 3;
// console.log(a % b); //1

// let a = 2.1;
// let b = 2.55;
// console.log(a * b);
// let c = (a * b).toFixed(3);
// console.log(+c);
// // let c = a * b;
// console.log(Number(c));
// console.log(Number('qwe'));

// parseInt, parseFloat
// let font = '2.578964rem';
// console.log(parseInt(font));
// console.log(parseFloat(font));

// console.log(parseInt('10.5px'));
// console.log(parseInt('10px'));
// console.log(parseFloat('25.5px'));
// console.log(parseInt('aas20'));
// console.log(parseFloat('a25.5'));

// console.log(isNaN('qwerty'));
// console.log(isNaN(5));

// let name = prompt('Enter your name').trim();
// let lastName = prompt('Enter your last name');
// let age = prompt('Enter your age');

// console.log('User\'s full name is ' + name + ' ' + lastName + '. ' + 'He is ' + age + ' years old.');

// console.log(`User's full name is ${name} ${lastName}. He is ${age} years old.`);


// let str = 'hello world!!!!';
// console.log(str.length);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.includes('Hello world'));
// console.log(str[6]);
// console.log(str.indexOf('world'));
// let arr = str.split(' ');
// console.log(arr);
// let strNew = arr.join(' ');
// console.log(strNew);
// let str = 'The quick red fox jumped over the lazy dog\'s back.';
// let q = str.substring(0,3);
// console.log(q);
// console.log(str);
// let w = str.substr(0,3);
// console.log(str);
// console.log(str.slice(0,3));
// console.log(str);

// let day = 18;
// let month = 6;
// let year = 2018;
// console.log(`date = ${day}\\0${month}\\${year}`);

//
// console.log(`My name is ${name} and i am ${age}`);
// let str = 'join';
// let str2 = 'us';
// let str3 = '';
// console.log(str + str2 + str3);
// console.log(`Please ${str} ${str2}`);

// let b = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis dolores impedit molestiae nesciunt numquam placeat qui recusandae! Amet culpa eos iusto perferendis reiciendis sunt velit voluptatem. Commodi, esse, tempora?';

// console.log(b.length);
// let a = 'Hello';
// console.log(a.length);
// console.log(b[12]);

// let c = 'Hello';
// console.log(c.toLowerCase());
// console.log(c.toUpperCase());

// let d = 'Hello World';
// let splitWord = d.split(' ');
// console.log(splitWord);
// console.log(splitWord.join('-'));

// let a = 'heroplus';
// console.log(a.substring(1,3));
// console.log(a.substr(4, 4));