// this
// // scope repeat
// // this + constructor
// 'use strict';

// const tiger = {
//     armor: 100,
//     life: 100,
//     amunition: 10,
//     speed: 20,
//     x: 0,
//     y: 25,
//     color: 'green',
//     engine: true,
//     move(a, b) {
//         // console.log('move',this);
//         if (this.engine) {
//             this.x = a;
//             this.y = b;
//         }
//     },

//     fire() {
//         // console.log('fire',this);
//         if(this.amunition > 0) {
//             this.amunition--;
//         }
//     },

//     // testMethod : () => {
//     //     console.log(this);
//     // },

//     innerMethod() {
//         console.log('Inner',this);
//         const arrow = () => {
//             console.log('arrow', this);
//         }
//         arrow();
//     }
// }

// tiger.move(50,12);
// tiger.fire();
// tiger.innerMethod();
// tiger.testMethod();

// function showThis () {
//     console.log(this);
// }

// const showThis = ()=> {
//     console.log(this);
// }

// showThis();

// tank.fire();
// console.log(tank);

// call apply bind

// const hotel = {
//     name: 'Resort Hotel',
//     price: 2500,
// };
// const hotel2 = {
//     name: '4 Seasons Hotel',
//     price: 500,
// };
// const hotel3 = {
//     name: '7 days Hotel',
//     price: 700,
// };

// function showPrice(name, age) {
//     console.log(`Hello ${name} ${age} Price :  ${this.price}`);
// }

// showPrice.call(hotel, 'Homer', 45);
// showPrice.call(hotel2, 'Filip', 25);
// showPrice.call(hotel3, 'Bender', 999);

// let J = ['Homer', 45];

// showPrice.apply(hotel,J)
// showPrice.apply(hotel2,['Filip', 25])
// showPrice.apply(hotel3,['Bender', 999])

// const bindFunction = showPrice.bind(hotel);
// bindFunction('Homer', 45);

// showPrice();

// call - coma
// apply - arr



// studentds obj and constrctor


// function Student (name,email,password) {
//     // this = {}
//     this.name = name;
//     this.email = email;
//     this.password = password;
//     this.active = [];
//     this.passed = [];
//     this.VIP = false;
//     this.showName = function() {
//         console.log(this.name);
//     }
//     // return this {name: name, email: email, password: password, active: [],
//     // passed: [], VIP: false }
// }

// let result = new Student('Bob', 'fsdfhdkjh@.vob.com', '7889441');
// let result2 = new Student('Jane', 'jane.com', 'qweqwe');
// let result3 = new Student('Mick', 'mick.gmail.com', 'dgdf');

// // console.log(result);
// // console.log(result2);
// // console.log(result3);
// result.showName();
// result3.showName();
// result2.showName();



// const Tank = {
//     speed: 100,
//     armor: 50,
//     life: 100,
//     damage: 20,
//     name: 'Tiger',
//     nickName: 'Tankist',
//     amunition: 10,
//     x: 0,
//     y: 0,

//     move(a,b) {
// this.x = a;
// this.y = b;
//     },

// fire() {
//     this.amunition > 0 ? this.amunition-=1 : alert('Enter card number');
// },

// heal(size) {
//   this.life + size > 100 ? this.life = 100 : this.life += size;
// },
// };

// Tank.move(50,150);
// Tank.fire();
// Tank.fire();
// Tank.fire();
// Tank.life = 50;
// Tank.heal(25);
// console.log(Tank);

// let a = {};

// // a.start = 10;
// // a.end = 20;
// // a.f = 100;
// console.log(a);

// let a = {
//     q: 5,
//     c: 10,
//     d: 20
// }

// a.z = 50;

// console.log(a);

// function Tank(speed, amunition, armor, nickName, x, y) {
//     // this = {}
//     this.speed = speed;
//     this.armor = armor;
//     this.life = 100;
//     this.damage = 20;
//     this.name = 'Tiger';
//     this.nickName = nickName;
//     this.amunition = amunition;
//     this.x = x;
//     this.y = y;
//     this.move = function (a, b) {
//         this.x = a;
//         this.y = b;
//     };
//     this.fire = function () {
//         this.amunition > 0 ? this.amunition -= 1 : alert('Enter card number');
//     };
//     this.heal = function (size) {
//         this.life + size > 100 ? this.life = 100 : this.life += size;
//     };

//     this.showSpeed = function () {
//         console.log(this.speed);
//     }
//     // return this {}
// }

// let tiger = new Tank(50, 8, 20, 'Tester', 10, 12);
// let scorpion = new Tank(45, 10, 5, 'SC', 52, 10);

// // tiger.move(50, 16);
// console.log(tiger);
// console.log(scorpion);
// tiger.move(45, 25);
// scorpion.move(87, 96)




// params and destr
// function User({age, name, isActive = false, isPremium = false, likesCount = 0}) {
//     this.age = age;
//     this.name = name;
//     this.isActive = isActive;
//     this.isPremium = isPremium;
//     this.likesCount = likesCount;
//
//     this.showLikes = function () {
//         return this.likesCount;
//     }
// }
// //
// const jane = new User({age: 25,name: 'Jane', isPremium: true});
// // change order
// const mick = new User({
//     name: 'Mick',
//     age: 30,
//     likesCount: 150,
//     isActive: false,
//     isPremium: true
// });
// console.log(mick);

// params dest and def params

// function User({
//                   age = 18,
//                   name = 'no name',
//                   isActive = true,
//                   isPremium = false,
//                   likesCount = 0
//               }) {
//     this.age = age;
//     this.name = name;
//     this.isActive = isActive;
//     this.isPremium = isPremium;
//     this.likesCount = likesCount;
//
//     this.showLikes = function () {
//         return this.likesCount;
//     }
// }
//
// const jane = new User({
//     age: 25,
//     name: 'Jane',
//     isActive: true,
//     isPremium: true,
//     likesCount: 500
// });
// // change order
// const mick = new User({
//     name: 'Mick',
//     age: 30,
//     likesCount: 150,
//     isActive: false,
// });
// console.log(mick);


// console.log(account);
// acount.spend(1000);
// acount.deposit(50000);
// console.log('new balance', account);
// function add (a, b) {
//     return a + b;
// }

// account.id = 'ID000-1';
// console.log(account.id);
// account.id = 'ID000-3';
// console.log(account.id);

// Object.defineProperty(account,'id', {
//    value: 'ID000-1',
//     writable: true,
//     enumerable: true,
// });
// console.log(account);
// console.log(account.id);
// account.id = 'ID000-3';
// console.log(account.id);


// function sum(a, b) {
//     return a + b;
// }

// const sum = (a, b) => {
//     return a + b
// }

// sum(5,6)