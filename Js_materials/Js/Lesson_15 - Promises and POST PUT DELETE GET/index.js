// pending - ожидание
// resolve - выполнено успешно
// rejected - выполнено с ошибкой

// const pro = new Promise(function (ok, error) {
//     let i = 1;
//     let arr = [];
//     while (i < 10000000) {
//         arr.push(i);
//         i++
//     }
//     ok(arr)
// })

// pro
//     .then(data => console.log(data))
// console.log('hello0');
// console.log('hello1');
// console.log('hello2');

// const sum = new Promise(function (resolve, reject) {
//     let count = 0;
//     let arr = [];
//     while (count < 10000000) {
//         let random = Math.floor(Math.random() * 100);
//         arr.push(random)
//         count++
//     }
//     let result = arr.reduce((acc, el) => acc + el, 0);

//     if (result % 2 === 0) {
//         resolve(result)
//     } else {
//         reject('Result wrong')
//     }
// })

// function sum(iteration) {
//     return new Promise(function (resolve, reject) {
//         let count = 0;
//         let arr = [];
//         while (count < iteration) {
//             let random = Math.floor(Math.random() * 100);
//             arr.push(random)
//             count++
//         }
//         let result = arr.reduce((acc, el) => acc + el, 0);

//         if (result % 2 === 0) {
//             resolve(result)
//         } else {
//             reject('Result wrong')
//         }
//     })
// }

// sum(500)
//     .then(data => {
//         console.log(data)
//         return data;
//     })
//     .then(result => Math.sqrt(result))
//     .then(sqrt => sqrt / 2)
//     .then(division => Math.pow(division, 3))
//     .then(final => console.log(final))
//     .catch(err => console.error(err))
// console.log('hello');


// sum(2000)
//     .then(data => console.log(data))
//     .catch(err => console.error(err))

// Promise.all([sum(50),sum(10000),sum(1000000)])
// .then(data => console.log(data))
// .catch(err => console.log(err))

// Promise.race([sum(50),sum(10000)])
// .then(data => console.log(data))
// .catch(err => console.log(err))
// const promise = new Promise((resolve, reject) => {

// let post = document.querySelector('#post');
// let postInput = document.querySelector('#post input');
// let del = document.querySelector('#delete');
// let delInput = document.querySelector('#delete input');
// let put = document.querySelector('#PUT');
// let putInput = document.querySelector('#PUT input');

// function sendData(e) {
//     e.preventDefault();
//     console.log(postInput.value);
//     fetch('http://localhost:3001/tasks', {
//         method: 'post',
//         body: JSON.stringify({text: postInput.value, time: Date.now()}),
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     })
//     .then(data => data.json())
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
//     post.reset();
// }

// post.addEventListener('submit', sendData);

// function deleteData(e) {
//     e.preventDefault();
//     console.log(delInput.value);
//     fetch(`http://localhost:3001/tasks/${delInput.value}`, {
//         method: 'delete',
//     })
//     .then(data => data.json())
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
//     del.reset();
// }
// del.addEventListener('submit', deleteData);

// function updateData(e) {
//     e.preventDefault();
//     console.log(putInput.value);
//     fetch(`http://localhost:3001/tasks/${2}`, {
//         method: 'put',
//         body: JSON.stringify({text:putInput.value}),
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     })
//     .then(data => data.json())
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
//     put.reset();
// }
// put.addEventListener('submit', updateData);
