(function () {
  const toyota = new Car("TOYOTA", "RAV-4", 2012, "white");
  const skoda = new Car("SKODA", "OCTAVIA", 2017, "black");
  const bob = new Human_2("Bob",23);
  const curt = new Human_2("Curt",27);

  toyota.addOwner(bob);
  toyota.showInfoCar();

  skoda.addOwner(curt);
  skoda.showInfoCar();

})();
