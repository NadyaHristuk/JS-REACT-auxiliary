// const adminLogin = 'admin';
// const adminPassword = 'm4ngo1zh4ackz0r';
// const cancel = alert('Отменено пользователем!');
// const denide = alert ('Доступ запрещен, неверный логин!');
// const welcome = alert('Добро пожаловать!');

// let name = prompt("Enter name");
// let pass = prompt ("Enter pass");

// Ваше задание - Сделать скрипт, который запрашивает Имя пользователя, 
// Потом выводит приветствие в котором обращаеться к пользователю по имени,
//  которое тот ввёл.


const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
let Login = prompt("Enter your login");
let Password;
 if (Login == null) {alert('Отменено пользователем!')} 
 else if (Login === adminLogin)
 { Password   = prompt("Enter your password")
 if (Password === null) 
 {alert('Отменено пользователем!')} 
 else if (Login !== adminLogin)
 {alert('Доступ запрещен, неверный логин!')} 
 else if (Password === adminPassword)
 {alert('Добро пожаловать!')}
 else 
 {alert('Доступ запрещен, неверный пароль!')};}
 