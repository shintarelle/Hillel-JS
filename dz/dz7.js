// Создать и описать сущности Многоквартирного дома, квартиры, жильца.

// Добавить возможность создавать новые дома на определенное количество квартир

// Не ограничивать количество жильцов в квартире


class House {
  number;
  apartments = [];
  constructor(number, apartments) {
    this.number = number;
    for (let i = 1; i <= apartments; i++) {
      this.apartments.push(new Apartment(i));
    }
  }
}

class Apartment {
    number;
    tenants = [];
    constructor(number) {
        this.number = number;
    }
    setTenant(name) {
        let tenant = new Tenant(name);
        this.tenants.push(tenant);
    }
    getTenant() {
        return this.tenants;
    }
}

class Tenant {
    name;
    constructor(name) {
        this.name = name;
    }

}
const tenant1 = new Tenant("Ivan");
console.log(tenant1);
const apartment1 = new Apartment(1);
console.log(apartment1);
apartment1.setTenant("Olya");
console.log(apartment1);
apartment1.setTenant('Vasya');
console.log(apartment1);

console.log(apartment1.getTenant());
console.log(apartment1.number);


const house1 = new House(1, 60);
console.log(house1);

const house2 = new House(2, 10);
console.log(house2);
house2.apartments[0].setTenant('Katya');
console.log(house2);
house2.apartments[1].setTenant('Oleg');
console.log(house2);
house2.apartments[2].setTenant('Misha');

console.log(house2);


//?------------------------------------------------------------------

// Создать сущность человека
// имя
// возраст
// Метод вывода данных

// Создать сущность автомобиля:
// Характеристики автомобиля отдельными свойствами
// Методы:
// Вывода на экран данных об этом автомобиле
// Присвоения этого автомобиля владельцу (записать в автомобиль объект владельца)

// Все данные о человеке и об автомобиле получать от пользователя. Реализовать необходимые проверки на корректность ввода (пустые поля, возраст >18 для человека и т.д. по необходимости).

// Максимально использовать функции

class Person {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        return this.name + ' ' + this.age;
    }

}
class Auto {
    brand;
    year;
    owner;

    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }

    setBrand(newBrand) {
        this.brand = newBrand;
    }
    setYear(newYear) {
        this.year = newYear;
    }
    setOwner(person) {
        this.owner = person;
    }
    getInfo() {
        return this.brand + ' ' + this.year + ' ' + this.owner.getInfo();
    }

}

const person1 = new Person('Michele', 30);
console.log(person1);

console.log(person1.name);
person1.name = 'Piter';
person1.age = 25;
console.log(person1);

const person2 = new Person();
console.log(person2);
person2.name = 'Ann';
console.log(person2)
person2.age = 20;
console.log(person2.name);
console.log(person2.age);

console.log(person2.getInfo());


// let namePerson = checkEmptyString(prompt('Enter person name', ''));
// let agePerson = checkAge(prompt('enter person age', ''));
// let person3 = new Person(namePerson, agePerson);

// if ((namePerson != '') && (agePerson != '') && (+agePerson > 18)) {
//     person3 = new Person();
//     person3.name = namePerson;
//     person3.age = agePerson;
// }
// console.log(person3);

// let brand = checkEmptyString(prompt('enter brand', ''));
// let year = checkEmptyString(prompt('enter year', ''));
// let auto2 = new Auto(brand, year);
// auto2.setOwner(person3);
// console.log(auto2.getInfo());
// console.log(auto2);

function checkEmptyString(string) {
    if (string === '') {
        alert('incorrect enter');
    } else {
        return string;
    }
}

function checkAge(number) {
    if (number == '' || +number < 18) {
        alert('mistake: age < 18');
    } else {
        return number;
    }
}

//?----------------------------------------------------------------

// Сеть фастфудов предлагает несколько видов гамбургеров:
// - маленький (50 тугриков, 20 калорий)
// - большой (100 тугриков, 40 калорий)

// Гамбургер может быть с одним из нескольких видов начинок:
// - сыром (+ 10 тугриков, + 20 калорий)
// - салатом (+ 20 тугриков, + 5 калорий)
// - картофелем (+ 15 тугриков, + 10 калорий)

// Можно добавить добавки:

// - посыпать приправой (+ 15 тугриков, 0 калорий)
// - полить майонезом (+ 20 тугриков, + 5 калорий).

// Напишите программу, расчитывающую стоимость и калорийность гамбургера. Используй ООП подход
// (подсказка: нужен класс Гамбургер, константы, методы для выбора опций и рассчета нужных величин)

// Пример работы кода:

// маленький гамбургер с начинкой из сыра
// var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка из майонеза
// hamburger.addTopping(Hamburger.TOPPING_MAYO);

// спросим сколько там калорий
// console.log(“Calories: “ + hamburger.calculateCalories());

// сколько стоит
// console.log("Price: “ + hamburger.calculatePrice());

// я тут передумал и решил добавить еще приправу
// hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?
// console.log("Price with sauce: “ + hamburger.calculatePrice());


class Hamburger {
  static SIZE_SMALL = { money: 50, kkal: 20 };
  static SIZE_BIG = { money: 100, kkal: 40 };

  static STUFFING_CHEESE = { money: 10, kkal: 20 };
  static STUFFING_SALAD = { money: 20, kkal: 5 };
  static STUFFING_POTATO = { money: 15, kkal: 10 };

  static TOPPING_SAUCE = { money: 15, kkal: 0 };
  static TOPPING_MAYO = { money: 20, kkal: 5 };

  size;
  stuffing = {};
  toping = {money: 0,kkal: 0};

    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
    }

    addTopping(toping) {
        this.toping.monay += toping.money;
        this.toping.kkal += toping.kkal;
    }

    calculateCalories() {
        return this.size.kkal + this.stuffing.kkal + this.toping.kkal;
    }

    calculatePrice() {
        return this.size.money + this.stuffing.money + this.toping.money;
    }
}

let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
console.log(hamburger);
console.log(Hamburger.SIZE_BIG);

hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log(hamburger);
console.log(hamburger.calculateCalories());
console.log(hamburger.calculatePrice());
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log(hamburger);
console.log(hamburger.calculateCalories());
console.log(hamburger.calculatePrice());

//?-----------------------------------------------------

// Вам нужно сделать конструктор сущности Студент.

// У Студента есть имя, фамилия, год рождения — это свойства. Есть массив с оценками, это тоже свойство. И есть возможность получить возраст студента и его средний бал — это методы.

// Еще у всех Студентов есть по массиву одинаковой длины, в нем 25 элементов, изначально он не заполнен, но на 25 элементов. Это массив в котором отмечается посещаемость, каждый раз когда мы вызываем метод .present() на очередное пустое место в массив записывается true, когда вызываем .absent() — записывается false. Предусмотрите какую-нибудь защиту от того чтоб в массиве посещаемости не могло быть более 25 записей. Массив - это свойство, present и absent — методы.

// Последний метод: .summary(), проверяет среднюю оценку, и среднее посещение(количествоПосещений/количествоЗанятий), и если средняя оценка больше 90 а среднее посещение больше 0.9, то метод summary, возвращает строку "Молодец!", если одно из этих значений меньше, то — Хорошо, но можно лучше", если оба ниже — "Редиска!".

// Не забудьте после того как напишите этот конструктор, создать 2-3 экземпляра (конкретных студентов) и показать использование этих методов.

class Student {
    name;
    surname;
    yearOfBirth;
    grade = [];
    attendance = [];

    constructor(name, surname, yearOfBirth) {
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
        this.attendance.length = 25;
    }

    setName(name) {
        this.name = name;
    }
    setSurname(surname) {
        this.surname = surname;
    }
    setYearOfBirth(yearOfBirth) {
        this.yearOfBirth = yearOfBirth;
    }
    setGrade(grade) {
        this.grade.push(grade);
    }

  getAge() {
    let now = new Date();
    let year = new Date(this.yearOfBirth);
    let age = now.getFullYear() - year.getFullYear();

    return age;
  }

    getAvarageRaiting() {
        let avarageRaiting = 0;
        for (let i = 0; i < this.grade.length; i++) {
            avarageRaiting += this.grade[i];
        }
        return avarageRaiting / this.grade.length;
    }
    present() {
        for (let i = 0; i < this.attendance.length; i++) {
            if (typeof this.attendance[i] === 'boolean') {
                continue;
            } else if ((!!this.attendance[i])) {

            } else {
                this.attendance.splice(i, 1, true);
                break;
            }
        }
    }
    absent() {
        for (let i = 0; i < this.attendance.length; i++) {
            if (typeof this.attendance[i] === 'boolean') {
                continue;
            } else if ((!!this.attendance[i])) {

            } else {
                this.attendance.splice(i, 1, false);
                break;
            }
        }
    }
    summary() {
        let a = 0;
        for (let i = 0; i < this.attendance.length; i++) {
            if (this.attendance[i] === true) {
                a++;
            }
        }
        let attendanceRait = a / 25;
        let avarageRait = this.getAvarageRaiting();
        if (attendanceRait > 0.9 && avarageRait > 90) {
            console.log("Excellent!");
        } else if ((attendanceRait > 0.9 && avarageRait < 90) || (attendanceRait < 0.9 && avarageRait > 90)) {
            console.log("Good!");
        } else if (attendanceRait < 0.9 && avarageRait < 90) {
            console.log("oh No!");
        }
    }
}

let student = new Student();
console.log(student);
student.setName('Vanya');
console.log(student);
student.setSurname('Ivanov');
student.setYearOfBirth(1980);
console.log(student.getAge());
console.log(student);
for (let i = 89; i < 95; i++) {
    student.setGrade(i);
}
console.log(student.getAvarageRaiting());
console.log(student);

for (let i = 0; i < 25; i++){
    student.present();
    // student.absent();
}
console.log(student);
console.log(student.attendance.length)
student.summary();

let student2 = new Student('Kolya', 'Petrov', 1990);
for (let i = 90; i < 95; i++) {
    student2.setGrade(i);
}
for (let i = 0; i < 25; i++){
    student2.present();
}
console.log(student2);
student2.summary();


//?-------------------------------------------------------------

// Создать класс SuperMath.

// Добавить к экземпляру метод - check(obj), параметр obj которого имеет свойства X, Y, znak. Метод должен подтвердить у пользователя хочет ли он произвести действие znak c Х и У. Если - да, сделать математическое действие znak(которое описано в прототипе), иначе - запросить ввод новых данных через метод input() класса SuperMath. Пример обекта: `obj = { X:12, Y:3, znak: “/”}`, возможные варианты znak=> `+ - / * %`.

// При вводе znak нужно сделать проверку корректности ввода на возможные математические действия

// p = new SuperMath();
// p.check(obj); // --> no p.input() -> 3 prompt -> считает

class SuperMath {

    constructor() {
    }

    check(obj) {
        if (confirm(`agree X ${obj.znak} Y`)) {
            switch (obj.znak) {
                case '+':
                    console.log(Number(obj.X) + Number(obj.Y));
                    break;
                case '-':
                    console.log(obj.X - obj.Y);
                    break;
                case '/':
                    console.log(obj.X / obj.Y);
                    break;
                case '*':
                    console.log(obj.X * obj.Y);
                    break;
                case '%':
                    console.log(obj.X % obj.Y);
                    break;

            }
        } else this.input();
    }

    input() {
        this.X = prompt('Enter X', '');
        this.Y = prompt('Enter Y');
        this.znak = prompt('Enter znak');
        switch (this.znak) {
            case '+':
                console.log(Number(this.X) + Number(this.Y));
                break;
            case '-':
                console.log(this.X - this.Y);
                break;
            case '/':
                console.log(this.X / this.Y);
                break;
            case '*':
                console.log(this.X * this.Y);
                break;
            case '%':
                console.log(this.X % this.Y);
                break;
            default: console.log('Incorrect enter');


            }
    }
}
obj = { X: 12, Y: 3, znak: '*'};
p = new SuperMath();
p.check(obj);
console.log(p);
