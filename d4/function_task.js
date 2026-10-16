// Task-1
// Take four parameters. Multiply the four numbers and then return the result

function mul(a,b,c,d){
    const sum=a*b*c*d;
    return sum;
}
const sultiply=mul(2,3,5,4);
console.log(sultiply);

// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function div(a){
    if(a%2 != 0){
        return a*2;
    }
    else return a/2;
}
const num = div(11);
console.log(num);

// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(arr,s){
    let sum=0;
    for(let i=0; i<s; i++){
        sum=sum+arr[i];
    }
    return sum/s;
}
const arr=[2,3,4,5,1];
const avg=make_avg(arr, arr.length);
console.log(avg);

// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(str){
    let count=0;
    for(let i of str){
        if(i==0){
            count+=1;
        }
    }
    return count;
}
const binary=[0,0,1,0,1,1,1,0,1,0,0]
console.log('Total Zero= ',count_zero(binary));

// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(i){
    if(i%2==0){
        return 'Even';
    }
    else return 'Odd';
}
const n=687665;
console.log(n,' is ',odd_even(n))