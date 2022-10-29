//-----------------------------------Функции-----------------------------------

// Наступна функція повертає true, якщо параметр age більший за 18.
// Інакше вона запитує підтвердження через confirm і повертає його результат:

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm('Батьки дозволили?');
//   }
// }

// checkAge(19);

// Чи буде функція працювати по-іншому, якщо забрати else?

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm('Батьки дозволили?');
// }

// Чи є різниця в поведінці цих двох варіантів?

// відповідь - немає різниці

//----------------------------------------------------

// Наступна функція повертає true, якщо параметр age більший за 18.
// Інакше вона запитує підтвердження через confirm і повертає його результат:

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Батьки дозволили?');
//   }
// }

// Перепишіть функцію, щоб вона робила теж саме, але без if і в один рядок.

// Зробіть два варіанти функції checkAge:

// Використовуючи оператор ?
// Використовуючи оператор АБО ||

function ckeckAge(age) {
    return ((age > 18) ? true : confirm('Батьки дозволили?'));
}

// checkAge(13);

function checkAge(age) {
    return ((age > 18) || confirm('Батьки дозволили?'));
}

//------------------------------------------

// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// Наприклад:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function minOfTwo(a, b) {
    return a < b ? a : b;
}
console.log(minOfTwo(1, 1));

//-------------------------------------------

// Напишіть функцію pow(x, n), яка повертає число x, піднесене до степеня n. Інакше кажучи, множить число x саме на себе n разів і повертає результат.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

// Створіть сторінку, яка запитує x та n, а потім показує результат pow(x, n).

// P.S. В цій задачі функція повинна підтримувати лише натуральні значення n, тобто цілі числа, починаючи з 1.

function pow(x, n) {
    return Math.pow(x, n);
}
console.log(pow(3, 2));

// Кто попадет в консоль первым Вася или Коля?

function showName() {
    console.log("Вася");
}
setTimeout(showName, 0);
console.log("Коля");      // Коля

// Верно ли вызвана функция

// showMessage();
// function showMessage() {
//     console.log("message");   // верно
// }

// Верно ли вызвана функция

// showMessage();
// let showMessage = function() {
//     console.log("message");   // не верно
// }

// Как решить проблему

'use strict'
if (2 > 1) {
    function showMessage() {
        console.log("message2");
    }
}
showMessage();

// функция видна только в области блока if чтобы вызвать ее снаружи введем новую переменную и присвоим ей эту функцию

let showM;
if (2 > 1) {
    showM = function showMessage() {
        console.log("message2");
    }
}
showMessage();

//--------------------------------Функциональные выражения--------------------------------

let age = 19; // для прикладу присвоїмо 16

if (age < 18) {
  welcome();               // \   (виконується)
                           //  |
  function welcome() {     //  |
    alert("Привіт!");      //  |  Оголошення Функції доступне
  }                        //  |  усюди в блоці, що його містить
                           //  |
  welcome();               // /   (виконується)

} else {

    function welcome() {
        alert("Вітання!");
    }
}

// Тут фігурні дужки закриваються,
// тому Оголошення Функції всередині них нам не доступне

welcome(); // помилка в суворому режимі (ReferenceError: welcome is not defined)

//--------------------------------Стрелочные функции--------------------------------

// Замініть Функціональні Вирази на стрілкові функції у коді нижче:

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Ви згодні?",
//   function() { alert("Ви погодились."); },
//   function() { alert("Ви скасували виконання."); }
// );

// с оператором ? и стрелочными функциями

// function ask(question, yes, no) {
//   confirm(question) ? yes(): no();
// }

// ask(
//   "Ви згодні?",
//   () => alert("Ви погодились."),
//   () => alert("Ви скасували виконання.")
// );

//?-------------------------------------------------------------------------------
// Ваша задача состоит в том, чтобы создать функцию, которая может принимать любое неотрицательное целое число в качестве аргумента и возвращать его с цифрами в порядке убывания. По сути, переставьте цифры, чтобы получить максимально возможное число.

function descendingOrder(n){
    reversed = Array.prototype.map.call(n, (x) => x).reverse().join('');
    return reversed;
}

console.log(desceningOrder(756559));
