class House {
  apartments = [];
  constructor(maxCountApartments) {
    this.maxCountApartments = maxCountApartments;
  }

  addApartment(apartment) {
    if (
      apartment instanceof Apartment &&
      this.apartments.length < this.maxCountApartments
    ) {
      this.apartments.push(apartment);
      return;
    }
    console.log("Maximum apartment size exceeded.");
  }
}
