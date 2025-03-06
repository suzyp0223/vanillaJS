// es6 프로토타입을 위해 나온 문법 - class
export class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}


const product = new Product('apple', 1000, 2024);


