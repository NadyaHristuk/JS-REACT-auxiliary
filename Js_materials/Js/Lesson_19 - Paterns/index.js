// IIFE
// let x = 5;
// ;(function () {
//     let x = 10;
//     let y = 20;

//     console.log(x);
//     console.log(y);

//     function add (a, b) {
//         return a + b
//     }

//     // console.log(add(5,10));
// })();

// console.log(add(5,10));
// console.log(x);
// console.log(y);

// Anonymous closure

// const globalVar = 'I am a global variable!';
// (function () {
//     // Переменные и методы внутри будут приватными
//     const grades = [80, 45, 75, 64, 53, 82];

//     const average = () => {
//         const total = grades.reduce((acc, grade) => acc + grade, 0);

//         return `Аverage grade is ${Math.round(total / grades.length)}.`;
//     };

//     console.log(average());
//     console.log(globalVar);
// })();




// console.log(average());


// Global import

// const globalVar = {};

// (function (gv) {
//     // Приватная функция, доступная только внутри замыкания
//     const privateFn = () => console.log("Shhhh, this is private!");

//     const movieFetch =() => {
//          return fetch('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=CNY&apikey=3FPTV2NXFOV3M1JQ')
//         .then(response => response.json())
//         .then(data => console.log(data))
//     }

//     // Откроем методы через интерфейс globalVariable,
//     // закрыв имплементацию внутри замыкания
//     gv.books = () => {
//         privateFn();
//         console.log("Hello, I am a global variable");
//     };

//     gv.music = ['sdfsd','sfsdfsdf0', 'sfsdfsdf'],

//     gv.movies = () => {
//         movieFetch()
//     }
// })(globalVar);
// console.log('global',globalVar);
// console.log(globalVar.music);
// // console.log(globalVar.books());
// // // Shhhh, this is private!
// // // Hello, I am a global variable

// // privateFn();


// Object interface

// const GRADES_MODULE = (function () {
//     // Это будет приватная переменная внутри замыкания
//     const grades = [80, 45, 75, 64, 53, 82];

//     // const message = () => {
//     //     console.log('Create message');
//     // }

//     return {
//         average() {
//             const total = grades.reduce((acc, grade) => acc + grade, 0);

//             return `Average grade is ${Math.round(total / grades.length)}.`;
//         },

//         failing: function() {
//             const failingGrades = grades.filter(item => item < 70);
//             return 'You failed ' + failingGrades.length + ' times.';
//         }
//     }
// })();
// console.log(GRADES_MODULE);
// console.log(GRADES_MODULE.average());
// console.log(GRADES_MODULE.failing());


// Revealing module pattern

// const calcGrades = (function () {
//     // Переменные и методы внутри будут приватными
//     const grades = [80, 45, 75, 64, 53, 82];

//     const calcAverage = () => {
//         const total = grades.reduce((acc, grade) => acc + grade, 0);

//         return `Average grade is ${Math.round(total / grades.length)}.`;
//     };

//     const failingGrades = ()=> {
//         const failingGrades = grades.filter(item => item < 70);

//         return 'You failed ' + failingGrades.length + ' times.';
//     }

//     // явно укажем что мы хотим открыть и под какими именами
//     return {
//         average: calcAverage,
//         failing: failingGrades,
//     };
// })();

// console.log(calcGrades);

// console.log(calcGrades.average());
// console.log(calcGrades.failing());
const calculator = (function(){
    const sum = function(...args) {
        return args.reduce((acc, el) => acc + el)
    }
    const minus = function(...args) {
        return args.reduce((acc, el) => acc - el)
    }
     const mylt = function(...args) {
        return args.reduce((acc, el) => acc * el)
    }

    const pow = function(...args) {
        if(args.length !==2) {
            return 'Error'
        } else {
            let [number,dig] = args;
            return Math.pow(number, dig)
        }
    }
    
    return {
        sum,
        minus,
        mylt,
        pow
    }
})()
console.log(calculator.sum(1,2,3)); // 6
console.log(calculator.sum(5,2)); // 7
console.log(calculator.minus(1,2,3)); // -4
console.log(calculator.minus(5,2)); // 3
console.log(calculator.mylt(1,2,3)); // 6
console.log(calculator.mylt(5,2)); //10
console.log(calculator.pow(2,3,4)); // 8



















// fetch('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=CNY&apikey=3FPTV2NXFOV3M1JQ')
// .then(res => res.json())
// .then(data => console.log(data))




// Alpha Vantage api key  3FPTV2NXFOV3M1JQ








// let arr = [];
// let arrInfo = [];
// obj = {
//     id: null,
// }
// for (let i = 0; i < 20; i++) {
//     arr.push(0);
// }
// // console.log(arr);
// let a = 0;
// let root = document.querySelector('.root');
// let e = document.querySelector('#sound');
// e.currentTime = 0;
// root.textContent = arr.join('');
// let btn = document.querySelector('.btn');

// function addNumber() {
//     arr.unshift(1);
//     arr.pop();
//     root.textContent = arr.join('')
//     clearInterval(obj.id)
//     arrInfo.push({
//         id: ++a,
//         value: 1,
//         index: 0,
//         direction: 'right'
//     })
//     obj.id = setInterval(() => {
//         moveNumber(arrInfo)
//         // console.log(arrInfo);
//     }, 400);
// }

// function moveNumber(arrObj) {
//     arrInfo = arrObj.map((el) => {
//         console.log(el);
//         if (el.direction === 'right') {
//             arr.splice(el.index + 1, 1, el.value)
//             arr.splice(el.index, 1, 0)
//             root.textContent = arr.join('');
//             if (arr[arr.length - 1] === el.value && arr.length - 1 === el.index + 1 || arr[el.index + 1] === arr[el.index + 2] ) {
//                 console.log('BOOM');
//                 e.play()
//                 return {
//                     ...el,
//                     index: el.index + 1,
//                     direction: 'left'
//                 }
//              }else {
//                 return {
//                     ...el,
//                     index: el.index + 1,
//                 }
//             }

//         } else if (el.direction === 'left') {
//             arr.splice(el.index - 1, 1, el.value)
//             arr.splice(el.index, 1, 0)
//             root.textContent = arr.join('');

//             if (arr[0] === el.value && 0 === el.index - 1 || arr[el.index - 1] === arr[el.index - 3]) {
//                 console.log('boom');
//                 e.play()
//                 return {
//                     ...el,
//                     index: el.index - 1,
//                     direction: 'right',
//                 }
//             } else {
//                 return {
//                     ...el,
//                     index: el.index - 1
//                 }
//             }
//         }
//     })
//     // if (obj.move === 'right') {
//     //     let index = arr.indexOf(num);
//     //     arr.splice(index + 1, 1, num)
//     //     arr.splice(index, 1, 0)
//     //     root.textContent = arr.join('');
//     // } else if (obj.move === 'left') {
//     //     let index = arr.indexOf(num);
//     //     arr.splice(index - 1, 1, num)
//     //     arr.splice(index, 1, 0)
//     //     root.textContent = arr.join('');
//     // }
// }

// btn.addEventListener('click', addNumber);