function Human(age, geder) {
  this.age = age;
  this.geder = geder;
}

Human.prototype.createRandomHumen = function () {
  this.gender = ["man", "woman"];
  this.randomGender = this.gender[Math.floor(Math.random() * 2)];
  this.randomAge = Math.floor(Math.random() * 90);
  return new Human(this.randomAge, this.randomGender);
};

function Apartment(rooms) {
  this.humans = [];
  this.rooms = rooms;
}

Apartment.prototype.addPeople = function () {
  this.humans.push(Human.prototype.createRandomHumen());
};

Apartment.prototype.createRandomApartment = function () {
  const numberRooms = Math.floor(Math.random() * 4);
  return new Apartment(numberRooms);
};

function House(apartment) {
  this.apartment = new Array(apartment).fill(
    Apartment.prototype.createRandomApartment()
  );
}

const house_1 = new House(3);
house_1.apartment[0].addPeople();
console.log(house_1.apartment[0]);
