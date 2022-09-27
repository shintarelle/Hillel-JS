'use strict'

const a = 10;
const b = 20;
console.log(a - b);

// -------

let i1 = 3;
while (i1) {
    console.log(i1--);  // 3  2  1
}

let i2 = 0;
// while (++i2 < 5) {
//     console.log(i2);   // 1 2 3 4
// }

while (i2++ < 5) {
    console.log(i2);   // 1 2 3 4 5
}
console.log('------------------------');

for (let i = 0; i < 5; i++) {
    console.log(i);              // 0 1 2 3 4
}

for (let i = 0; i < 5; ++i) {
    console.log(i);              // 0 1 2 3 4
}

console.log('------------------------');

forFirst: for (let i = 0; i < 5; i++) {
    for (let j = 6; j < 9; j++) {
        if (j == 8) {
            continue forFirst;     // 6 7 6 7 6 7 6 7 6 7
        }
        console.log(j);
    }
}

for (let i = 2; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(i);     // 2 4 6 8 10
    }
}
// ----------------------------

for (let i = 0; i < 3; i++) {
    console.log( `число ${i}!` );
}
let i = 0;
while (i < 3) {
    console.log( `число ${i}!` );
    i++;
}
console.log('------------------------');

// let num;

// do {
//   num = prompt("Введене число, більше за 100?", 0);
// } while (num <= 100 && num);
// запрашивает число. пока число <100 или пока не введут пусто и отмена


// --------------------------------

// let n = 10;
// console.log(`простые числа от 1 до ${n}: `);
// nextPrime:
// for (let i = 2; i <= n; i++) {
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             continue nextPrime;
//         }
//     }
//     console.log(i);
// }

let n = 10;
console.log(`простые числа от 1 до ${n}: `);
nextPrime:
for (let i = 2; i <= n; i++) { // для кожного i...

  for (let j = 2; j < i; j++) { // шукаємо дільник..
      if (i % j == 0) continue nextPrime; // не просте, беремо наступне i
    }

  console.log( i ); // просте число
}
