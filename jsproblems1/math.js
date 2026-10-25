//mathematical in build functions

const a=[2,66 ,4,56,78,23,45,74,77,56,76,78];
let n=0;
for(let i of a){
    if(i>n){      //manual method for find max value
        n=i;
    }
}
console.log(n);
console.log(Math.max(2,66 ,4,56,78,23,45,74,79,56,76,78)); //work only number, not work in array
console.log(Math.min(22,66 ,4,56,78,23,45,74,77,56,76,78));
console.log(Math.PI);
console.log(Math.abs(-10-5)) //absoulate value
console.log(Math.round(2.25)); //2
console.log(Math.round(2.78)); //3
console.log(Math.floor(2.97)); //2
console.log(Math.ceil(2.25)); //ceilling 3

console.log(Math.random()); //0 to 1
console.log(Math.random()*10); //0 to 1 * 10 -> 0 to 10 
console.log(Math.round(Math.random()*10)); // 0 to 10 round value