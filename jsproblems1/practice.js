//longest word

function long(arr){
    let count =0;
    let large=0;
    let w='';
    for(let i of arr){
        for(let j of i){
            count++;
        }
        if(count>large){
            large=count;
            w=i;
        }
        count=0;
    }
    return w;
}
const a=['sadia','ruma','tayeba','Eushaaa','prima','eusha','prima','adhara']
const word = long(a);
console.log(word);

//random number between 10-20
n = Math.round(Math.random()*(30-10)+10);
console.log(n);