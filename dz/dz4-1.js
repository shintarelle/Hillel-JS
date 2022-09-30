console.log("exercise 11");

let users = [
{
"index": 0,
"isActive": true,
"balance": "$2,226.60",
"name": "Eugenia Sawyer",
"gender": "female",
"phone": "+1 (840) 583-3207",
"address": "949 John Street, Rose, Puerto Rico, 1857"
},
{
"index": 1,
"isActive": true,
"balance": "$2,613.77",
"name": "Pauline Gallegos",
"gender": "female",
"phone": "+1 (985) 593-3328",
"address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
},
{
"index": 2,
"isActive": false,
"balance": "$3,976.41",
"name": "Middleton Chaney",
"gender": "male",
"phone": "+1 (995) 591-2478",
"address": "807 Fleet Walk, Brutus, Arkansas, 9783"
},
{
"index": 3,
"isActive": true,
"balance": "$1,934.58",
"name": "Burns Poole",
"gender": "male",
"phone": "+1 (885) 559-3422",
"address": "730 Seba Avenue, Osage, Alabama, 6290"
},
{
"index": 4,
"isActive": true,
"balance": "$3,261.65",
"name": "Mcfadden Horne",
"gender": "male",
"phone": "+1 (942) 565-3988",
"address": "120 Scholes Street, Kirk, Michigan, 1018"
},
{
"index": 5,
"isActive": false,
"balance": "$1,790.56",
"name": "Suzette Lewis",
"gender": "female",
"phone": "+1 (837) 586-3283",
"address": "314 Dunne Place, Bawcomville, Guam, 9053"
}
]

// Дан массив объектов. Вывести массив телефонных номеров пользователей, у которых баланс более 2000 долларов. И найти сумму всех балансов пользователей

let richUsers = [];
let sumBalanses = 0;

users.forEach(function (item, index, array) {

    let str = (item.balance).substring(1);

    if (str > '2,000') {
        let number = str.replace(',', '');
        // console.log(number);
        // console.log(item.phone);
        richUsers.push(item.phone);
        sumBalanses += +number;
        // console.log(sumBalanses);
    }
});
console.log(sumBalanses);
console.log(richUsers);

//?---------------------------------------------------------------------------------------

console.log("exercise 12");

// Реализуйте функцию removeElement(array, item), чтобы удалить элемент item из массива array.
// Например:

const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, element) {
    let index = array.indexOf(element);
    // console.log(index);
    array.splice(index, 1);
}
removeElement(array, 5);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]

//?---------------------------------------------------------------------------------------

console.log("exercise 13");

// Эта дз состоит из четырех небольших задач, за реализацию каждой из них можно получить 25 баллов:

// -Дан массив с элементами разных типов. Создать функцию которая высчитывает среднее арифметическое только числовых элементов данного массива.

let arrayDifferentTypes = ['word', 3, 5, 'name', 3.5, true, 7, 8, -2, false,];
let sumOnlyNumber = 0;
let numberCount = 0;

arrayDifferentTypes.forEach(function (item, index, array) {
    if (typeof item === 'number') {
        // console.log(item);
        numberCount++;
        sumOnlyNumber += item;
    }
});
let avarage = sumOnlyNumber / numberCount;
console.log(`Среднее арифметическое числовых значений массива ${avarage}`)

// -Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak. В переменной znak может быть: +, -, *, /, %, ^ (степень). Вывести результат математического действия, указанного в переменной znak. Оба числа и знак получаются от пользователя.

console.log('------------------------------------');

let number1 = prompt('enter first number x', '');
let number2 = prompt('enter second number y', '');
let action = prompt('enter action', '');

function doMath(x, znak, y) {
    if (znak == '+') {
         return sumNumber(x, y);           // можно вызвать еще одну функцию или просто вернуть сумму
        // return Number(x) + Number(y);
    } else if (znak == '-') {
        return x - y;
    } else if (znak == '*') {
        return x * y;
    } else if (znak == '/') {
        return x / y;
    } else if (znak == '%') {
        return x % y;
    } else if (znak == '^') {
        return Math.pow(x, y);
    }
}
function sumNumber(x, y) {
    return Number(x) + Number(y);
}

console.log(`Your result ${number1} ${action} ${number2} = ${doMath(number1, action, number2)}`);


// -Написать функцию заполнения пользовательскими данными двумерного массива. Длину основного массива и внутренних массивов задаёт пользователь. Значения всех элементов всех массивов задаёт пользователь.

let arrayOne = [];

function createArray() {
    let firstAr = prompt('задайте длину основного массива?', '1');
    arrayOne.length = +firstAr;

    // console.log(arrayOne);

    for (let i = 0; i < +firstAr; i++) {
        let arrayTwo = [];
        let j = prompt('длина подмассива?', '1');
        arrayOne[i] = arrayTwo;
        arrayTwo.length = +j;
        for (let i = 0; i < arrayTwo.length; i++) {
            let value = prompt('введите значение', '');
            arrayTwo[i] = value;
        }
        // console.log(arrayTwo);
    }
    return arrayOne;
}

console.log(createArray());

// -Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом. 'func("hello world", ['l', 'd'])' вернет нам "heo wor". Исходную строку и символы для удаления задаёт пользователь


// let str = prompt('Enter string', '');
let str = 'Hello world?';


symbols = (prompt('введите символы которые надо удалить через запятую ', ''));
let symbArray = symbols.split(',');
console.log(symbArray);
// let symbArray = ['l', 'd'];


function delSymb(string, symbolString) {
    let newString;
    a = str.length;
    for (let i = 0; i < symbolString.length; i++) {
        let symbol = symbolString[i];

        for (let i = 0; i < a; i++) {
            newString = string.replace(symbol, '');
            string = newString;
        }
    }
        return newString;
}

console.log(delSymb(str, symbArray));
