const country = 'Bangladesh';
const champion = "Argentina";
const runnerUp = `France`;
const third = new String('Croatia');

console.log (typeof country);
console.log (champion);
console.log (runnerUp);
console.log (third);

const numberr = [22,5,6,77,88];
const capital = 'Dhak a';

console.log (numberr);
console.log (capital);
console.log (numberr.length);
console.log (capital.length);

numberr[1] = 'k';
capital[1] = 'r';
//array is mutable(can change)
//string is immutable(can't change)
console.log (numberr);
console.log (capital);

//compare string
const school = 'Charfassion Govt College';
console.log(school);
console.log(school.toLocaleLowerCase());
console.log(school.toUpperCase());
const book = 'Chemistry';
const subject = 'chemistry';

book.toLocaleLowerCase==subject.toLocaleLowerCase? console.log('Ami portechi') : console.log('bal pormu');

const drink = 'water  ';
const pani ='   water';

//remove gap
drink==pani? console.log('pani khai') : console.log('pani khaina');
drink.trim==pani.trim? console.log('pani khai') : console.log('pani khaina');


//slice and split

const movie = 'vikings';

const part= movie.slice(0,3);
console.log(part);