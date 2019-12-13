// Math.random	Псевдослучайное число в диапазоне [0, 1), т.е. включая 0, но исключая 1.
// console.log(parseInt(Math.random()*10)+1);
// console.log(parseInt(Math.random()*51))
// console.log(Math.floor(Math.random()*10)+1);

// console.log(Math.ceil(5.0585));
// console.log(Math.floor(5.99999));
// console.log(Math.round(5.999));
// console.log(Math.round(5.3));
// Math.max(a, b, c)	Возвращает наибольшее из чисел, перечисленных через запятую в круглых скобках (наибольший аргумент)
// Math.min(a, b, c)	Возвращает наименьшее из чисел, перечисленных через запятую в круглых скобках (наименьший аргумент)
// console.log(Math.max(2,5,6,1));
// console.log(Math.min(2, 5, -5, 0));
// Math.ceil(0.5)	Округление вверх: 1
// Math.floor(0.5)	Округление вниз: 0. Используется для точного распредления Math.random()
// Math.round(0.5)	Округление до ближайшего целого: 1
// Math.(base, exponent)	возведение числа base в степень exponent
// Math.PI	число π: 3.14...
// Math.pow,
// console.log(Math.pow(125, 1/3));
// console.log(Math.sqrt(36));


// let firstArray = [1, 2, 3];
// let secondArray = new Array(5, 6, 7, 8);
// console.log(firstArray, secondArray);
// let summer = ['June', 'July', 'August'];
// let emptyArr = [];
// let firstArray = [1, 2, 3, 4, 8, 5, 10, 7, 9];
// console.log(firstArray);
// console.log(firstArray[6]);
// console.log(firstArray[0]);
// console.log(firstArray[2]);
// console.log(firstArray[3]);
// let arr = [1,2,3,4,[1,2,5,9,12,15,[23,24,124,2,[34.3,5,98,['Error']]]]];
//
// console.log(arr[4][6][4][3][0]);
// let arr = [[1,2,3],[5,',','qwerty'],[2.5,5.6,'/']];
//
// console.log(arr[2][2]);
// console.log(arr[4][6][4][3][0]);
// let arr = [1,2,3,[5,6,[54,56,98,[25.3,58,385,[2,3,['Error']]]]]];
// console.log(arr[3][2][3][3][2][0]);

// replace
// let firstArray = [1,2,3];
// firstArray[1] = 100;
// firstArray[3] = 6;
// firstArray[6] = 25;
// console.log(firstArray);
// console.log(firstArray[4]);


// push
// let firstArray = [1, 2, 3];
// // firstArray[3] = 6;
// // firstArray[4]=10;
// firstArray.push(10,11);
// // firstArray.push(11);
// firstArray.push(12);
// let arr = [5,6,7];
// firstArray.push(arr);
// console.log(firstArray);

// pop
// let firstArray = [1, 2, 3];
// let secondArr = [];
// let del = firstArray.pop();
// console.log(del);
// secondArr.push(del);
// console.log(firstArray);
// console.log(secondArr);

// shift

// let firstArray = [1, 2, 3, 4];
// console.log(firstArray.shift());
// console.log(firstArray);

// unshift

// let firstArray = [1, 2, 3, 4];
// let secondArr = [5, 6, 7];
// let thirdArr = ['a', 'b', 'c'];
// let first = firstArray.pop();
// let second = secondArr.shift();
// let third = thirdArr.pop();
// let fourArr = [];
// fourArr.push(first, third, second);

// console.log(fourArr);
// firstArray.unshift(27);
// console.log(firstArray);

// length

// let firstArray = [5, 8, 13, 14, 25, 26, 98, 75];
// // console.log(firstArray.length);
// let lengthArr = firstArray.length;
// console.log(firstArray[lengthArr - 1]);

// indexOf
//
// let firstArray = ['abc', 'h', 'b', 'd','f','h','j','q'];
// console.log(firstArray.indexOf('b'));
// console.log(firstArray.indexOf('h'));
// console.log(firstArray.indexOf('z'));
// console.log(firstArray.indexOf('y'));
// console.log(firstArray[firstArray.indexOf('b')]);
// console.log(firstArray[2]);
// console.log(firstArray.indexOf('f'));
// firstArray[firstArray.indexOf(1)] = 'new number';
// console.log(firstArray);

// includes

// let firstArray = [11, 112, 23, 45];
// console.log(firstArray.includes(23));
// console.log(firstArray.includes(150));
// firstArray[100] = 'error';
// console.log(firstArray);
// console.log(Boolean(firstArray[65]));
// console.log(firstArray.includes(5));
// firstArray.push('test');
// console.log(firstArray.includes('test'));
// console.log(firstArray.includes('t'));
// let users = ['fon', 'Frank', 'Mick'];
// let newUser = prompt('Enter name');
// console.log(users.includes(newUser));

// slice and splice

// let arr = [5, 10, 12, 15, 25];
// let newArr = arr.slice(0,3);
// console.log(arr);
// console.log(newArr);

// let arr = [1, 5, 9, 8, 7, 10];
// // delete
// // let x = arr.splice(1, 3);
// // console.log(arr);
// // console.log(x);
// // paste
// arr.splice(4, 0, 'b');
// arr.splice(1, 0, 'javascript');
// console.log(arr);
// // replace
// arr.splice(5, 1, 'abc');
// console.log(arr);
// arr.splice(1, 4, 'java', 'script');
// console.log(arr);


// задачка на логін користувача


// splice start index and how many
// let firstArray = [10, 8, 7, 5];
// let newArr = firstArray.splice(1,1);
// console.log(newArr);
// console.log(firstArray);
// let newArr = firstArray.splice(1,2);
// let newArr = firstArray.splice(-2);
// console.log(newArr);
// console.log(firstArray);

// slice start index and end index do not include

// let firstArray = [10, 8, 7, 5];
// let newArr = firstArray.slice(1,3);
// console.log(newArr);
// console.log(firstArray);

// reverse
// let firstArray = [10, 8, 7, 5];
// let reverse = firstArray.reverse();
// console.log(firstArray);


// // palindrome
//
// let str = 'Hello';
// console.log(str.split('').reverse().foin(''));

// concat

// let firstArray = [10, 8, 7, 5];
// let secondArr = [12, 13, 16, 19, 87];
// let newArray = ['add me', 'foin us'];
// let result = firstArray.concat(secondArr,newArray, 100);
// // let result = firstArray.concat(newArray);
// console.log(result);
// console.log(firstArray);
// // console.log(newArray);


// Вгадати тварину загадану компютером

// компютер загадує випадкову тварину з списку
// просить користувача ввести свій варіант
// відбувається перевірка значень компютера і користувача
// Виводить через alert результат, вгадав чи не вгадав. якщо не вгадав тоді додатково показує що було загадано.
// let animals = ["cat","dog","rabbit","bird","fish"];
// let memoUser = prompt("Загадайте животного из списка \"cat\",\"dog\",\"rabbit\",\"bird\",\"fish\"");
// let memoComp = parseInt(Math.random()*5);
// let memoAnimal = animals[memoComp];
//
// if (memoAnimal === memoUser) {
//     alert("Красава!")
// } else {
//     alert (`Не угадал. Компьютер загадал:  ${memoAnimal}.`);
// }

// let variant = ['Камінь','Ножиці','Бумага'];
//
// let randomIndex = Math.floor(Math.random()*variant.length);
// let compVariant = variant[randomIndex];
// let userVariant = prompt('Enter variant \'Камінь\',\'Ножиці\',\'Бумага\'');
//
// if (compVariant === userVariant) {
//     console.log('Нічия');
// } else if (userVariant === 'Камінь' && compVariant === 'Ножиці'|| userVariant === 'Ножиці' && compVariant === 'Бумага' || userVariant ==='Бумага' && compVariant === 'Камінь'){
//     console.log('Ти виграв');
// } else {
//     console.log('Computer Win');
//     console.log(compVariant);
// }


// let animals = ["cat","dog","rabbit","bird","fish"];
// let random = Math.floor(Math.random()*animals.length);
// console.log(random);
// let randomAnimal = animals[random];
// console.log(randomAnimal);
// let result = prompt('Enter animals "cat","dog","rabbit","bird","fish"');
//
// if (randomAnimal === result) {
//     alert('ok')
// } else {
//     alert(`Wrong ${randomAnimal}`)
// }

// let quotes = ['Почніть робити те, що потрібно. Потім робіть те, що можливо. І ви раптом виявите, що робите неможливе. – Св.Франциск Асізський','Ніщо не є більш обтяжливим для мудрої людини і ніщо не доставляє йому більшого занепокоєння, ніж необхідність витрачати на дрібниці і непотрібні речі більше часу, ніж вони того заслуговують. – Платон', 'Кращий спосіб почати робити – перестати говорити і почати робити. – Уолт Дісней', 'Ваш час обмежений, не витрачайте його, проживаючи чуже життя. Не попадайтеся на гачок віровчення, яке існує на уявленнях інших людей. Не дозволяйте поглядам інших заглушати свій власний внутрішній голос. І дуже важливо мати мужність слідувати своєму серцю та інтуїції. Вони, так чи інакше, вже знають, що ви дійсно хочете зробити. Все інше – другорядне. – Стів Джобс','Ваш мозок може все. Абсолютно все. Головне, переконати себе в цьому. Руки не знають, що вони не вміють віджиматися, ноги не знають, що вони слабкі. Це знає ваш мозок. Переконавши себе в тому, що ви можете все, ви зможете дійсно все. – Роберт Кіосакі', 'Ви отримуєте від життя лише те, що наважуєтеся попросити. Не бійтеся підвищувати планку. – Опра Уїнфрі', 'Щаслива людина занадто задоволена сьогоденням, щоб занадто багато думати про майбутнє. – Альберт Эйнштейн','Іноді щось може йти не так, як хотілося-б, але ви не повинні зупинятися. – Майкл Джордан','Будь собою, інші ролі зайняті. – Оскар Уайльд'];


// let randomIndex = Math.floor(Math.random()*animals.length);
// let randomAnimal = animals[randomIndex];
// let message = prompt("which animal computer chose?" );
// let response = (message === randomAnimal) ? "Correct" : `Wrong it was ${randomAnimal}`;
// alert(response);

// let arr = [["cat","dog","fish"],[4,2,5,6,6,4],"hello",50];
// let ourFriends = [["Mike","fohn","Larry"],[1980,1990,2016]];

// let loginArr = ['bob', 'mango', 'admin', 'batman', 'superuser'];

// 1) Запропонувати користувачу ввести логін
// 2) Якщо логін є в масиві повідомити юзера що такий логін існує
// 3) Якщо такого логіна немає привітати користувача з реєстрацією і додати його логін в масив loginArr
// 4) Після додавання логіна показати в консолі новий масив в якому буде і логін нашого користувача
// let str = 'oko';
// let str2 = 'test';
// split
// reverse
// join
// 1)Перевірити чи являється слово паліндромом (слово що читається справа на ліво і зліва на право однаково)
//
// 2)Зробити перевірку і вивести в консоль true or false
// console.log(); // 'oko' true
// console.log(); // 'test' false


// while


// let number = 0;
// let arr = [];
// // // поки номер меньше 3 виводь в консоль цей номер і потім збільшуй на 1
// while (number < 3) {
//     let result = +prompt('Enter number');
//     arr.push(result);
//     number++;
// }
// console.log(arr);

// while (number >= 0 ) {
//     console.log(number);
//     number--;
// }

// let condition = true;
// let i = 2;
//
// while (condition) {
//     if (i === 3) {
//         condition = false
//     }
//     console.log(i);
//     i++;
// }


// do while

// let condition = 1;
// do {
//     console.log('Done');
//     condition++;
// }
// while (condition > 5);


//
// for
// особливість let i var


// for (let i = 0; i <= 10; i++ ) {
//     console.log(i);
// }
let arr = [5, 10, 25, 68, 78, 95];

// for (let i = 0, max = arr.length; i < max; i++) {
//     console.log(arr[i]);
// }
// let sum = 0;
// for (let element of arr) {
//     // sum = sum + element;
//     sum += element;
// }
// console.log(sum);
// console.log(i);

// 1) спитатися в користувача скільки товарі він хоче купити в магазині
// 2) На основаі пункта 1 стільки разів має спрацювати цикл
// 3) Цикл має пропонувати користуівачу ввести назву покупки
// 4) Ці назви зберігати в масиві
// 5) Вивести масив з покупками по закінченю цикла в консоль.


// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// nested loops

// for (let i = 0; i < 5; i++) {
//     for (let f = 5; f < 7; f++) {
//         console.log(f);
//     }
//     console.log(i);
// }
// console.log('hello');
// break and continue

// for (let i = 1; i <= 10; i++) {
//     // if (i === 5) {
//     //     break
//     // }
//     if (i >= 4 && i < 7) {
//         continue
//     }
//     console.log(i);
// }
// for (let i = 1; i < 11; i++) {
//     if (i % 2 !== 0) {
//         continue
//     }
//     console.log(i);
// }


// for (let i = 1; i <= 10; i++ ){
//     if (i % 2 !== 0) {
//         console.log('break');
//         break
// continue
// }
// console.log(i);
// }
// let newArr = [];
//  let animals = ["cat","dog","rabbit","bird","fish"];
// for (let i = 0, max = animals.length; i < max; i++ ) {
//     // animals[i] === 'rabbit' ? continue : newArr.push(animals[i]);
//
//     if (animals[i] === 'rabbit') {
//         break
//     }
//     // console.log(animals[i]);
//     newArr.push(animals[i]);
// }
// console.log(newArr);
//
// 1) Створити великий масив +
// 2) Створити 3 порожніх внутрішніх масива +
// 3) Заповнити 3 малентких масива.
// 4) Показати результат в консолі
// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

// let matrix = [];
// let m = 1;
// for (let i = 0; i < 3; i++ ) {
//     let smallArr = [];
//     for (let j = 0; j < 3; j++) {
//         smallArr.push(m);
//         m++;
//     }
//     matrix.push(smallArr);
// }
// console.log(matrix);

// let matrix = [];
// // let m = 1;
// for (let i = 0; i < 3; i++ ) {// 1, 2
//     let smallArr = [];
//     for (let j = 1; j < 4; j++) { // 1,2,3
//         smallArr.push(i+j);       // 2,4,6
//         // m++
//     }
//     matrix.push(smallArr);
// }
// console.log(matrix);


// let empty = [];
// let teamNumber = +prompt('Enter here your number');
// let teamAmount = +prompt('How much members do you have?')
// for(let i = 0; i < teamNumber;i++){
//     let first = [];
//     for(let a = 1;a <= teamAmount;a++) {
//        first.push(a+i*teamAmount);
//         console.log(first);
//    }
//     empty.push(first);
// }
// console.log(empty);
// console.log(arr[1][1][0]);

// let students = [1,2,3,4,5,6,7,8,9,10,11,12];
//
// let result = [
//     [1,5,7,4],
//     [2,8,10,12],
//     [3,6,9,11]
// ];


// arr and loop

// let arr = [5,8,'w','wewqr'];
// for (let i = 0, max = arr.length; i < max; i++) {
//     console.log(arr[i]);
// }

// let arr = [1,2,3,4];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// let arr = [1,2,3,4];
// for (let i = 0, max = arr.length; i < max; i++) {
//     console.log(arr[i]);
// }
// let userNames = ["mike", "fohn", "larry"];
//
// let x = 0;
// while (userNames[x]) {
//     console.log(userNames[x]);
//     x++;
// }


// shoping list 

// let addItem;
// let shoppingList = [];
// let howManyTimes = +prompt("How many items would you like to add?");
// for(let x = 0; x< howManyTimes; x++){
//     addItem = prompt("What do you want to add?");
//     if(addItem === null){
//         break;
//     }
//     shoppingList.push(addItem);
// }
// console.log(shoppingList);
//
// for( myItem of shoppingList){
//     console.log(myItem);
// }


// let clients = ['Mango', 'Ajax', 'Poly'];
//
// for(let val of clients) {
//     console.log(val);
//     // clients.push(val);
// }

// let numberArray = [];
// let sum = 0;
// for (let i = 0; i < Infinity; i++) {
//     let number = prompt('Enter number');
//     if (number === "" || number === null|| isNaN(number)) {
//         for (let item of numberArray) {
//             sum += +item;
//         }
//         break;
//     }
//     numberArray.push(number);
//
// }
// console.log(numberArray);
// console.log(sum);

// 1) Що ти хочеш?
// 2) Записати ввеедену інформацію
// 3) Повторно запитувати в користувача що він хоче запиати поки він не нажме "Відміна" або хрестик
// 4)Припинити запитувати
// 5) Вивести результат запитів

// let answer = [];
// // let question = prompt('What you want?');
// // console.log(question);
// for (let i = 1; i < Infinity; i++) {
//     let question = prompt('What you want?');
//     if (question === null) {
//         break;
//     }
//     answer.push(`${i}) ${question}`);
// }
// console.log(answer);


// let time = [1,2,[3,4],5];
// let sum=0;
//
// for(let element of time){
//     sum=sum+element;
// }
// console.log(sum);


// let arr = [12, 15 ,40 ,25];
//
// let userChoise = prompt('Enter number');
//
// if (isNaN(userChoise)) {
//     alert('Ahtung!!!!')
// } else {
//     if (arr.includes(+userChoise)) {
//         alert('WIN!!!!')
//     } else {
//         alert('ERROR!!!!')
//     }
// }
// let number = 0;
// do {
//     number = prompt('enter number > 100');
// } while (number <= 100 && number !== null);

// let students = ['Stupak', 'Yurchenko', 'Tabanyk', 'Baranov', 'Didenko', 'Chuprun', 'Babenko', 'Mukanovskyi', 'Plaski',
//     'Sokolov', 'Galatuk', 'Savin', 'Grygorchuk','Krasnoiarov',
//     'Rotman', 'Scryagin', 'Humenchuk'];
let quotes = ['Stupak', 'Yurchenko', 'Tabanyk', 'Baranov', 'Didenko', 'Chuprun', 'Babenko', 'Mukanovskyi', 'Plaski',
    'Sokolov', 'Galatuk', 'Savin', 'Grygorchuk','Krasnoiarov',
    'Rotman', 'Scryagin', 'Humenchuk'];
let random = Math.floor(Math.random() *quotes.length);
let text = quotes[random];
console.log(text);
// document.querySelector('#output').innerHTML = `<h1> До дошки виходить ${text}</h1>`;

/*
  Напишите скрипт, который выводит через console.log все
  числа от min до max, с двумя исключениями:
    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
    - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
  PS: используйте цикл for
*/

// const min = 1;
// const max = 100;
// for (let i = min; i <= max; i++) {
//     if (i % 3 === 0) {
//         console.log('Fizz');
//     }
//     else if ( i % 5 === 0) {
//         console.log('Buzz');
//     }
//     else {
//         console.log(i);
//     }
// }





/*
  Напишите скрипт, который выбирает из массива numbers
  все числа, которые больше чем значение переменной num,
  записывая эти числа в массив newArray.

  В результате в массиве newArray будут все подходяшие числа.

  PS: используйте цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newArray = [];

// for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] > num){
//         newArray.push(numbers[i]);
//     }
// }
//
// console.log(numbers);
// console.log(newArray);
// newArray
// for (let i = 0; i < numbers.length; i++){
//     // if (numbers[i] > num){
//     //     newArray.push(numbers[i]);
//     // }
//
//     numbers[i] > num ? newArray.push(numbers[i]): null;
// }

// for (let el of numbers){
//     el > num ? newArray.push(el): null;
// }
//
// console.log(numbers);
// console.log(newArray);
/*
  Напишите скрипт, который проверяет произвольную строку
  в переменной string и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/
//
// const string = "May the force be with you";
// let longestWord = '';
// let wordArr = string.split(' ');
// for (let word of wordArr) {
//     if (word.length > longestWord.length) {
//         longestWord = word;
//     }
// }
// console.log(longestWord); // 'force'

/*
  Напишите скрипт который:

  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.

  - Заканчивает запрашивать числа, как только посетитель введёт не число
    или нажмёт Cancel. При этом ноль 0 не должен заканчивать ввод,
    это разрешённое число.

  - После того как ввод был завершен, если массив не пустой,
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/
// let sum=0;
// let arrNum=[];
// let num=0;
// do{
//     num=prompt('Число?');
//     if(!isNaN(num)&& num!==null&& num!==''&& num!==' ') {
//         arrNum.push(+num);
//     }
// }
// while (!isNaN(num)&& num!==null);
// for(let elm of arrNum){
//     if(arrNum.length!==0){
//         sum+=elm;
//     }
// }
// console.log(sum);
// console.log(arrNum);