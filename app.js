/* 
  CLASS Based Object Oriented Programming
  
  class NAME {
    constructor (a,b,c){ this.a = a; }

    x(){ this.b }
    y(){ this.c }
  }



  class INHERITANCE extends NAME {
    constructor (a,b,c,d,e) { super(a,b,c,d,e); this.d = d; }

    z(){ this.a }
  }
*/




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
  constructor(name, age, isFemale, power){
    super(name, age, isFemale);
    this.power = power;
  }
  
  skill(){
    console.log(`Hi guys, I'm ${ this.name } and I can ${ this.power }.`);
  }
}



const alex = new Person(`Alex`, 27, false);
const genos = new SuperHuman(`Genos`, 19, false, 'fly');
alex.speak();
genos.skill();


