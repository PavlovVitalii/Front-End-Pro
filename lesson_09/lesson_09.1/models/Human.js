class Human {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  createInfo() {
    return `Name: ${this.name}\nGender: ${this.gender}`;
  }
}
