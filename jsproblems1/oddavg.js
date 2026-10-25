//average of odd numbers from array

function oddavg(array){
    let sum=0;
    let size=0;
    for(const i of array){
        if(i%2!==0){
           sum = sum+i;
           size++;
        }
    }
    return sum/size;
}

const ar=[2,5,6,7,9,12,15,7];
const avg =oddavg(ar);
console.log('Average of odd numbers: ',avg);