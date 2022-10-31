(function () {
  const people_1 = new Human("Max", "man");
  const people_2 = new Human("Mila", "woman");
  const people_3 = new Human("Bob", "man");
  const apartment_1 = new Apartment();
  const apartment_2 = new Apartment();
  const house = new House(2);

  apartment_1.addPeople(people_1);
  apartment_1.addPeople(people_2);
  apartment_2.addPeople(people_3);

  house.addApartment(apartment_1);
  house.addApartment(apartment_2);
  console.log(house);
})();

