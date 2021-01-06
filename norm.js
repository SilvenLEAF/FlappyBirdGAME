// for in VS for of

const myArr = [0,1,2,3,4,5,6,7,8,9]
myArr.prop = 'A';

console.log(myArr);

/*
for of -------excludes prop
for in -------includes prop
*/

for(num of myArr){
  console.log('num', num);
}
for(item in myArr){
  console.log('item', item);
}


