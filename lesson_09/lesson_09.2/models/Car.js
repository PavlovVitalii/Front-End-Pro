class Car {
  brand;
  model;
  year;
  color;
  owner;

  constructor(brand, model, year, color) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  addOwner(owner) {
    if (owner.age >= 18) {
      this.owner = owner;
      return;
    }
    this.owner = null;
  }

  showInfo() {
    if (this.owner !== null) {
      console.log(
        `Brand: ${this.brand}\nModel: ${this.model}\nYear: ${
          this.year
        }\nOwner ${this.owner.showInfoHuman()}`
      );
      return;
    }

    console.log(
      `Brand: ${this.brand}\nModel: ${this.model}\nYear: ${this.year}\nOwner:`
    );
  }
}
