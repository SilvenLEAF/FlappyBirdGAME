// playing with object keys entries
const myObj = {
  name: 'Elsa',
  age: 27,
  isFemale: true,  
}

console.log('Object KEYS----------')
Object.keys(myObj).forEach(item=> console.log(item));


console.log('Object VALUES----------')
Object.values(myObj).forEach(item=> console.log(item));


console.log('Object ENTRIES----------')
Object.entries(myObj).forEach(item=> console.log(item));