// Напишіть функцію sumTo(n), що обчислює суму чисел 1 + 2 + ... + n.
// Наприклад:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10

// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

function sumTo(n) {
  let sum = 0;
  if (n == 1) {
    sum = n;
  } else {
    sum = n + sumTo(n - 3);
  }
  return sum;
}

console.log( sumTo(100) ); // 5050

// Факторіал з натурального числа – це число, помножене на "число мінус один", потім на "число мінус два" і так до 1. Факторіал n позначається як n!
// Ми можемо написати визначення факторіалу наступним чином:

// n! = n * (n - 1) * (n - 2) * ...*1
// Значення факторіалів для різних n:

// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// Завдання полягає в тому, щоб написати функцію factorial(n), яка обчислює n! за допомогою рекурсивних викликів.

// P.S. Підказка: n! може бути записане як n * (n-1)!. Наприклад: 3! = 3*2! = 3*2*1! = 6

function factorial(n) {
  let fact = 1;
  if (n == 1) {
    fact = fact * n;
  } else {
    fact = n * factorial(n - 1);
  }
  return fact;
}
console.log( factorial(5) ); // 120

// Вивести одинозв’язаний список
// Скажімо, у нас є одинозв’язаний список (як описано в розділі Рекурсія та стек):
// Напишіть функцію printList(list), що виводить список елементів один за одним.

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  if (list.next == null) {
    console.log(list.value);
    return;
  } else {
    console.log(list.value)
    printList(list.next)
  }
}


function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

alert( sum(1)(2) ); // 3
alert( sum(5)(-1)(2) ); // 6
alert( sum(6)(-1)(-2)(-3) ); // 0
alert(sum(0)(1)(2)(3)(4)(5)); // 15

// Створіть декоратор spy(func), який повинен повернути обгортку, яка зберігає всі виклики функції у властивості calls.
// Кожен виклик зберігається як масив аргументів.
// For instance:

function work(a, b) {
  console.log( a + b ); // працює як довільна функція або метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log( 'виклик:' + args.join() ); // "виклик:1,2", "виклик:4,5"
}

function spy(func) {

  function wrapper(...args) {
    // using ...args instead of arguments to store "real" array in wrapper.calls
    wrapper.calls.push(args);
    return func.apply(this, args);
  }

  wrapper.calls = [];

  console.log(wrapper.calls)

  return wrapper;
}
