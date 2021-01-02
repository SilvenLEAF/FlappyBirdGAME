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


const alex = new Person('Alex', 27, false);
console.log(alex);
alex.say();