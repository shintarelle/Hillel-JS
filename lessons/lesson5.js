// function randomIntFromInterval(min, max) { // min and max included
//     return Math.floor(Math.random() * (max - min + 1) + min).toString();
//   }

// const mainN = prompt('Введите длину главного массива');
// const subN = prompt('Введите длину внутренних массивов');


// function hand(item, i, arr) {

// }

//  const arr = new Array(+mainN).fill(0).map((_, ind) =>
//      new Array(+subN).fill(0).map((_, i) => prompt(Введите элемент ${i} в подмассиве ${ind})));

//  alert('Ваш массив:' + arr.map(subArr => '\n' + subArr));

//  // const mainN = prompt('Введите длину главного массива');
// // const subN = prompt('Введите длину внутренних массивов');

// const mainN = 3;
// const subN = 3;

// //  const arr = new Array(+mainN).fill(0).map(cb)


// //  console.log('Ваш массив:' + arr.map(subArr => '\n' + subArr));

//  const arr = [];

// for (let i = 0; i < mainN; i++){
//   const r = [];
//   for (let j = 0; j < subN; j++ ){
//   r.push(randomIntFromInterval(10,99));
//   }
//   arr.push(r);
//   // console.log(arr);
// }

// console.log(arr);

// function randomIntFromInterval(min, max) { // min and max included
//   return Math.floor(Math.random() * (max - min + 1) + min).toString();
// }

// arr[0].map(cb)

// function cb (item, ) {

//  console.log(item)
// }

// cb('qwe')

// delete min
//  Input: [1,2,3,4,5], output= [2,3,4,5]
//  Input: [5,3,2,1,4], output = [5,3,2,4]
//  Input: [2,2,1,2,1], output = [2,2,2,1]




function deleteMin (arr) {
    let min = Math.min(...arr);
    let index = arr.indexOf(min);
    arr.splice(index, 1);

      // const sortedArr = arr.sort();
      // sortedArr.shift();

      // return sortedArr.slice(1);
    return arr
  }

  const dd = [1,2,3,4,5]

  console.log(deleteMin(dd))
  console.log(deleteMin([5,3,2,1,4]))
  console.log(deleteMin([2,1,2,1,2,1]))

  //Перевернуть каждое второе слово в заданной строке, а затем вернуть строку.
// + Отбросьте все начальные или конечные пробелы,
//  убедившись, что между каждым словом есть ровно один пробел.
// + Знаки препинания следует рассматривать так, как если бы они были частью слова в этой ката.

function deleteSecondWord(string){
    const dirtyWords = string.split(" ");
    const words = dirtyWords.filter(item => !!item)

    for (let i = 1; i < words.length; i += 2){
      words[i] = words[i].split("")
        .reverse()
        .join("")
    }

    console.log(words)

    return words
  }



  // console.log(deleteSecondWord('123'))
  console.log(deleteSecondWord(' Я люблю    учить      JavaScript. Он  такой     же как и EcmaScript '))
  // console.log(deleteSecondWord())



let userInfo = {
    name: "Vasya",
    age: 30,
    "58": "znachenie svoystva",
    showInfo() {
        console.log(`${this.name}`);
    },
}
console.log(userInfo["58"]);

let user = userInfo;
user.age = 45;
console.log(userInfo.age);

userInfo = null;
console.log(userInfo);
user.showInfo();          // Vasya


// Створіть об’єкт calculator з трьома методами:

// read() запитує два значення та зберігає їх як властивості об’єкта з іменами a та b відповідно.
// sum() повертає суму збережених значень.
// mul() множить збережені значення і повертає результат.

// let calculator = {
//     read() {
//         let a = +prompt("enter a", '');
//         let b = +prompt("enter b");
//         this.a = a;
//         this.b = b;
//     },
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     }
// };

// calculator.read();
// console.log(calculator);
// console.log( calculator.sum() );
// console.log(calculator.mul());

//------------------------------------

// Існує об’єкт ladder, що дозволяє підійматися вгору-вниз:
let ladder = {
  step: 0,
  up() {
      this.step++;
      return this;

  },
  down() {
      this.step--;
      return this;
  },
  showStep: function() { // показує поточний крок
      console.log(this.step);
      return this;
  }
};
// Тепер, якщо нам потрібно зробити кілька викликів послідовно, можна зробити це так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
// Змініть код up, down і showStep так, щоб зробити доступним ланцюг викликів, наприклад:

console.log(ladder.up().up().down().showStep().down().showStep());

//---------------------------------

// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома методами:

// read() запитує два значення за допомогою prompt і запам’ятовує їх у властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.
function Calculator() {

  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert("Mul=" + calculator.mul());

//---------------------------------

// Створіть функцію-конструктор Accumulator(startingValue).

// Об’єкт, який він створює повинен:

// Зберігати “поточне значення” у властивості value. Початкове значення має значення аргументу конструктора startingValue.
// Метод read() повинен використовувати prompt для зчитування нового числа та додавати його до value.
// Іншими словами, властивість value – це сума всіх введенних користувачем значень разом із початковим значенням startingValue.

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt('value?', 0);
    };
}

let accumulator = new Accumulator(1); // початкове значення 1

accumulator.read(); // додає введене користувачем значення
accumulator.read(); // додає введене користувачем значення

console.log(accumulator.value); // показує суму цих значень
