// ES5 VERSION OOP
function Person (name, age, isFemale){
  this.name = name;
  this.age = age;
  this.isFemale = isFemale;
}



const alex = new Person('Alex', 27, false);
console.log(alex);