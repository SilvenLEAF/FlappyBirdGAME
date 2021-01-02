// ES5 VERSION OOP
function Person (name, age, isFemale){
  this.name = name;
  this.age = age;
  this.isFemale = isFemale;
}



// PROTOTYPE
Person.prototype.say = function(){
  console.log(`Hi there! I'm ${ this.name }, a ${ this.age } years old ${ this.isFemale ? 'girl' : 'boy' }. Nice to meet you!`)
}




/*
  function J(a,b,c){
    this.a = a;
  }

  J.protype.x = function(){ this.b };


  function K(...args){
    J.apply(this, args)
  };
  K.prototype = Object.create(J.prototype);
*/
// INHERITANCE
function SuperHuman(name, age, isFemale, skill){
  Person.apply(this, [name, age, isFemale,]);
  
  this.skill = skill;
}

SuperHuman.prototype = Object.create(Person.prototype);
SuperHuman.prototype.superpower = function(){
  console.log(`I HERO ${ this.name } and I can ${ this.skill}.`);
}




const alex = new Person('Alex', 27, false);
console.log(alex);
alex.say();


const fire = new SuperHuman('Fire', 25, true, 'fly');
console.log(fire);
fire.say();
fire.superpower();