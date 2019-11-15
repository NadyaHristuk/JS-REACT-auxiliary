// let animal = {
//   canEat: true,
//   canSleep: true,
//   canWalk: true,
//   canJump() {
//     return 'I can jump';
//   }
// };

// console.log(animal);
// console.log(animal.canEat);
// console.log(animal.hasOwnProperty('canSleep'));


// new Object()
// [[Prototype]] це запис __proto__ в специфікації ECMAScript

// function Human (name, age, gender) {
//   // this = {}
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }

// console.log(Human.prototype); // обєкт 

// Human.prototype.canWalk = function() {
//   console.log('I walk');
// }

// Human.prototype.greet = function() {
//   console.log('Hello');
// }


// let user1 = new Human('Bob', 54, 'male');
// let user2 = new Human ('Jane', 25, 'female');

// console.log(user1);
// user1.canWalk();
// console.log(user2);




// __proto__ = [[Prototype]] // key in object
// prototype // key in constructor function
// 1) name
// 2) life
// 3) armor
// 4) color
// 5) x y
// 6) amunition

// 1) move // reWrite  x ,y
// 2) acc // speed++
// 3) stop // speed = 0;
// 4) fire // amunition--

// function Ship(name, life, armor, color, x, y, amunition) {
//   this.name = name;
//   this.life = life;
//   this.armor = armor;
//   this.color = color;
//   this.x = x;
//   this.y = y;
//   this.amunition = amunition;
//   this.speed = 0;
// }

// Ship.prototype.move = function (a, b) {
//   this.x = a;
//   this.y = b;
// }

// Ship.prototype.acc = function (number) {
//   this.speed = number;
// }

// Ship.prototype.stop = function () {
//   this.speed = 0;
// }

// Ship.prototype.fire = function () {
//   if (this.amunition > 0) {
//     this.amunition--;
//   }
// }

// function ES (torpeds, smokeAmunition, ...args) {
//   Ship.apply(this,args)
//   this.torpeds = torpeds;
//   this.smokeAmunition = smokeAmunition;
// // }

// function ES (name, life, armor, color, x, y, amunition,torpeds, smokeAmunition) {
//   Ship.call(this,name, life, armor, color, x, y, amunition)
//   this.torpeds = torpeds;
//   this.smokeAmunition = smokeAmunition;
// }
// ES.prototype = Object.create(Ship.prototype); // {}
// ES.prototype.constructor = ES;
// ES.prototype.launchTorpeds = function() {
//   if (this.torpeds > 0) {
//     this.torpeds--
//   }
// }
// ES.prototype.launchSmoke = function() {
//   if(this.smokeAmunition > 0) {
//     this.smokeAmunition--
//   }
// }


// let player1 = new ES('Bob', 5000, 300, 'red', 54, 60, 20, 21,5);
// // player1.move(100,100);
// // player1.fire();
// console.log(player1);