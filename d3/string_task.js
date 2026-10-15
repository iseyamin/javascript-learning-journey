// Task-1:
// Count how many times a string has the letter a

const str="hello im bangladesh, who Are you?"
let count =0;
for(let i of str){
    if(i=='a'){
        count++;
    }
}
console.log(count);

// Task-2:
// Count how many times a string has the letter a or A

const strr="Hello im bangladesh, who Are you?"
let countt =0;
for(let i of str){
    if(i=='a' | i=='A'){
        countt++;
    }
}
console.log(countt);

// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u
const strrr="Hello im bangladesh, who Are yo?"
if(strrr.includes('a') & strrr.includes('e') & strrr.includes('i') & strrr.includes('o') & strrr.includes('u')){
    console.log("ache");
}
else console.log('nai');

// Task-4:
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
let a= 'hellx muytu XhuiY';
a= a.replaceAll('x','y').replaceAll('X','Y');
console.log(a);

// Task-5:
// Capitalize Every first Letter of each word in a String
let b= 'hellx muytu XhuiY';
const c = b.split(' ');
let d=[];
for(let i of c){
    
    i=i[0].toLocaleUpperCase()+i.slice(1); //store 0index uppercase + 1th to last index of string
    d.push(i);
    
}
console.log(d);
