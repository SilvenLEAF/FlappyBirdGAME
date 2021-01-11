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


// Playing with forEach( )
/*
forEach( ) takes a callback function as an argument 
and that function takes the item, index and the parent array 
as its 1st, 2nd and 3rd arguments respectively 
*/

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
myArr.forEach((item, index, arr)=>{
  console.log({ item, index, arr })
});
