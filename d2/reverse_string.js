const sentence = 'I am a bad student';


let reverse =" ";
for(let i of sentence){
    reverse = i + reverse;
}

console.log(reverse);

let rev='';
let i = 0;
while(i< sentence.length){
    rev = sentence[i] + rev;
    i++;
}

console.log(rev);

const xx = sentence.split(' ').reverse().join(' ');
console.log(xx);