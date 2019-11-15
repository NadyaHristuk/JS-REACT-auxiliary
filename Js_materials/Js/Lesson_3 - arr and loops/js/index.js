// let arr2 = new Array(2, 5, 10);
// let arr = [52, 23, 12, 10];
// console.log(arr);
// console.log(arr.length);
// let length = arr.length;
// console.log(arr[length-1]);
// let arr = [
//     [1,2,3], // 0
//     [4,5,6], // 1
//     [7,8,9], // 2
// ];
// console.log(arr);

// console.log(arr[0][1]);

// let arr = [1,5,6,7,9];

// console.log(arr[0]);
// console.log(arr[10]);

// replace
// let firstArray = [1,2,3];
// console.log(firstArray[0]);
// firstArray[0] = 100;
// console.log(firstArray);
// // console.log(firstArray[25]);
// firstArray[25] = 12;
// console.log(firstArray);

// push
// let firstArray = [1,2,3];
// firstArray.push(12);
// firstArray.push(10,11);
// firstArray.push(11);
// console.log(firstArray);


// pop
// let firstArray = [1,2,3];
// let result = firstArray.pop();
// console.log(result);
// console.log(firstArray);



// shift

// let firstArray = [1, 2, 3, 4];
// console.log(firstArray.shift());
// console.log(firstArray);

// unshift

// let firstArray = [1, 2, 3, 4];
// firstArray.unshift(27, 52);
// console.log(firstArray);

// length

// let firstArray = [5, 8, 13, 14, 25, 26, 98, 75];
// // // console.log(firstArray.length);
// let lengthArr = firstArray.length;
// console.log(firstArray[lengthArr - 1]);

// indexOf
//
// let firstArray = ['abc', 'f', 'h', 'b', 'd','f','h','j'];
// console.log(firstArray.indexOf('z')); 
// console.log(firstArray.indexOf('abc'));
// console.log(firstArray.indexOf('a'));
// console.log(firstArray.indexOf('h'));
// console.log(firstArray.indexOf("q"));
// console.log(firstArray.indexOf('y'));

// includes

// let firstArray = [11, 112, 23, 45];
// console.log(firstArray.includes(23));
// console.log(firstArray.includes(150));

let logins = ['rew', 'qwewwe', 'apple', 'js', 'row', 'col']

// 1) Запитати логін
// 2) Перевірити чи існує логін в базі
// 3) Якщо логін існує вивести алерт ("Такий логін вже існує")
// 4) Якщо логін не існує вивести алерт ("Вітаємо") 

// let login = prompt('Enter login');

// if(logins.includes(login)) {
//     alert('Login exist')
// } else {
//     alert('Вітаємо')
// }

// let login = prompt('Enter login');

// logins.includes(login) ? alert ('Login exist') : alert('Вітаємо');



// concat

// let firstArray = [10, 8, 7, 5];
// let secondArr = [12, 13, 16, 19, 87];
// let newArray = ['add me', 'join us'];
// let result = firstArray.concat(secondArr, newArray);
// console.log(result);
// console.log(firstArray);


// slice and splice
// slice start index and end index do not includes
// splice start index and how many

// let arr = [5, 10, 12, 15, 25];
// let newArr = arr.slice();

// console.log(arr);
// console.log(newArr);

// let arr = [1, 5, 9, 8, 7, 10];
// arr.splice(3,2);
// console.log(arr);
// // // delete
// arr.splice(2,1);
// console.log(arr);
// console.log(x);
// // paste without delete
// arr.splice(1,0,150);
// console.log(arr);
// // paste with delete
// arr.splice(1,2,50,90)
// console.log(arr);
// console.log(x);

// let str = 'Hello world';
// let arrFromStr = str.split(' ');
// console.log(arrFromStr.join('-'));
// arrFromStr.reverse();
// console.log(arrFromStr);
// let joinStr = arrFromStr.join('');
// console.log(joinStr);
// console.log(str === joinStr);


// reverse
// let arr = [1, 5, 9, 8, 7, 10];
// arr.reverse();
// console.log(arr);
// let newArr = arr.slice().reverse();
// console.log(arr);
// console.log(newArr);

// 1) Записуємо в змінну строку з промта
// 2) Зробити строку масивом
// 3) Скопіювати масив
// 4) Реверсимо масив
// 5) З масивів робимо строки
// 6) Порівнюємо дві строки і виводимо результат в консоль; 



// // palindrome
//
// let str = 'Hello';
// console.log(str.split('').reverse().join(''));

// let animals = ["cat","dog","rabbit","bird","fish"];

// let index = Math.floor(Math.random()*animals.length);
// let comp = animals[index];
// let user = prompt('Enter your choise');
// if(comp === user) {
//     alert('User win')
// } else {
//     alert(`Comp win ${comp}`)
// }

// // 1) Вибираємо випадкове число (від 0 до довжини масива);
// // 2) Записати в змінну звернення типу масив[індекс];
// // 3) Вивести змінну з пунтку 2 в алерт;

// let index = Math.floor(Math.random()*animals.length);
// alert(animals[index]);

// 1) Через prompt вводимо свій варіант тваринки
// 2) Варіант компютера записати в змінну
// 3) Порівнюємо наш варіант з копютерним
// 3,1) Якщо варіанти співпали тоді виводимо алертом що юзер виграва.
// 3,2) Якщо варіанти не співпали кажемо що користувач програв і виводимо варіант компютера.

// Написати гру Камінь Ножиці Папір.
// Варіанти вибору потрібно зберігати в масиві
// Користувач вводить свій варіант
// Компютер вибирає свій рандомний варівант з масиву
// Первіряємо вибір користувача і вибір компютера. 
// Опрацювати всі варіанти:
// 1) Варіанти де виграє користувач
// 2) Варіанти де виграє компютер
// 3) Варіанти де виходить нічия.








// let quotes = ['Почніть робити те, що потрібно. Потім робіть те, що можливо. І ви раптом виявите, що робите неможливе. – Св.Франциск Асізський','Ніщо не є більш обтяжливим для мудрої людини і ніщо не доставляє йому більшого занепокоєння, ніж необхідність витрачати на дрібниці і непотрібні речі більше часу, ніж вони того заслуговують. – Платон', 'Кращий спосіб почати робити – перестати говорити і почати робити. – Уолт Дісней', 'Ваш час обмежений, не витрачайте його, проживаючи чуже життя. Не попадайтеся на гачок віровчення, яке існує на уявленнях інших людей. Не дозволяйте поглядам інших заглушати свій власний внутрішній голос. І дуже важливо мати мужність слідувати своєму серцю та інтуїції. Вони, так чи інакше, вже знають, що ви дійсно хочете зробити. Все інше – другорядне. – Стів Джобс','Ваш мозок може все. Абсолютно все. Головне, переконати себе в цьому. Руки не знають, що вони не вміють віджиматися, ноги не знають, що вони слабкі. Це знає ваш мозок. Переконавши себе в тому, що ви можете все, ви зможете дійсно все. – Роберт Кіосакі', 'Ви отримуєте від життя лише те, що наважуєтеся попросити. Не бійтеся підвищувати планку. – Опра Уїнфрі', 'Щаслива людина занадто задоволена сьогоденням, щоб занадто багато думати про майбутнє. – Альберт Эйнштейн','Іноді щось може йти не так, як хотілося-б, але ви не повинні зупинятися. – Майкл Джордан','Будь собою, інші ролі зайняті. – Оскар Уайльд'];




//loops

// while

// 1) лічильник
// 2) Умова виконання циклу
// 3) Тіло циклу
// 4) Лічильник має змінюватися

// let counter = 0;
// let arr = [];
// while(counter < 5) {
// let a = prompt('Enter number');
// arr.push(a);
// counter++;
//     // counter +=1;
//     // counter = counter + 1;
// }

// let counter = 10;
// let arr = [];

// do {
//     let a = prompt('Enter number');
//     arr.push(a);
//     counter++;
// } while (counter < 5)

// console.log(arr);
// let arr = [];
// for(let i = 0; i < 5; i++) {
//     let a = prompt('Enter n');
//     arr.push(+a);
// }
// console.log(arr);

// let number = 0;
// let arr = [];
// // // // поки номер меньше 3 виводь в консоль цей номер і потім збільшуй на 1
// // console.log(number < 3);
// while (number < 4) {
//     let userNumber = prompt('Enter number');
//     if(userNumber !== null && userNumber !== '') {
//       if (Number(userNumber) === 9) {
//         alert('9 це погане число');
//         number+=1;
//         continue;
//       } else {
//         arr.push(Number(userNumber));
//         number+=1;
//       }
//     }  else {
//       break;
//     }
// }
// console.log(userNumber);
// console.log(arr);

// // do while

// let number = 10;
// do {
//   console.log(number);
//   number++;
// }
// while (number < 5);

// while (number < 5) {
//   console.log(number);
//   number++;
// }
// // console.log(condition);

//
// for
// особливість let i var
// let arr = [];
// for(let i = 0; i < 10; i+=1) {
//   let number = prompt('Enter number');
//   arr.push(number);
// }
// console.log(arr);

// let arr = [5, 10, 25, 68, 78, 95];
// let total = 0;
// // for(let i = 0; i <arr.length; i++) { // імперативний код
// //     total += arr[i];
// // }

// for (let el of arr) { // декларативний код
//     total += el;
// }
// console.log(total);

// let arrTenPrc = [];
// // for(let i = 0, max = arr.length; i < max; i+=1) {
// //   arrTenPrc.push(Number((arr[i]*1.1).toFixed(2)));
// // }
// // console.log(arrTenPrc);

// for(let element of arr) {
//   arrTenPrc.push(Number((element*1.1).toFixed(2)))
// }

// 1) спитатися в користувача скільки товарі він хоче купити в магазині
// 2) На основаі пункта 1 стільки разів має спрацювати цикл
// 3) Цикл має пропонувати користуівачу ввести назву покупки
// 4) Ці назви зберігати в масиві
// 5) Вивести масив з покупками по закінченю цикла в консоль.

// let number = prompt('Enter number');
// let arr = [];
// for (let i = 0; i < number; i++) {
//     let answer = prompt('Enter goods');
//     arr.push(answer);
// }
// console.log(arr);

// let arr = [];
// for(let i =0; i < Infinity; i++) {
//     let number = prompt('Enter number');
//     if(Number(number) === 9) {
//         break;
//     }
//     arr.push(number);
// }

// console.log(arr);

// let arr = [5,10,15,20,25,30,35,40,48,51];

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 !==0) {
//         continue;
//     }
//     console.log(arr[i]);
// }

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

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log('fuzz');
        continue;
    } else if (i % 5 === 0) {
        console.log('buzz');
        continue;
    }
    console.log(i);
}