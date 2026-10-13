let array = [33, 55 , 6, 33, 22, 90, 8, 22]

console.log(array.length);
console.log(array);
console.log(array[4]);

array[4] = 77;
console.log(array[4]);

//remove from last
array.pop();
console.log(array);

//remove from first
const first = array.shift();
console.log(first);
console.log(array);

//unshift for add first
//include operation

let name =['eusha', 'adhara', 'anud', 'swatcho'];
console.log(name.includes('swatcho'));

name.includes('eusha')? console.log('go eusha') : console.log('hatmaro');

//slice array

let xy = name.slice(1,);

console.log(xy);
console.log(xy.join( ));