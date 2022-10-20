// Создать и описать сущности Многоквартирного дома, квартиры, жильца.

// Добавить возможность создавать новые дома на определенное количество квартир

// Не ограничивать количество жильцов в квартире


class House {
    number;
    numberOfApartment = [];
    constructor(number, numberOfApartment) {
        this.number = number;
        for (let i = 1; i <= numberOfApartment; i++) {
            this.numberOfApartment.push(new Apartment(i));
        }

    }
    setApartment(number, name) {
        let apartment = new Apartment(number);
        this.numberOfApartment.push(apartment);
        apartment.setTenant(name);
    }
    getApartment() {
        return this.numberOfApartment;
    }

}

class Apartment {
    number;
    tenant = [];
    constructor(number) {
        this.number = number;
    }
    setTenant(name) {
        let tenant = new Tenant(name);
        this.tenant.push(tenant);
    }
    getTenant() {
        return this.tenant;
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

const house2 = new House(2);
console.log(house2);
house2.setApartment(1, 'Katya');
console.log(house2);
house2.setApartment(2, 'Oleg');
console.log(house2);
house2.numberOfApartment[0].setTenant('Misha');
house2.setApartment(3);
console.log(house2);

console.log(house2.getApartment());





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
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    setName(newName) {
        this.name = newName;
    }
    setAge(newAge) {
        this.age = newAge;
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

console.log(person1.getName());
person1.setName('Piter');
person1.setAge(25);
console.log(person1);

const person2 = new Person();
console.log(person2);
person2.setName('Ann');
console.log(person2)
person2.setAge(20);
console.log(person2.getName());
console.log(person2.getAge());

console.log(person2.getInfo());


// let namePerson = checkEmptyString(prompt('Enter person name', ''));
// let agePerson = checkAge(prompt('enter person age', ''));
// let person3 = new Person(namePerson, agePerson);

// if ((namePerson != '') && (agePerson != '') && (+agePerson > 18)) {
//     person3 = new Person();
//     person3.setName(namePerson);
//     person3.setAge(agePerson);
// }
// console.log(person3);

// let brand = checkEmptyString(prompt('enter brand', ''));
// let year = checkEmptyString(prompt('enter year', ''));
// let auto2 = new Auto(brand, year);
// auto2.setOwner(person3);
// console.log(auto2.getInfo());
// console.log(auto2);

function checkEmptyString(string) {
    if (string == '') {
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
    static SIZE_SMALL = [50, 20];
    static SIZE_BIG = [100, 40];

    static STUFFING_CHEESE = [10, 20];
    static STUFFING_SALAD = [20, 5];
    static STUFFING_POTATO = [15, 10];

    static TOPPING_SAUCE = [15, 0];
    static TOPPING_MAYO = [20, 5];

    size;
    stuffing = [];
    toping = [0, 0];

    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
    }

    addTopping(toping) {
        this.toping[0] += toping[0];
        this.toping[1] += toping[1];
    }

    calculateCalories() {
        return this.size[1] + this.stuffing[1] + this.toping[1];
    }

    calculatePrice() {
        return this.size[0] + this.stuffing[0] + this.toping[0];
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
        return 2022 - Number(this.yearOfBirth);
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
            if (this.attendance[i] === false || this.attendance[i] === true) {
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
            if (this.attendance[i] === false || this.attendance[i] === true) {
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
console.log(student);
for (let i = 89; i < 95; i++) {
    student.setGrade(i);
}
console.log(student.getAvarageRaiting());
console.log(student);

for (let i = 0; i < 25; i++){
    student.present();
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
