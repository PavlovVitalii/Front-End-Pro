(function () {
  const house_1 = new House(20);

  addPeopleInApartment(house_1, 1, 2);
  console.log(house_1);
  
  function addPeopleInApartment(house, numberApartmens, countPeople) {
    for (let i = 0; i < countPeople; i++) {
    house.apartmens[numberApartmens].people.push(Human.createRandomHumen());

    }
  }
})();
