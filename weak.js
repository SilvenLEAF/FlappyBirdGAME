// Playing with Weak SET and SET

let myWeakSet = new WeakSet();
let obj = {}


myWeakSet.add(obj);
console.log(myWeakSet);
console.log(myWeakSet.has(obj));

obj = 5;
console.log(myWeakSet.has(obj));