export class classPerson {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  printInfo() {
    console.log(`Name: ${this.name}`)
  }
}
