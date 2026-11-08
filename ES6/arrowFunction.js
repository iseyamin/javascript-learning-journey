//normal function
function sum(a,b){
    return a+b;
}

//arrow function
const sum2=(a,b)=> a+b;

const choto=(a,b)=>{
    if(a>b){
        return a;
    }
    else return b;
}

console.log(sum(10,20));
console.log(sum2(20,40));
console.log(choto(20,40));
