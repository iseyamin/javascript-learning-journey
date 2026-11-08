const arr=['rahim', 'karim', 'selim'];
console.log(...arr); //just display inner elements of array

const narr=['tamim', ...arr];
console.log(narr);

const num=[11,54,66,23,14,5,67,8,9,5];
console.log(Math.max(...num))