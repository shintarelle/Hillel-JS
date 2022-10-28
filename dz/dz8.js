// Пофиксить https://github.com/SimonovAlex/hillel/pull/8  или
//смотри свой lesson8 там та же задача с ошибкой. нужно поправить

// Добавить сущность "стаканчик" есть такие размеры:

// 100 мл
// 250 мл
// 500 мл
// Объём не может быть больше чем стакан.

// Добавить возможность разделить напиток на 2 стакана (будет 2 напитка отдельных).


class CoffeeRecept {

  #coast = 0;
  #sugar = 0;
  volume = 0;
  coffee = 0;
  sizeCup = 100;
  #SIZE_S = 100;
  #SIZE_M = 250;
  #SIZE_L = 500;

  constructor(){
    // this.volume = volume;
    // this.coffee = volume;
    // this.#coast = coast;
  }

  setSugar(value = 0){
    this.#sugar = this.#sugar + value;
    this.#coast = this.#coast + value * 5;
  }

  addSugar(){
    this.#sugar = this.#sugar + 1;
    this.#coast = this.#coast + 5;
  }

  get coast(){
    return this.#coast;
  }
  getCoast() {
        return this.#coast;
    }
  setCoast(coast) {
        this.#coast = this.#coast + coast;
    }

  getSugar(){
    return this.#sugar;
  }

  cookingEspresso(mult = 1) {
    if (this.volume + 15 * mult < this.sizeCup) {
      this.coffee = this.coffee + 15 * mult;
      this.#coast = this.#coast + 20 * mult;
      this.volume = this.volume + 15 * mult;
    }
  }

  getInfo() {
    return {
      coffee : this.coffee,
      volume: this.volume,
      coast: this.#coast,
      sugar: this.#sugar,
      sizeCup: this.sizeCup
    }
  }
  divTwoPart() {
    this.coffee = this.coffee / 2;
    this.volume = this.volume / 2;
    this.#sugar = this.#sugar / 2;
    this.#coast = this.#coast / 2;
    return {
      coffee: this.coffee,
      volume: this.volume,
      coast: this.#coast,
      sugar: this.#sugar,
      sizeCup: this.sizeCup};
  }
}
//?----------------------------------------------

class EspressoRecept extends CoffeeRecept{
  constructor(){
    super();
    this.cookingEspresso();
  }
}

const espresso = new EspressoRecept();
espresso.addSugar();

console.log(espresso);
console.log(espresso.getInfo());
espresso.cookingEspresso();
console.log(espresso.getInfo());
console.log(espresso.getCoast());
espresso.addSugar();
console.log(espresso.getInfo());
espresso.cookingEspresso(6);   // не сработает - переполнение стакана
console.log(espresso)


//?-----------------------------------------------

class AmericanoRecept extends CoffeeRecept {
  constructor(water){
    super();
    this.cookingEspresso();
    this.water = water;
    this.volume = this.volume + water;
    this.sizeCup = SIZE_M;
  }

  getInfo(){
    const result = super.getInfo();
    return {
      ...result,
      water: this.water
    }
  }

  addWater(water) {
    if (this.volume + water < this.sizeCup) {
    this.water = this.water + water;
    this.volume = this.volume + water;
    }
  }

  divTwoPart() {
    const result = super.divTwoPart();
    return {
      ...result,
      water: this.water / 2
    }
  }
}

const americano = new AmericanoRecept(30);
console.log(americano);

americano.cookingEspresso(2);
console.log(americano);

americano.addWater(400); // не сработает - переполнение стакана
console.log(americano);

americano.cookingEspresso(2);
console.log(americano);
americano.addSugar();
console.log(americano.getInfo());


//?----------------------------------------------------

class LatteRecept extends CoffeeRecept{
  constructor(milk){
    super();
    this.cookingEspresso();
    this.volume = this.volume + milk;
    this.milk = milk;
    this.sizeCup = SIZE_M;
  }
  getInfo(){
    const result = super.getInfo();
    return {
      ...result,
        milk: this.milk
    }
  }
  addMilk(milk) {
    if (this.volume + milk < this.sizeCup) {
    this.milk = this.milk + milk;
    this.volume = this.volume + milk;
    }

  }
  divTwoPart() {
    const result = super.divTwoPart();
    return {
      ...result,
      milk: this.milk / 2
    }
  }
}

const latte = new LatteRecept(50);
console.log(latte);
latte.cookingEspresso();
console.log(latte.getInfo());
latte.addMilk(50);
console.log(latte);
latte.setSugar(2);
console.log(latte.getInfo());
console.log(latte.getCoast());


//?-----------------------------------------------------

class DoubleLatteRecept extends CoffeeRecept{
  constructor() {
    super();
    const firstLatte = new LatteRecept(50);
    const secondLatte = new LatteRecept(50);
    this.volume = firstLatte.volume + secondLatte.volume;
    this.coffee = firstLatte.coffee + secondLatte.coffee;
    this.milk = firstLatte.milk + secondLatte.milk;
    this.sizeCup = SIZE_L;

    let doubleCoast = firstLatte.getCoast() + secondLatte.getCoast();
    console.log(doubleCoast)
    this.setCoast(doubleCoast);
  }
  getInfo(){
    const result = super.getInfo();
    return {
      ...result,
        milk: this.milk
    }
  }
}

const doubleLatte = new DoubleLatteRecept();
console.log(doubleLatte);
console.log(doubleLatte.getInfo());
doubleLatte.addSugar();
console.log(doubleLatte.getInfo());

// Добавить сущность "стаканчик" есть такие размеры:

// 100 мл
// 250 мл
// 500 мл
// Объём не может быть больше чем стакан.

// Добавить возможность разделить напиток на 2 стакана (будет 2 напитка отдельных).
// SIZE_S = 100;
// SIZE_M = 250;
// SIZE_L = 500;

class Cup {
    constructor(size, obj,) {
      this.size = size;
      this.obj = obj;

    }

  devideDrink() {
    let drink1, drink2 = {};
    drink1 = this.obj.divTwoPart();
    drink2 = Object.assign({}, drink1);

    const cup1 = new Cup(this.size,  drink1);
    const cup2 = new Cup(this.size, drink2);

      return [cup1, cup2];
    }
}

const americano2 = new AmericanoRecept(30);

const cup = new Cup(SIZE_M, americano2);
console.log(cup);
americano2.addWater(60);
console.log(americano2)
americano2.setSugar(4);
console.log(americano2)

console.log(cup.devideDrink());

const latte2 = new LatteRecept(50);
const cuplatte = new Cup(SIZE_M, latte2);
latte2.setSugar(4);
latte2.addMilk(50);
console.log(latte2.getInfo());
console.log(cuplatte.devideDrink());


// 1 1 2 3 5 8 13 21
//посчитать число фибаначи: 1+1=2 1+2=3 2+3-5 3+5=8 5+8=13 8+13=21 и тд число фибаначи от 8 равно 21

function fibanachi(n) {
  if (n <= 2) {
    return 1;
  } else {
      return fibanachi(n - 1) + fibanachi(n - 2);
  }
}

console.log(fibanachi(8));

const fibonacci = (n) => (n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
console.log(fibonacci(10));   // 55
console.log(fibonacci(20));   //6765
