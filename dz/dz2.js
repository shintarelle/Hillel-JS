'use strict'

// homework 2

let firstNumber = prompt('enter first number', '');
let secondNumber = prompt('enter second number', '');

if ((firstNumber === null || firstNumber === '') || (secondNumber === null || secondNumber === '')) {
    alert('you enter nothing');
} else if (isNaN(firstNumber) || (isNaN(secondNumber))) {
    alert('incorrect enter');
} else {
    alert(`    ${firstNumber} + ${secondNumber} = ${Number(firstNumber) + Number(secondNumber)},
    ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber},
    ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber},
    ${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}` )
}

//-------------------------------------

let action = prompt('enter action: add, sub, mult or div', '')
let firstNumb = prompt('enter first number', '');
let secondNumb = prompt('enter second number', '');

if ((firstNumb === null || firstNumb === '') || (secondNumb === null || secondNumb === '')) {
    alert('you enter nothing');
} else if (isNaN(firstNumb) || (isNaN(secondNumb))) {
    alert('incorrect enter');
} else if (action === 'add') {
    alert(`${firstNumb} + ${secondNumb} = ${Number(firstNumb) + Number(secondNumb)}`);
} else if (action === 'sub') {
    alert(`${firstNumb} - ${secondNumb} = ${firstNumb - secondNumb})`);
} else if (action === 'mult') {
    alert(`${firstNumb} * ${secondNumb} = ${firstNumb * secondNumb}`);
} else if (action === 'div') {
    alert(`${firstNumb} / ${secondNumb} = ${firstNumb / secondNumb}`);
} else { alert('mistake action') }

//--------------------------------------

let hours = prompt('enter number of hours', '');
let seconds;

if ((hours === null || hours === '')) {
    alert('you enter nothing');
} else if (isNaN(hours)) {
    alert('incorrect enter');
} else {
    seconds = Math.abs(hours) * 60 * 60;
    alert(seconds);
}

//----------------------------------------

let firstNum = prompt('enter first number', '');
let secondNum = prompt('enter second number', '');
let thirdNum = prompt('enter second number', '');
let arithmetic;

if ((firstNum === null || firstNum === '') || (secondNum === null || secondNum === '') ||
    (thirdNum === null) || (thirdNum === '')) {
    alert('you enter nothing');
} else if (isNaN(firstNum) || (isNaN(secondNum)) || (isNaN(thirdNum))) {
    alert('incorrect enter');
} else {
    arithmetic = (Number(firstNum) + Number(secondNum) + Number(thirdNum)) / 3;
    alert(`arithmetic mean: ${arithmetic}`);
}
