// -------- homework 3 -------------

console.log('exercise 6');
// Переписать код ниже с использованием конструкции switch…case

let numOrStr = prompt('input number or string');
console.log(numOrStr);


// if(numOrStr === null) {
// console.log('вы отменили')
// } else if( numOrStr.trim() === '' ) {
// console.log('Empty String');
// } else if( isNaN( +numOrStr ) ) {
// console.log(' number is Ba_NaN')
// } else {
// console.log('OK!')
// }

// решение с помощью switch

switch (isNaN(numOrStr) || numOrStr) {
    case null:
        console.log('вы отменили');
        break;
    case '':
        console.log('Empty String');
        break;
    case true:
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}

// null - 0
// '' - 0
// '123' - 123
// 'dkjhbfjh' - NaN     NaN === NaN - false

// console.log(isNaN('1') || '1');
// console.log(isNaN(null) || null);
// console.log(isNaN('') || '');
// console.log(isNaN('abs') || 'abs');

console.log('exercise 7');

// Написать, циклы, которые смогут:

// -Вывести на страницу в одну строку через запятую числа от 10 до 20

let string1 = '';
let i = 10;

for (; i <= 19; i++) {
    string1 += `${i}, `;
}
console.log(string1 + i);

// -Вывести квадраты чисел от 10 до 20

let string2 = '';
let j = 10;

for (; j <= 19; j++) {
    string2 += `${j*j}, `;
}
console.log(string2 + `${j*j}`);

// -Вывести таблицу умножения на 7

for (let i = 0; i <= 7; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}

// -Найти сумму всех целых чисел от 1 до 15

let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
console.log(`суммa всех целых чисел от 1 до 15 = ${sum}`)

// -Найти произведение всех целых чисел от 15 до 35

let mult = 1;

for (let i = 15; i <= 35; i++) {
    mult *= i;
}
console.log(`произведение всех целых чисел от 15 до 35 = ${mult}`);

// -Найти среднее арифметическое всех целых чисел от 1 до 500

let sum2 = 0;
let k = 1;
for (; k <= 500; k++) {
    sum2 += k;
    // console.log(sum2);
}
console.log(`среднее арифметическое чисел от 1 до ${k-1} = ${sum2/(k-1)}`)

// -Вывести сумму только четных чисел в диапазоне от 30 до 80

let sum3 = 0;

for (let i = 20; i <= 80; i++) {
    if (i % 2) {

    } else {
        sum3 += i;
        // console.log(sum3);
    }
}
console.log(`суммa только четных чисел в диапазоне от 30 до 80 = ${sum3}`)

// -Вывести все числа в диапазоне от 100 до 200 кратные 3

let string3 = '';

for (let i = 100; i <= 200; i++) {
    if (!(i % 3)) {
        string3 += `${i} `;
    }
}
console.log(`все числа в диапазоне от 100 до 200 кратные 3: ${string3}`);

// -Дано натуральное число. Найти и вывести на страницу все его делители.

let natureNumber = 120;
let string4 = '';
let evenDevisors = 0;
let sumEvenDev = 0;
for (let i = 1; i <= natureNumber; i++) {
    if (!(natureNumber % i)) {
        string4 += `${i} `;
        if (!(i % 2)) {
            evenDevisors++;
            sumEvenDev += i;
        }
    }
    // console.log(string4);
}
console.log(`Делители числа ${natureNumber}: ` + string4);

// -Определить количество его четных делителей

console.log(`Число четных делителей ${evenDevisors}`);

// -Найти сумму его четных делителей

console.log(`Сумма четных делителей ${sumEvenDev}`);

// -Напечатать полную таблицу умножения от 1 до 10

for (let i = 0; i <= 10; i++) {
    console.log(`Таблица умножения на ${i}`)
    for (let j = 0; j <= 10; j++) {

        console.log(`${i} * ${j} = ${j * i}`);
    }
}

console.log('exercise 8');

// Написать циклы, которые смогут:

// -Вывести числа от 20 до 30 через пробел, используя шаг 0,5 (20 20,5 21 21,5….)

let string5 = '';
let l = 20;
for (; l <= 30; l += 0.5) {
    string5 += `${l} `;
}
console.log(string5);

// -Один доллар стоит 27 гривен. Вывести данные с расчетом стоимости 10, 20, 30... 100 долларов

let dollar = 42;  //курс слегка подрос)))

for (let i = 10; i <= 100; i += 10) {
    console.log(`${i} Долларов это ${i * dollar} гривен`);
}

// -Дано целое число N. Вывести все целые числа от 1 до 100, квадрат которых не превышает числа N

let intNumber = 2000;
let mult2 = 1;
let string6 = '';

for (let i = 1; i <= 100; i++) {
    if ((i * i) < intNumber) {
        string6 += `${i} `;
    }
}
console.log(string6);

// -Дано целое число. Выяснить, является ли оно простым (простым называется число, большее 1, не имеющих других делителей кроме 1 и самого себя).

let intNumber2 = 17;
let count = 0;
for (let i = 2; i < intNumber2; i++) {
    if (!(intNumber2 % i)) {
        count++;
    }
}
if (count === 0) {
    console.log(`число ${intNumber2}  простое`);
}

// -Дано некоторое число. Определить, можно ли получить это число путем возведения числа 3 в некоторую степень. (Например, числа 9, 81 можно получить, а 13 - нельзя)

let intNumber3 = 243;

for (let i = 1; i < 1000; i++) {
    if (Math.pow(3, i) === intNumber3) {
        console.log(`${intNumber3} можно получить путем возведения числа 3 в степень ${i}`);
    }
}
