// Напишіть інтерфейс для створення списку на основі того, що введе користувач.

// Для кожного пункта списку:

// Запитайте текст пункту у користувача за допомогою prompt.
// Створіть <li> з цим текстом та додайте його до <ul>.
// Продовжуйте поки користувач не припинить вводити дані (натисне Esc або введе пустий рядок).
// Всі елементи повинні створюватися динамічно.

// Якщо користувач вводить HTML-теги, вони мають розглядатися як текст.

// document.body.insertAdjacentHTML('afterend', '<ul id= "list"></ul>');

// let okCancel = true;
// while (okCancel) {
//   let li = document.createElement('li');
//   let text = prompt('enter lists element');
//   if (text) {
//     li.textContent = text;
//     list.append(li);
//   } else okCancel = false;

// }

// Напишіть функцію createTree яка створює вкладений ul/li список з вкладеного об’єкта.

let data = {
  Риба: {
    форель: {},
    лосось: {}
  },

  Дерево: {
    Величезні: {
      секвойя: {},
      дуб: {}
    },
    Квітучі: {
      яблуня: {},
      магнолія: {}
    }
  }
};
document.body.insertAdjacentHTML('afterend', '<div id= "container"></div>');
// let container = document.getElementById('container');

function createTree(container, obj) {
      container.innerHTML = createTreeText(obj);
    }

    function createTreeText(obj) { // окрема рекурсивна функція
      let li = '';
      let ul;
      for (let key in obj) {
        li += '<li>' + key + createTreeText(obj[key]) + '</li>';
      }
      if (li) {
        ul = '<ul>' + li + '</ul>'
      }
      return ul || '';
    }

    // createTree(container, data);

 function createTree(container, obj) {
      container.append(createTreeDom(obj));
    }
// or second variant

    function createTreeDom(obj) {
      // якщо дочірніх елементів немає, тоді виклик повертає undefined
      // та <ul> не буде створено
      if (!Object.keys(obj).length) return;

      let ul = document.createElement('ul');

      for (let key in obj) {
        let li = document.createElement('li');
        li.innerHTML = key;

        let childrenUl = createTreeDom(obj[key]);
        if (childrenUl) {
          li.append(childrenUl);
        }

        ul.append(li);
      }

      return ul;
    }

    let container = document.getElementById('container');
    createTree(container, data);

// Дано дерево з вкладених ul/li.
// Напишіть код, який додає до кожного <li> кількість його нащадків. Пропускаючи пусті вузли (без дочірніх елементів).
// Результат:
// Тварини [9]
//   Ссавці [4]
//     Корови
//     Осли
//     Собаки
//     Тигри
//   Інші [3]
//     Змії
//     Птахи
//     Ящірки
// Риби [5]
//   Акваріумні [2]
//     Гуппі
//     Риба-янгол
//   Морські [1]
//     Морська форель

let list = document.getElementsByTagName('li');
for (let li of list) {
  let count = li.getElementsByTagName('li').length;
  if (!count) continue;
  li.firstChild.data += ' [' + count + ']';
}
