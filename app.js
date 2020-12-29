class Person {
  constructor(name, age, isFemale){
    this.name = name;
    this.age = age;
    this.isFemale = isFemale;
  }

  speak() {
    console.log(`Hi there! I'm ${ this.name } and I'm a ${ this.age } years old ${ this.isFemale ? 'girl' : 'boy' }. Nice to meet you!`);
  }

  ask(){
    console.log(`What's your name, friend?`)
  }
}



const alex = new Person(`Alex`, 27, false);

alex.speak()