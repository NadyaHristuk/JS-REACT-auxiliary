// click
// submit
// focus
// blur
// keydown
// keyup
// keypress
// input
// onChange
// scroll
// DOMContentLoaded
// onbeforeunload
// let input = document.querySelector('#data');
// // let btn = document.querySelector('#btn');
// let form = document.querySelector('form');
// let resultP = document.querySelector('.result');
// function convert (e) {
//     // if (input.value.length < 3) {
//     //     e.preventDefault();
//     // }
//     console.log(e);
//     console.log(e.target);
//     let text = input.value;
//     console.log(text);
//     let result = text / 100;
//     resultP.textContent = `${result}m`;
// }

// function hello () {
//     alert('Hello');
// }

// function init (e) {
//     convert(e);
//     hello();
// }
// btn.addEventListener('click',convert);
// btn.addEventListener('click',hello);
// form.addEventListener('submit',convert);

// let burger = document.querySelector('.burger');
// let menu = document.querySelector('.menu');
// burger.addEventListener('click',changeClass)
// function changeClass (e) {
//     console.log(e);
//     menu.classList.toggle('show--menu');
// }

// const toggleClass = () => {
//   console.log(this);
//   menu.classList.toggle('show--menu');
//   burger.removeEventListener('click', toggleClass);

// }
// let burger = document.querySelector('.burger');
// let menu = document.querySelector('.menu');
// burger.addEventListener('click', toggleClass);
 
// let form = document.querySelector('form');

// form.addEventListener('submit', showText);

// function showText(e) {
//   e.preventDefault();
//   console.log(e);
//   console.log('Hello');
// }

// function colectData() {
//     let name = document.querySelector('#name');
//     let lastName = document.querySelector('#lastName');
//     let radioResult = [...document.querySelectorAll('[type="radio"]')].map(el => el.checked).some(el => el === true);
//     let male = document.querySelector('#Male');
//     let female = document.querySelector('#Female');
//     let result = {
//         name: name.value,
//         lastName: lastName.value,
//     }
//     if (radioResult) {
//         result.gender = male.checked ? male.id : female.id;
//         name.value = '';
//         lastName.value = '';
//         male.checked ? male.checked = false : female.checked = false;
//         return result;
//     } else {
//         alert('chose gender');
//         return;
//     }
// }

// function createLayout(obj) {
//     let list = document.createElement('ul');
//     for (let key in obj) {
//         let li = document.createElement('li');
//         li.textContent = obj[key];
//         list.append(li);
//     }
//     document.querySelector('form').after(list);
// }

// function showList() {
//     event.preventDefault();
//     let userData = colectData();
//     createLayout(userData);
// }

// function showListEnter() {
//     if (event.key === 'Enter') {
//         showList();
//     }
// }

//
// //
// // one.addEventListener('click', first);
// //
//

// event

// function showEvent(e) {
//     console.log(e);
//     // console.log(event.target);
//     // console.log(event.currentTarget);
//     // console.log(this);
// }
//
// let one = document.querySelector('#one');
// one.addEventListener('click', showEvent);
//
// window.addEventListener('keypress', showEvent);

// function add(a) {
//     console.log(a + 5);
// }
// one.addEventListener('click', () => add(25));
// bubbling and event.stopPropagation(), event.stopImmediatePropagation().
// let menu = document.querySelector('.menu');
// function addActiveClass (e) {
//   console.log(e);
//   // console.log(e.target);
//   e.target.classList.add('menu__item--active');
// }
// menu.addEventListener('click',addActiveClass);
// const boss = document.querySelector('.boss');
// const zam = document.querySelector('.zam');
// const manger = document.querySelector('.manager');
// const worker = document.querySelector('.worker');

// // //
// function fromWorker() {
//     alert(`Hello i am active when bubbling up to worker`);
//     // console.log('worker target', event.target);
//     // console.log('worker currentTarget', event.currentTarget);
//     // event.stopPropagation();

// }

// function fromManger() {
//     alert(`Hello i am active when bubbling up to manger`);
//     // event.stopPropagation();

// }

// function fromZam() {
//     alert(`Hello i am active when bubbling up to zam`);
//     console.log('event target', event.target);
//     console.log('event currentTarget', event.currentTarget);
//     // event.stopPropagation();
// }

// function fromBoss() {
//     alert(`Hello i am active when bubbling up to boss`);
//     console.log('boss target', event.target);
//     console.log('boss currentTarget', event.currentTarget);
//     // console.log(event);
// }

// boss.addEventListener('click', fromBoss);
// zam.addEventListener('click', fromZam);
// manger.addEventListener('click', fromManger);
// worker.addEventListener('click', fromWorker);

// event delegation


// function liMod (e) {
//     if (e.target.localName === 'li') {
//         e.target.classList.toggle('menu__item--active');
//     }
// }

// let ul = document.querySelector('.menu');
// ul.addEventListener('click',liMod);

// let liArr = [...document.querySelectorAll('.menu__item')];
// for (let el of liArr) {
//     el.addEventListener('click',liMod)
// }

// function delegation(event) {
//     // alert(`Hello i am delegation function`);
//     console.log('target',event.target);
//     console.log('CURRENT TARGET',event.currentTarget);
// }
// //
// //
// boss.addEventListener('click', delegation);

// DOMContentLoaded
// document.addEventListener("DOMContentLoaded", callback);
// onload

// window.onload = function () {
//     alert(`All resourses loaded`)
// };

// let list = document.querySelector("#list");
// let listItems = Array.from(list.children);
// console.log(listItems);
// function FindIndex () {
//   let index = event.target;
//   let indexOfElem = listItems.indexOf(index);
//   console.log(indexOfElem + 1);
// };
// list.addEventListener('click', FindIndex);

// onunload

// window.onunload = function () {
//     return `onunload alert`;
// };

// onbeforeunload

// window.onbeforeunload = function () {
//     return `Are you want exit ?`;
// };

// mousedown
// mouseup
// click
// mouseover вспливають
// mouseout вспливають
// mousemove
// contextmenu
// dblclick
// mouseenter  не вспливають
// mouseleave  не вспливають

// keyup
// keydown
// keypress

// change
// input
// focus
// scroll
// pageXOffset кількість прокрутки в рх
// pageYOffset кількість прокрутки в рх

// getBoundingClientRect()
// Ширина и высота элемента включая рамки (border)
// offsetWidth
// offsetHeight
// Размеры видимой внутренней части элемента
// clientWidth
// clientHeight

// let list = document.querySelector('ul');
//
// function kurkustrumbe(event) {
//     let a = event.target;
//     console.log(Array.from(list.children).indexOf(a));
// }
//
// list.addEventListener('click', kurkustrumbe);

// const section = document.querySelector('#root');
// const h1 = document.querySelector('#h1');
// const p = document.querySelector('#p');
// const ul = document.querySelector('#ul');
// const img = document.querySelector('#img');
//
// function createTitle() {
//     const title = document.createElement('h1');
//     title.textContent = 'Интерфейсы, основанные на Event';
//     section.append(title);
// }
//
// function createP() {
//     const text = document.createElement('p');
//     text.textContent = 'Ниже приведён список интерфейсов, основанных на главном интерфейсе Event, а также указаны ссылки на них в документации MDN API. Заметьте, что имена всех интерфейсов оканчиваются на "Event".';
//     section.append(text);
// }
//
// function createUL() {
//     const list = document.createElement('ul');
//     for (let i = 0; i < 3; i++) {
//         let item = document.createElement('li');
//         item.textContent = `Item ${i}`;
//         list.append(item);
//     }
//     section.append(list);
// }
//
// function createImg() {
//     const pic = document.createElement('img');
//     pic.setAttribute('src', 'http://www.sabreakingnews.co.za/wp-content/uploads/2017/06/Bee-bearding.jpg');
//     section.append(pic);
// }
//
// function createHtml(tag,text,container,atr,atrValue ) {
//     const el = document.createElement(tag);
//     el.textContent = text;
//     el.setAttribute(atr, atrValue);
//     container.append(el);
// }
//
// h1.addEventListener('click', () => createHtml('h1','Интерфейсы, основанные на Event', section,null, null));
// p.addEventListener('click', () => createHtml('p','Ниже приведён список интерфейсов, основанных на главном интерфейсе Event, а также указаны ссылки на них в документации MDN API. Заметьте, что имена всех интерфейсов оканчиваются на "Event".', section, null, null));
// ul.addEventListener('click', createUL);
// img.addEventListener('click', createImg);

// const list = document.querySelector('ul');
// const items = Array.from(document.querySelectorAll('li'));
//
// function select(e) {
//     // console.log(items.indexOf(e.target) + 1);
//     console.log(items);
// }

// list.addEventListener('click', select);

// let form = document.querySelector('.form');
// let totalPrice = document.querySelector('.total');
// let amount = document.querySelector('.amount');
//
// function total() {
//     let price = document.querySelector('#price');
//     let quantity = document.querySelector('#quantity');
//     let result = price.value * quantity.value;
//     totalPrice.textContent = `${result.toFixed(2)} грн`;
//     amount.textContent = quantity.value;
// }
// form.addEventListener('input',total);
// window.addEventListener('DOMContentLoaded', function () {
//     total()
// });

// const name = document.querySelector('#name');
// const lastName = document.querySelector('#lastName');

// function readValue (event) {
//     event.preventDefault()
//     let nameValue = name.value;
//     let lastNameValue = lastName.value;
//     console.log({
//         nameValue,
//         lastNameValue,
//     });
//     document.querySelector('#name').value = '';
// }

// let btn = document.querySelector('form');

// btn.addEventListener('submit',readValue);

// function hello () {
//     console.log('hello');
// }


// window.addEventListener('DOMContentLoaded', hello);


// 'use strict'

// // ----- Калькулятор -----
// let startBtn = document.querySelector('.get-Value');
// let sumBtn = document.querySelector('.sum');
// let minBtn = document.querySelector('.minus');
// let multBtn = document.querySelector('.mult');
// let divBtn = document.querySelector('.divide');
// let powBtn = document.querySelector('.pow');


// class Calculator {
//     constructor() {
//         //  this = {}
//         this.a = null;
//         this.b = null;

//         this.getValue = this.getValue.bind(this);
//         this.sum = this.sum.bind(this);
//         this.minus = this.minus.bind(this);
//         this.mult = this.mult.bind(this);
//         this.divide = this.divide.bind(this);
//         this.pow = this.pow.bind(this);
//     }

//     getValue() {
//         //  console.log(this);
//         this.a = Number(prompt('Enter number'));
//         this.b = Number(prompt('Enter number'));
//         console.log(a);
//         a.textContent = this.a;
//         b.textContent = this.b;
//     };

//     sum() {
//         //  console.log(this);
//         sum.textContent = this.a + this.b;
//         };

//     minus() {
//         minus.textContent = this.a - this.b;
//     };

//     mult() {
//         mult.textContent = this.a * this.b;
//     };

//     divide() {
//         divide.textContent = this.a / this.b;
//     };

//     pow() {
//         pow.textContent = Math.pow(this.a,this.b);
//     };
// };

// let machine = new Calculator();

// startBtn.addEventListener('click', machine.getValue);
// sumBtn.addEventListener('click', machine.sum);
// minBtn.addEventListener('click', machine.minus);
// multBtn.addEventListener('click', machine.mult);
// divBtn.addEventListener('click', machine.divide);
// powBtn.addEventListener('click', machine.pow);

// window.addEventListener('keypress', showEvent)

// function showEvent (e) {
//     console.log(e);
// }

// let box = document.querySelector('.box');
// box.style.left = '50px';
// box.style.backgroundColor = '#000';
// console.log(box.style);