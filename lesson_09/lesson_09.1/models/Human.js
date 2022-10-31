class Human {
  constructor(age, gender) {
    this.age = age;
    this.gender = gender;
  }

  static createRandomHumen() {
    const randomAge = Math.floor(Math.random() * 90);
    const gender = ["man", "woman"];
    const randomGenderIndex = Math.floor(Math.random() * 2);
    return new Human(randomAge, gender[randomGenderIndex]);
  }
}
