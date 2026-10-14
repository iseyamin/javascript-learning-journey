const sentence = "You are not a good person";
const x= sentence.split(' ') //Split consider by space
console.log(sentence.split('o')) 
console.log(x)
console.log(x.join('^')) // join the array/object with ^ 

const zilla = "Bhola";
const upozilla= 'Charfassion';
const division = 'Barishal';

const address1 = upozilla.concat(',').concat(zilla).concat(',').concat(division);
const address2 = upozilla + "," + zilla + ',' + division;
console.log(address1 +'\n'+address2);
