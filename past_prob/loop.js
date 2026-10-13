let number =[33,7,43,36,51,2,3,5];


for(const a of number){
    console.log(a);
}

let i=0;
while(number[i]<50){
    console.log(number[i]);
    number[i]%2 == 0? console.log('Fucking even number') : console.log('odd');
    i++; 
}