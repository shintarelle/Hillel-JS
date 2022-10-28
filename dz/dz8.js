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
        return this.#coast + coast;
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
espresso.cookingEspresso(6);
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
    console.log(this.volume);
    console.log(this.sizeCup);
    console.log(this.water);
    }
  }
}

const americano = new AmericanoRecept(30);
console.log(americano);

americano.cookingEspresso(2);
console.log(americano);

americano.addWater(400);
console.log(americano);

americano.cookingEspresso(2);
console.log(americano);
console.log(americano.getInfo());
console.log(americano.getCoast());
console.log(americano.volume)




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
        console.log(firstLatte.getCoast() + secondLatte.getCoast())
        // this.coast = this.setCoast(firstLatte.getCoast() + secondLatte.getCoast());
    }
    getInfo(){
    const result = super.getInfo();
    return {
      ...result,
        milk: this.milk
        // coast: this.setCoast(firstLatte.getCoast() + secondLatte.getCoast())
    }
  }
}

const doubleLatte = new DoubleLatteRecept();
console.log(doubleLatte);
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

      while (this.size < this.obj.volume) {
        this.size = this.size * 2;
        // if (this.size > 100) {
        //   this.size = SIZE_M
        //   if (this.size > 250) {
        //     this.size = SIZE_L
        //   }
        // }
        // if (this.size > 500) {
        //   this.devideDrink()
        // }
      }
    }
  checkVolume() {
        if (this.obj.volume > this.obj.sizeCup) {
          this.obj.sizeCup = this.obj.sizeCup * 2;
          console.log(this.obj.sizeCup)
          // if ()
          // this.devideDrink()
        }
    }

    devideDrink() {
      const cup1 = new Cup(this.size, this.obj);
      const cup2 = new Cup(this.size, this.obj);

      return [cup1, cup2];




    }
}
const americano2 = new AmericanoRecept(30);

const cup1 = new Cup(SIZE_M, americano2);
console.log(cup1);
americano2.addWater(60);
console.log(americano2)
cup1.checkVolume();
console.log(cup1)
