// Playing with SET
const mySet1 = new Set(`2323577`);
const mySet2 = new Set([3,5,6,6,3,4,2,6,5,]);

/*
  add(x) -------chainable
  delete(x) -------returns boolean
  clear() -------returns undefined
  size -------length
  has(x) -------boolean
*/

console.log('-----------------SET-----------------');
console.log(mySet1);
console.log(mySet2);



// Playing with MAP
const myMap = new Map();

/*
  set ------returns the map
  get ------returns the value
  has ------returns boolean
  size ------length
  clear ------returns undefined
*/

console.log('-----------------MAP-----------------');
console.log(myMap.set(4, 'number'));
console.log(myMap.set(false, 'boolean'));

console.log(myMap.has(4));
console.log(myMap.has('boolean'));

console.log(myMap.get(false));
console.log(myMap.size);

console.log(myMap);
console.log(myMap.clear());
console.log(myMap);






// Playing with Date Object
const myDate = new Date();
/*
  UTC time is GMT time
  other time is Local Time
*/


console.log(`-------------------DATE`)
const year = myDate.getFullYear();
const month = myDate.getMonth();
const date = myDate.getDate();
const weekday = myDate.getDay();

console.log({ year, month, date, weekday });



const hours = myDate.getHours();
const mins = myDate.getMinutes();
const seconds = myDate.getSeconds();
const milSecs = myDate.getMilliseconds();

console.log({ hours, mins, seconds, milSecs });



const timeZoneOffset = myDate.getTimezoneOffset();
console.log({ timeZoneOffset });




const string = myDate.toString();
const dateString = myDate.toDateString();
const timeString = myDate.toTimeString();

console.log({ string, dateString, timeString });



const localeString = myDate.toLocaleString()
const localeDateString = myDate.toLocaleDateString()
const localeTimeString = myDate.toLocaleTimeString()

console.log({ localeString, localeDateString, localeTimeString })
