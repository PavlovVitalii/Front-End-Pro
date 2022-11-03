class Human {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  getInfo() {
    return `Name: ${this.name}\nGender: ${this.gender}`;
  }
}
