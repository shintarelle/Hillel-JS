//Имеется текстовое поле на странице. При фокусировке на этом поле сбоку появляется <div> с информацией. При пропаже фокуса - <div> так же пропадает

let input = document.createElement('textarea');
let div = document.createElement('div');
div.textContent = ` Information about this field`
div.style.width = '300px';
div.style.display = 'none';
// div.hidden = true;

input.style.height = "100px";

document.body.firstElementChild.after(div);
document.body.firstElementChild.after(input);

input.onfocus = function () {
  div.style.display = "inline-block";
  // div.hidden = false;
}

input.onblur = function () {
  div.style.display = "none";
  // div.hidden = true;
}

  //Вывести таблицу 10 × 10, заполненную числами от 1 до 100 (таблица создаётся динамически)



let newTable = document.createElement('table');
newTable.style.borderCollapse = 'collapse';
let tbody = document.createElement('tbody');
newTable.style.width = '500px';
tbody.style.height = '500px';
newTable.append(tbody);

div.after(newTable);
for (let i = 0; i < 10; i++) {
  let row = document.createElement('tr');
  for (let j = 0; j < 10; j++) {
    let item = document.createElement('td');
    item.style.padding = '20px';
    item.style.border = 'solid 1px #000';
    item.innerHTML = `${ Number(`${i}` + `${j}`) + 1 }`;
    row.append(item);
    tbody.append(row);
  }
}

//В папке images есть изображения 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. Вывести изображение из этой папки полученное случайным образом (Math.random)

function getRandom(min, max) {
  let imageNumber = Math.floor(Math.random() * (max - min)) + min;
  console.log(imageNumber)
  return imageNumber;
}
let imageNumber = getRandom(1, 9);

const picture = document.createElement('img');
picture.src = `./images/${imageNumber}.jpg`;
picture.alt = 'image'
newTable.after(picture);


// 1 1 2 3 5 8 13 21 написать функцию которая считает число фибаначи

function fibonachi(num) {
  if (num <= 2) {
    return 1;
  } else {
    return fibonachi(num - 1) + fibonachi(n - 2);
  }
}

console.log(fibonachi(8));  //21
console.log(fibonachi(10));  //55


const fibonacci = (n) => (n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
console.log(fibonacci(10));
// 55
