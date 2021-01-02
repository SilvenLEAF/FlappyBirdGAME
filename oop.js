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




// INHERITANCE
function SuperHuman(...args){
  Person.apply(this, args);
}

SuperHuman.prototype = Object.create(Person.prototype);





const alex = new Person('Alex', 27, false);
console.log(alex);
alex.say();


const fire = new SuperHuman('Fire', 25, true);
console.log(fire);
fire.say()