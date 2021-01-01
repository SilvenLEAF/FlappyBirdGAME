// // Playing with SET
// const mySet1 = new Set(`2323577`);
// const mySet2 = new Set([3,5,6,6,3,4,2,6,5,]);

// /*
//   add(x) -------chainable
//   delete(x) -------returns boolean
//   clear() -------returns undefined
//   size -------length
//   has(x) -------boolean
// */

// console.log('-----------------SET-----------------');
// console.log(mySet1);
// console.log(mySet2);



// // Playing with MAP
// const myMap = new Map();

// /*
//   set ------returns the map
//   get ------returns the value
//   has ------returns boolean
//   size ------length
//   clear ------returns undefined
// */

// console.log('-----------------MAP-----------------');
// console.log(myMap.set(4, 'number'));
// console.log(myMap.set(false, 'boolean'));

// console.log(myMap.has(4));
// console.log(myMap.has('boolean'));

// console.log(myMap.get(false));
// console.log(myMap.size);

// console.log(myMap);
// console.log(myMap.clear());
// console.log(myMap);






// Playing with Date Object
const myDate = new Date();
/*
  UTC time is GMT time
  other time is Local Time
*/


console.log(`-------------------DATE`)
console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getDay());
console.log(myDate.getDate());

console.log(myDate.getUTCFullYear());
console.log(myDate.getUTCDate())


console.log(myDate.getHours())
console.log(myDate.getUTCHours())