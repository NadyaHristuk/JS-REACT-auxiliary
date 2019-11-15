// default parameters
// function showText(name, days) {
//     return `${name} has trial version ${days} days`;
// }
// console.log(showText());

// function showText(name = 'Jim', days = 30) {
//     return `${name} has trial version ${days} days`
// }
// console.log(showText('Mick', 20));


// arrow function

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


// scope 


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

// clousure
// function counter() {
//     let a = 0;
//     function increment() {
//       a++;
//       console.log(a);
//       // return count;
//     }
//     return increment;
//   }
  
  
//   let user = counter();
//   let user2 = counter();
//   console.log(user);
//   user();
//   user();
//   user2();
//   user2();
//   user2();
  
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
