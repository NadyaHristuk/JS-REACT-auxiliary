// Synchronous code - все відбувається по черзі
// function multiply(a, b) {
//     return a * b;
// }

// function square(n) {
//     return multiply(n, n)
// }

// // function printSquare(n) {
// //     let result = square(n);
// //     console.log(result);
// // }


// // printSquare(4);
// // console.log(54);

// function printSquare(n) {
//     let result;
//     setTimeout(function () {
//         result = square(n);
//     }, 1000)
//     console.log(result);
// }
// printSquare(4);
// console.log("Hello.");


// setTimeout(function() {
//     console.log('Hello');
// }, 1000)

// let a = [];
// let i = 0;
// while(i< 10000000) {
//     a.push(i);
//     i++;
// }

// console.log(a);

// console.log('Synchrone code');


// Asynchronous code


// setTimeout(function() {
//     console.log("Goodbye!");
// }, 2000);

// console.log("Hello again!");


// setTimeout и setInterval.

// setTimeout(callback, delay);

// setInterval(callback, delay);


// function sayHello() {
//     console.log("Hello!");
// }
// let timeId = setTimeout( sayHello, 2000);
// let intervalId = setInterval(sayHello, 50);

// console.log(timeId);
// console.log(intervalId);
// let stop = document.querySelector('.btn');
// stop.addEventListener('click',function() {
//     clearInterval(intervalId);
// })
// clearInterval(intervalId);
// clearTimeout(timeId);

// let timeOutId = setTimeout(sayHello, 2000);
// console.log('timeout',timeOutId);
// let intervalId;
// intervalId = setInterval(sayHello, 100);
// let btn = document.querySelector('.btn');
// let clickedBtn = false;
// btn.addEventListener('click', stop);
// function stop () {
//     if (clickedBtn === false) {
//         clearInterval(intervalId);
//         clickedBtn = true;
//     } else {
//         intervalId = setInterval(sayHello, 100);
//         clickedBtn = false;
//     }
// }
// clearInterval(intervalId);
// clearTimeout(timeOutId);

// Затримка в 4 мс зменьшення частоти в неактивній вкладці


// Date
//
// let date = new Date();
// console.log(date);
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getTime());
// console.log(Date.now());
// let date = new Date(2019,2,1,0,0,0);
// console.log(date);
// console.log(date.getTime());
// console.log(date.getMonth(1491253200000));

// console.log(date.getTime()/1000/60/60/24/365);

// console.log(`${date.getFullYear()}/${date.getMonth()+1}`);


// let date = new Date("4, 2017, April");
// console.log(date);
// let days =['Неділя','Понеділок','Вівторок','Середа','Четвер','Пятниця','Субота'];
// // console.log(date.getDay());
// let day = prompt('day');
// let month = prompt('month');
// let year = prompt('year');
// let result = new Date(`${day}, ${year}, ${month}`);
// console.log(days[result.getDay()]);
// new Date(year, month, date, hours, minutes, seconds, ms);

// let dat = new Date(2000, 5, 8, 12, 0, 0, 0);
//
// console.log(dat);
//
// let date = Date.now();
// console.log(date);

// //
// console.log(date/1000/3600/24/365);

// let date = new Date();
// console.log("Date: " + date);
// console.log("getDate(): " + date.getDate());
// console.log("getDay(): " + date.getDay());
// console.log("getMonth(): " + date.getMonth());
// console.log("getFullYear(): " + date.getFullYear());
// console.log("getHours(): " + date.getHours());
// console.log("getMinutes(): " + date.getMinutes());
// console.log("getSeconds(): " + date.getSeconds());
// console.log("getMilliseconds(): " + date.getMilliseconds());
// console.log("getTime(): " + date.getTime());
// let birth = prompt('enter year of birth');
// let today = new Date();
// console.log(today.getFullYear() - birth);


// let date = new Date();
// let result = 'Date: ';
// result += date.getFullYear() + '/'; // год
// result += date.getMonth() + '/'; // месяц, начиная с 0
// result += date.getDate() + '. Day of the week: '; // день недели, начиная с 1
// result += date.getDay() + '.'; // день , начиная с 0
//
// result += ' Time: ' + date.getHours() + ':'; // часы
// result +=  date.getMinutes() + ':'; // минуты
// result +=  date.getSeconds() + ':'; // секунды
// result +=  date.getMilliseconds() + ''; // милисекунды
//
// console.log(result);

// let secondDate = new Date ();
// secondDate.setFullYear(2017, 6, 14);
// secondDate.setHours(5, 40, 0, 0);
// console.log(
//     `Set: дате 2017, 6, 14, 5, 40 соответствует ${secondDate.getTime()}`
// );
// console.log(
//     `Set: дате 2017, 6, 14, 5, 40 соответствует ${secondDate.getFullYear()}`
// );

// let date = new Date();
// //
// // формат вывода
// const options = {
//     weekday: 'long',
//     year    : 'numeric',
//     month   : 'short',
//     day     : 'numeric',
//     hour    :'2-digit',
//     minute  :'2-digit'
// };
// //
// // Україна
// let localeUa = date.toLocaleString('UA-ua', options);
// console.log(localeUa); // понеділок, 19 бер. 2018 р., 17:42
//
// let localeUs = date.toLocaleString("en-US", options);
// console.log(localeUs); // Monday, Mar 19, 2018, 5:43 PM

// for (var i = 1; i <= 3; i++) {
//     setTimeout(function() {
//         console.log(i + " second(s)");
//     }, i * 1000);
// }

// for (var i = 1; i <= 3; i++) {
//     (function(i) {
//         setTimeout(function() {
//             console.log(i + " second(s)");
//         }, i * 1000);
//     })(i);
// }

// for (let i = 1; i <= 3; i++) {
//     setTimeout(function() {
//         console.log(i + " second(s)");
//     }, i * 1000);
// }


// let deadline = new Date(2018, 7, 24, 12, 0, 0);
// function timer() {
//     let today = new Date();
//     let result = deadline - today;
//     console.log(result / 1000 / 3600 / 24);
//     let days = Math.floor(result / 1000 / 3600 / 24);
//     console.log(days);
//     document.querySelector('.days').textContent = days;
//     let hours = Math.floor((result - days * 1000 * 3600 * 24) / 1000 / 3600);
//     document.querySelector('.hours').textContent = hours;
//     let minutes = Math.floor((result - (days * 1000 * 3600 * 24) - (hours * 1000 * 3600)) / 60000);
//     document.querySelector('.minutes').textContent = minutes;
//     let seconds = Math.floor((result - (days * 1000 * 3600 * 24) - (hours * 1000 * 3600) - (minutes * 60000))/1000);
//     document.querySelector('.seconds').textContent = seconds;
// }
//
// setInterval(timer,1000);

// let deadline = new Date(2018, 7, 24, 12, 0, 0);
//
// function timer() {
//     let dateNow = new Date();
//     let diff = deadline - dateNow;
//     let sec = Math.floor(diff / 1000);
//     console.log(sec);
//     let min = Math.floor(sec / 60);
//     console.log(min);
//     let hour = Math.floor(min / 60);
//     console.log(hour);
//     let day = Math.floor(hour / 24);
//     console.log(day);
//     sec = sec % 60;
//     min = min % 60;
//     hour = hour % 24;
//     document.querySelector('.seconds').textContent = (sec < 10) ? '0' + sec : sec;
//     document.querySelector('.minutes').textContent = (min < 10) ? '0' + min : min;
//     document.querySelector('.hours').textContent = (hour < 10) ? '0' + hour : hour;
//     document.querySelector('.days').textContent = (day < 10) ? '0' + day : day;
// }
//
//
// setInterval(timer, 1000);

// let today = moment().add(1, 'month').format('MMMM');
// console.log(today);

// const deadline = new Date(2019, 2, 31, 12, 0, 0);
// let secText = document.querySelector('.seconds');
// let minText = document.querySelector('.minutes');
// let hoursText = document.querySelector('.hours');
// let daysText = document.querySelector('.days');

// function timer () {
// let today = Date.now();
// let delta = deadline - today;
// // console.log(delta);

// let sec = Math.floor(delta /1000 % 60);
// let min = Math.floor(delta / 60000 % 60);
// let hours = Math.floor(delta / 3600000 % 24);
// let days = Math.floor(delta / 86400000);
// // console.log(sec);
// // console.log(min);
// // console.log(hours);
// // console.log(days);

// secText.textContent = sec >= 10 ? sec : `0${sec}`;
// minText.textContent = min >=10 ? min : `0${min}`;
// hoursText.textContent = hours >= 10 ? hours : `0${hours}`;
// daysText.textContent = days >= 10 ? days : `0${days}`;
// }


// setInterval(timer,1000);










//
// const deadline = new Date(2018, 6, 13, 0, 0, 0);
// let secText = document.querySelector('.seconds');
// let minText = document.querySelector('.minutes');
// let hoursText = document.querySelector('.hours');
// let daysText = document.querySelector('.days');
//
// function timer() {
//     const today = new Date();
//     let result = deadline - today;
//     let sec = Math.floor(result / 1000);
//     let min = Math.floor(sec / 60);
//     let hours = Math.floor(min / 60);
//     let days = Math.floor(hours / 24);
//     sec = sec % 60;
//     min = min % 60;
//     hours = hours % 24;
//     // days = days;
//
//     secText.textContent = sec < 10 ? `0${sec}`: sec;
//     minText.textContent = min < 10 ? `0${min}`: min;
//     hoursText.textContent = hours < 10 ? `0${hours}`: hours;
//     daysText.textContent = days < 10 ? `0${days}`: days;
// }
//
// setInterval(timer, 1000);


// let sec = Math.floor(result / 1000) % 60;
// let min = Math.floor(result / 1000 / 60) % 60;
// let hours = Math.floor(result / 1000 / 60 / 60) % 60;
// let day = Math.floor(result / 1000 / 60 / 60 / 24);



// let deadline = new Date(2018, 10, 23, 0, 0);
// let today = Date.now();

// let delta = deadline - today;

// console.log(delta);
// console.log(Math.floor(delta / 1000 % 60));
// console.log(Math.floor(delta / 1000 / 60 % 60));
// console.log(Math.floor(delta / 1000 / 60 / 60 % 60));
// console.log(Math.floor(delta / 1000 / 60 / 60 / 24));
// let daysContainer = document.querySelector('.days');
// let hoursContainer = document.querySelector('.hours');
// let minutesContainer = document.querySelector('.minutes');
// let secondsContainer = document.querySelector('.seconds');

// function timer() {
//     let today = Date.now();
//     let delta = deadline - today;
//     let seconds = Math.floor(delta / 1000 % 60);
//     let minutes = Math.floor(delta / 1000 / 60 % 60);
//     let hours = Math.floor(delta / 1000 / 60 / 60 % 24);
//     let days = Math.floor(delta / 1000 / 60 / 60 / 24);

//     daysContainer.textContent = days < 10 ? `0${days}` : days;
//     hoursContainer.textContent = hours < 10 ? `0${hours}` : hours;
//     minutesContainer.textContent = minutes < 10 ? `0${minutes}` : minutes;
//     secondsContainer.textContent = seconds < 10 ? `0${seconds}` : seconds;
// }

// let start = setInterval(timer, 1000);
// let daysContainer = document.querySelector('.days');
// let hoursContainer = document.querySelector('.hours');
// let minutesContainer = document.querySelector('.minutes');
// let secondsContainer = document.querySelector('.seconds');
// const deadline = new Date(2019, 4, 1, 12, 0, 0);

// function timer() {
//     let today = Date.now();
//     let delta = deadline - today;
//     let sec = Math.floor(delta / 1000 % 60);
//     let min = Math.floor(delta / 60000 % 60);
//     let hours = Math.floor(delta / 60000 / 60 % 24);
//     let days = Math.floor(delta / 60000 / 60 / 24);

//     daysContainer.textContent = days < 10 ? `0${days}` : days;
//     hoursContainer.textContent = hours < 10 ? `0${hours}` : hours;
//     minutesContainer.textContent = min < 10 ? `0${min}` : min;
//     secondsContainer.textContent = sec < 10 ? `0${sec}` : sec;
// }
// timer();
// setInterval(timer, 1000);









// const clockface = document.querySelector(".js-clockface");
// const startBtn = document.querySelector(".js-timer-start");
// const stopBtn = document.querySelector(".js-timer-stop");

// startBtn.addEventListener('click', startTimer);

// const timer = {
//  startTime: null,
//  deltaTime: null,
//  id: null
// };


// function startTimer () {

//  if (timer.startTime === null) {
//    timer.startTime = Date.now()
//  } else {
//    // timer.deltaTime = currentTime - timer.startTime;
//  }
//  setInterval(refresh, 100);
// }

// function refresh () {
//  let currentTime = Date.now();
//  timer.deltaTime = currentTime - timer.startTime;
//  updateClockface (clockface, timer.deltaTime )

// }


// function getFormattedTime(time) {
// let minutesResult = Math.floor(time / 1000 / 60 % 60);
// let minutes = minutesResult < 10 ? `0${minutesResult}` : minutesResult;
// let secondsResult = Math.floor(time / 1000 % 60);
// let seconds = secondsResult < 10 ? `0${secondsResult}` : secondsResult;
// let mlSeconds = Math.floor(time / 100 % 10);
//  return `${minutes}:${seconds}.${mlSeconds}`;
// }

// function updateClockface(elem, time) {
//     // Используйте функцию getFormattedTime из задания #1
//     elem.textContent = getFormattedTime(time);
//    }


// let span= document.querySelector('.days');
// class Counter {
//     constructor(onChange) {
//         this.value = 0;
//         this.change = onChange;
//         this.increnement = this.increnement.bind(this);
//         this.decrement = this.decrement.bind(this);
//     }

//     increnement () {
//         this.value++
//         this.change(this.value)
//     }
//     decrement() {
//         this.value--;
//         this.change(this.value);
//     }
// }
// function update (num) {
//     span.textContent = num;
// }

// let obj = new Counter(update);


// bigint.addEventListener('click',obj.increnement)