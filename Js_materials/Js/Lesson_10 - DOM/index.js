// DOM - дерево обєктів доступне через зміну в JS, елементи які малює браузер по розмітці
// кожен тег це окремий елемент DOM
// CSSOM
// Показати структкру через додаток в хромі


// навігація по DOM

// let title = document.querySelector('.title');
// let li = document.querySelectorAll('.item')
// console.log(Array.from(li));
// let li = [...document.querySelectorAll('.item')];
// console.log(li);
// let ul = document.querySelector('.list');
// console.log(ul);
// let items = [...document.querySelectorAll('.item')];
// let result = Array.from(items);
// console.log(items);
// console.log(ul.children);
// console.log(ul.parentNode);
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);
// let ul = document.querySelector('.list');
// console.log(ul);
// console.log(ul.children);
// console.log(ul.parentElement);
// console.log(ul.nextElementSibling);
// console.log(ul.previousElementSibling);

// querySelector and before
// let title = document.querySelector('#title');
// let li = document.querySelectorAll('.item');
// console.log(li);
// const title = document.querySelector(`.text::after`);
// console.log(title);
// console.log(document.querySelector('.text'));
// console.log(document.querySelector('.item'));
// const textList = document.querySelectorAll('.text');
// console.log(Array.from(textList));
//
// console.log(document.getElementsByClassName('text'));
// console.log(document.getElementsByTagName('li'));
// console.log(document.getElementById('title'));

//  matches

// const p = document.querySelector('p');
// console.log(p);
// console.log(p.matches('.text'));
// console.log(p.matches('.title'));

// innerHTML i textContent

// const div = document.querySelector('div');
// console.log(div.innerHTML);
// console.log(div.textContent);
// div.innerHTML += `<h1>Inner HTML</h1>`;
// div.textContent += `<h1>Inner HTML</h1>`;

// let li = document.querySelector('.item');
// console.log(li.dataset.info);
// console.log(li.id);

// classList

// let text = document.querySelector('.par');
// console.log(text);
// console.log(text.classList.length);
// console.log(text.classList.contains('par'));
// text.classList.add('big-text');
// text.classList.remove('par');
// text.classList.toggle('par');
// text.classList.toggle('big');

// attr
// const lnk = document.querySelector('.link');
// console.log(lnk);
// console.log(lnk.hasAttribute('title'));
// console.log(lnk.getAttribute('id'));
// console.log(lnk.id);
// lnk.setAttribute('title', 'super link');
// lnk.setAttribute('target', '_blank');
// // console.log(link);
// console.log(lnk.attributes);
// lnk.removeAttribute('title');
// console.log(link.attributes);
// console.log(link.href);
// console.log(link.title);
// console.log(link.title = 'test');
// data dataset
// let li = document.querySelector('#one');
// console.log(li);
// console.log(li.dataset.info);
// let par = document.querySelector('.text');
// par.innerHTML = `<span>Hello I'm from js</span>`
// par.textContent = 'Hello World';
// console.log(par.textContent);
// console.log(par.innerHTML);
// let ul = document.querySelector('.list');
// console.log(ul.textContent);
// console.log(ul.innerHTML);

// let p = document.querySelector('#lorem');
// console.log(p.textContent);
// console.log(p.innerHTML);

// create
// let div = document.querySelector(".container");
// let mainTitle = document.createElement('h1');
// // console.log(mainTitle);
// mainTitle.classList.add('main-title');
// mainTitle.setAttribute('id', 'caption');
// mainTitle.textContent = 'Header';

// div.before(mainTitle);

// let copy = mainTitle.cloneNode(true);
// console.log(copy);

// BOM


// console.log(navigator);
// console.log(navigator.userAgent);
// console.log(navigator.vendor);
// console.log(window.screen); 
// console.log(window.screen.width);
// console.log(window.screen.height);
// url parametrs


// 'https://mysite.com/books/e3q76gm9lzk?category=adventure&status=unread#comments'
// 'https://bt.rozetka.com.ua/refrigerators/c80125/filter/producer=atlant-,beko;36574=49204;36614=49369;36629=49499/'


// https://rozetka.com.ua/daewoo_dacs_2500e/p11550179/
// console.log(location);
// console.log(history);
// geolocation

// function showLocation(position) {
//     console.log(position);
//     let latitude = position.coords.latitude;
//     let longitude = position.coords.longitude;
//     alert("Latitude : " + latitude + " Longitude: " + longitude);
//  }

//  function errorHandler(err) {
//     if(err.code == 1) {
//        alert("Error: Access is denied!");
//     } else if( err.code == 2) {
//        alert("Error: Position is unavailable!");
//     }
//  }

//  function getLocation() {

//     if(navigator.geolocation) {

//        navigator.geolocation.getCurrentPosition(showLocation, errorHandler);
//     } else {
//        alert("Sorry, browser does not support geolocation!");
//     }
//  }

//  getLocation();




// function initMap() {
//     const mapElement = document.querySelector('.js-google-map');
//     const mapCenter = { lat: 50.4501, lng: 30.5234 };
//     const mapOptions = {
//         center: mapCenter,
//         zoom: 20
//     }

//     const map = new google.maps.Map(mapElement, mapOptions);

//     const marker = new google.maps.Marker({
//         position: mapCenter,
//         map: map,
//     });
// }

// https://www.youtube.com/playlist?list=PLgGbWId6zgaXFR4SW_3qJ55cxmEqRNIzx

// let a = document.createElement('figure');
// console.log(a);




// create element


// add classes


// add atribute


// add text


// paste to page