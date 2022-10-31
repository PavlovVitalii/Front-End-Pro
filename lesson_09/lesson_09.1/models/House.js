class House {
  constructor(countApartmens) {
    this.countApartmens = countApartmens;
    this.apartmens = new Array(countApartmens);
    this.#fillingHouseApartments(countApartmens)
  }

  #createRandomApartment() {
    return new Apartment(Math.floor(Math.random() * 4) + 1);
  }

  #fillingHouseApartments(countApartments) {
    for (let i = 0; i < countApartments; i++) {
      this.apartmens[i] = this.#createRandomApartment();
    }
  }

}
