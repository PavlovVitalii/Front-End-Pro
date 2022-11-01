class Car {
  owner;
  constructor(brand, model, year, color) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  addOwner(owner) {
    if (owner.age >= 18) {
      this.owner = new Human_2(owner.name, owner.age);
      return;
    }
    console.log("Age cannot be less than 18 years.");
  }

  showInfoCar() {
    console.log(
      `Brand: ${this.brand}\nModel: ${this.model}\nYear: ${
        this.year
      }\n${this.owner.showInfoHuman()}`
    );
  }
}
