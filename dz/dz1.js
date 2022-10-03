'use strict'

// exercise 2.1

alert('Я - зовнішнiй JavaScript!')

// exercise 2.4

let admin;
let name;
name = 'Ivan';
admin = name;
alert(admin);

let ourPlanetName = 'Earth';
let currentUserName = 'Ivan';
console.log(ourPlanetName);
console.log(currentUserName);

const BIRTHDAY = '31.01.1986';
let currentDate = '20.09.2022';
const age = (currentDate - BIRTHDAY); //думаю должна быть функция преобразования строки в дату для вычислений но я пока не знаю оставлю так)
// console.log(age);

console.log("-------------- 2.5 -----------------");

let personName = "Ilya";
console.log(`Hello ${personName}`);
console.log(`Hello ${1}`);
console.log(`Hello ${"teacher)"}`);

console.log("-------------- 2.6 -----------------");

// let test = prompt("Test", 'default');
let test = prompt("Test");

console.log(test);
//не заметила разницы между IE и Chrome, если default не указать выводит в консоли пустую строку и там и там а не undefined как в учебнике пишут

let isBoss = confirm("Are you Boss?");
console.log(isBoss);

let newUserName = prompt("What's your name?");
console.log(`Welcome, ${newUserName}!`);

console.log("--------------- 2.7 ----------------");

let value = true;
console.log(typeof value);  // boolean
value = String(value);
console.log(typeof (value)); // string

console.log("6" / "2");  // 3

let str = "123";
console.log(typeof str);  // string
str = Number(str);
console.log(typeof str);  // number

let str2 = Number("this is string, not number");
console.log(str2);

console.log(Number("  123  "));      //123
console.log(Number(undefined));      // NaN
console.log(Number(null));           // 0
console.log(Number("text element")); // NaN
console.log(Number(false));          // 0
console.log(Number(true));           // 1

console.log("-------------------------------");

console.log(Boolean(null));    //false
console.log(Boolean(0));       //false
console.log(Boolean(NaN));     //false
console.log(Boolean("345"));   //true будь який не пустий рядок
let constUndefind;     // не визначенна переменна
console.log(Boolean(constUndefind));  //false
console.log(Boolean("0"));  //true бо рядок не пустий
console.log(Boolean(""));   //false  бо рядок пустий

console.log("-------------- 2.8 теорія -----------------");

console.log("3" + 2);  //буде 32 ( 2 конвертується в рядок. навпаки теж саме)
console.log("my " + "string");  // буде my string
console.log(2 + 2 + "1"); // буде 41 бо спочатку складаються 2+2 потім конкатенація рядків
console.log("1" + 2 + 2); // буде 122 бо першій операнд рядок и далі всі операнди вважаються рядками

console.log("6" - 2);   // 4 (- перетворює на число)
console.log("6" / "2");   // 3

console.log(+true);  // 1 (перетворює на число)
console.log(+"");    // 0, працює як і Number но коротше

let apples = "2";
let orange = "3";
console.log(apples + orange);   // 23
console.log(+apples + +orange); // 5

let n = 2;
n += 3;  // n = n + 3
n++;     // додає 1          тількі для змінной (7++ не можно)
console.log(n); // 6

let counter = 1;
let counter2 = 1;
let aa = ++counter;
console.log(aa);    // 2
let bb = counter2++;
console.log(bb);    // 1

console.log("--------------- завдання ----------------");

let a = 1, b = 1;
let c = ++a;
let d = b++;
console.log(a);  // 2
console.log(b);  // 2
console.log(c);  // 2
console.log(d);  // 1
console.log("---------------------");

let s = 2;
let x = 1 + (s *= 2);
console.log(s);  // 4
console.log(x);  // 5
console.log("---------------------");

console.log("" + 1 + 0);    // 10
console.log("" - 1 + 0);    // -1
console.log(true + false);  // 1
console.log(6 / "3");       // 2
console.log("2" * "3");     // 6
console.log(4 + 5 + "px");  // 9px
console.log("$" + 4 + 5);   // $45
console.log("4" - 2);       // 2
console.log("4px" - 2);     // NaN
console.log("  -9  " + 5);  // "  -9  5"
console.log("  -9  " - 5);  // -14
console.log(null + 1);      // 1
console.log(undefined + 1); // Nan  (undefined у числовому це NaN)
console.log(" \t \n" - 2);  // -2   (Символи пробелів дають 0)
console.log("---------------------");

let a1 = prompt("Перше число?", 1);
let b1 = prompt("Друге число?", 2);
alert(+a1 + +b1); // 3

console.log("-------------- 2.9 теорія -----------------");

console.log(null);
console.log(null == 0);  // false    but why?????  - тому що null дорівнюється тількі undefined і більш ничому
console.log(null >= 0);  // true    цікаво)  null перетворюється на число 0


console.log("--------------- 2.9 завдання ----------------");

console.log(5 > 4);                  // true
console.log("ананас" > "яблуко");    // false
console.log("2" > "12");             // true  сравнение строк посимвольно
console.log(undefined == null);      // true
console.log(undefined === null);     // false
console.log(null == "\n0\n");        // false
console.log(null === +"\n0\n");      // false

console.log("--------------- 2.10 завдання ----------------");

if ("0") {
  console.log( 'Привіт' );  // "0" - true
}

let company = prompt("Яка офіційна назва JavaScript?", "");

if (company == 'ECMAScript') {
      console.log('Правильно!');
} else {
  console.log('Ви не знаєте? ECMAScript!');
}
console.log("---------------------");

let numberFromUser = prompt("Enter number", "");
if (numberFromUser > 0) {
      console.log('Your number is 1');
} else if (numberFromUser < 0){
  console.log('Your number is -1');
} else console.log('Your number is 0')

let result;

if (a + b < 4) {
  result = 'Нижче';
} else {
  result = 'Вище';
}

console.log((a + b < 4) ? 'Нижче' : 'Вище');
console.log("---------------------");

let message;
let login = prompt('введить логін', '');
if (login == 'Працівник') {
  message = 'Привіт';
} else if (login == 'Директор') {
  message = 'Вітаю';
} else if (login == '') {
  message = 'Немає логіну';
} else {
  message = '';
}

console.log((login == 'Працівник') ? 'Привіт' :
    (login == 'Директор') ? 'Вітаю' :
        (login == '') ? 'Немає логіну' : 'помилка');

console.log("--------------- 2.11 завдання ----------------");

console.log(null || 2 || undefined); // 2

console.log( console.log(1) || 2 || console.log(3) ); // 1 and 2

console.log(1 && null && 2);  // null

// alert( alert(1) && alert(2) );  // 1 and undefined

console.log(null || 2 && 3 || 4);  // 3

let ageUser = 93;
if (ageUser >= 14 && ageUser <= 90) {
  console.log('Age from 14 to 90');
}

if (!(ageUser >= 14 && ageUser <= 90)) {
  console.log('younger than 14 or elder than 90');
}
if (ageUser < 14 || ageUser > 90) {
  console.log('younger than 14 or elder than 90');
}

if (-1 || 0) console.log( 'перший' ); // its work
if (-1 && 0) console.log( 'другий' );
if (null || -1 && 1) console.log('третій');  // its work

let userLogin = prompt('Enter login', '');
if (userLogin === 'admin') {
  let userPassword = prompt('Enter password', '');
  if (userPassword === 'owner') {
    alert('Welcome!');
  } else if (userPassword === '' || userPassword === null) {
    alert('escape');
  } else {
    alert('password is not correct');
  }
} else if (userLogin === '' || userLogin === null) {
  alert('escape');
} else {
  alert('I dont know you');
}











console.log("--------------  решала для себя -----------------");
// console.log('558' > 22++);   // mistake

let userCounter = 0;
let newUsers = userCounter++;
console.log(newUsers);               // 0

console.log(!false && 11 || 18 && !''); // 11
console.log(!false && 11 ); // 11
console.log(18 && !''); // true

let names = 0;
console.log(names ?? 'no names');   // 0

if (1 === '1') {
  console.log('its true');
} else {
  console.log('its false'); // this
}

if (5 == '5') {
  console.log('its true'); // this
} else {
  console.log('its false');
}

console.log((92 > '11' && 58 < 100) ? 'true' : 'false'); // true

if (0) {
  console.log('its false');
} else {
  console.log('its true'); // this
}
