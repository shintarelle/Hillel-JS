//?-------------------- Homework 4 ----------------------------------------------

console.log("exercise 9");

// Создать массив, длину и элементы которого задаёт пользователь.

let arr = [5,2,3,6,7,1];
// let arrLength = prompt("Enter length of array", '0');
// arr.length = arrLength;
// for (let i = 0; i < arrLength; i++) {
//   let item = prompt('Enter item of array', '');
//   console.log(item);
//   arr[i] = item;
// }
console.log(arr);

// Отсортировать массив по возрастанию.

console.log(arr.sort((a, b) => a - b));

// Удалить элементы из массива с 2 по 4 (включительно!).

console.log(arr.splice(1, 3));  // удаленные элементы
console.log(arr);  // то что осталось в исходном массиве

// По мере изменений, выводить содержимое массива на страницу.

//?-------------------------------------------------------------------------------

console.log("exercise 10");

// Дан массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

let bigArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47,];

// Найти сумму и количество положительных элементов.

let positivValue = 0;

let sumPositivValue = 0;
let multPositiveValue = 1;

let evenPositivCount = 0;
let oddPositivCount = 0;

let sumEvenPositivValue = 0;
let sumOddPositivValue = 0;

bigArray.forEach(function(item, index, array) {
  if (item > 0) {
    positivValue++;
    sumPositivValue += item;
    multPositiveValue *= item;
    if (item % 2) {
      oddPositivCount++;
      sumOddPositivValue += item;
    } else {
      evenPositivCount++;
      sumEvenPositivValue += item;
    }
  }
});
console.log(positivValue);
console.log(sumPositivValue);

// Найти минимальный элемент массива и его порядковый номер.

let minValue = Math.min(...bigArray);
console.log(minValue);
console.log(bigArray.indexOf(minValue));

// Найти максимальный элемент массива и его порядковый номер.

let maxValue = Math.max(...bigArray);
console.log(maxValue);
console.log(bigArray.indexOf(maxValue));

// Определить количество отрицательных элементов.

let negativValue = 0;

bigArray.forEach(function(item, index, array) {
  if (item < 0) {
    negativValue++;
  }
});
console.log(negativValue);

// Найти количество нечетных положительных элементов.

console.log(oddPositivCount);

// Найти количество четных положительных элементов.

console.log(evenPositivCount);

// Найти сумму четных положительных элементов.

console.log(sumEvenPositivValue);

// Найти сумму нечетных положительных элементов.

console.log(sumOddPositivValue);

// Найти произведение положительных элементов.

console.log(multPositiveValue);

// Найти наибольший среди элементов массива, остальные обнулить.


// let max = bigArray[0];

// for (let i = 0; i < bigArray.length; i++) {            //! с просторов инета и у меня не работает почему то
//   if (bigArray[i] > max) {
//     max = bigArray[i];
//   }

//   if (bigArray[i] !== max) {
//     bigArray[i] = 0;
//   }
// }

console.log(maxValue);

bigArray.forEach(function (item, index, array) {
    for (let i = 0; i < bigArray.length; i++) {
        if (bigArray[i] !== maxValue) {
            bigArray[i] = undefined;
        }
    }
});

console.log(bigArray);

//?-------------------------------------------------------------------------------

// Continuation in the file dz4-1.js
