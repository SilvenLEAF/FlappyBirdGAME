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



class SuperHuman extends Person {
  fly(){
    console.log(`Hi guys, I'm ${ this.name } and I can fly.`);
  }
}



const alex = new Person(`Alex`, 27, false);
const genos = new SuperHuman(`Genos`, 19, false);
alex.speak();
genos.fly();


