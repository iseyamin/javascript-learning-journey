const e=7;
const s=8;

console.log('Ami First')

setTimeout(()=>{
    console.log('Ami Second')
},3000)  //asynchronous function, work after 3000ms

console.log('Ami Third');
console.log(e+s);


//set interval
//it repeat
let count=0;
const clockId= setInterval(()=>{
    count++;
    console.log(count);

    if(count>=5){
        clearInterval(clockId);
    }
},1000)