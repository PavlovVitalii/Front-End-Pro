class Apartment {
  people = [];

  addPeople(human) {
    if (human instanceof Human) {
      this.people.push(human);
    }
  }
}
