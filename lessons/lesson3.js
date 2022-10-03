// задания из учебника

// let browser = prompt('enter your browser');

// switch (browser) {
//   case 'Edge':
//     console.log( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     console.log( 'Ми підтримуємо і ці браузери' );
//     break;

//   default:
//     console.log( 'Маємо надію, що ця сторінка виглядає добре!' );
// }

// тоже с if else

// if (browser === 'Edge') {
//     console.log( "You've got the Edge!" );
// } else if (browser === 'Chrome') {
//     console.log( 'Ми підтримуємо і ці браузери' );
// } else if (browser === 'Firefox') {
//     console.log( 'Ми підтримуємо і ці браузери' );
// } else if (browser === 'Safari') {
//     console.log( 'Ми підтримуємо і ці браузери' );
// } else if (browser === 'Opera') {
//     console.log( 'Ми підтримуємо і ці браузери' );
// } else {
//     console.log( 'Маємо надію, що ця сторінка виглядає добре!' );
// }

// or

// if (browser === 'Edge') {
//     console.log( "You've got the Edge!" );
// } else if (browser === 'Chrome' ||
//     browser === 'Firefox' ||
//     browser === 'Safari' ||
//     browser === 'Opera') {
//     console.log( 'Ми підтримуємо і ці браузери' );
// } else {
//     console.log( 'Маємо надію, що ця сторінка виглядає добре!' );
// }


console.log('-----------------------');

let a = +prompt('a?', '');

// if (a == 0) {
//   console.log( 0 );
// }
// if (a == 1) {
//   console.log( 1 );
// }

// if (a == 2 || a == 3) {
//   console.log( '2,3' );
// }

// тоже со switch

switch (a) {
    case 0:
        console.log(0);
        break;
    case 1:
        console.log(1);
        break;
    case 2:
    case 3:
        console.log('2,3');
        break;
}

console.log('-----------------------');


// Задача на подумати. Якщо вирішите добре, якщо ні завтра розберемо.
// function random(min, max, exclude);

// random(1, 100, [3]) // value from 1 to 100 but not include 3, 33, 43, 93

function randomExclude3(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNum = Math.floor(Math.random() * (max - min)) + min;
    switch (randomNum) {
        case 3:
        case 33:
        case 43:
        case 93:
            break;
        default:
            console.log(randomNum);
    }
}
randomExclude3(1, 100);

// random(1, 100, [3,6]) // value from 1 to 100 but not include 3, 6,66,33, 43,46

// сравнение результата в стринговом эквиваленте (поиск в строке 3 или 6) если нашлось то тогда не выводим

// random(1, 100) // value from 1 to 100

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(random(1, 100));
