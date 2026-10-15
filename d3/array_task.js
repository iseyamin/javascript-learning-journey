// array-looping-tasks
// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

const colors = ['red', 'blue', 'green', 'yellow', 'orange']
const rev_colors=[];
let i=colors.length-1;
while(i>=0){
    rev_colors.push(colors[i]);
    i--;
}
console.log(rev_colors);

// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

const numbers = [12, 98, 5, 41, 23, 78, 46];
const even=[];
for(let i=0; i<numbers.length; i++){
    if(numbers[i]%2==0){
        even.push(numbers[i]);
    }
}
console.log(even);

// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

var numbers2 = ['Tom', 'Tim', 'Tin', 'Tik'];
// console.log(numbers2.join(''));
let join="";
for(let i of numbers2){
    join=join+i;
}
console.log(join);

// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statement = 'I am a hard working person';
const stat=statement.split(' ');
const state=[];
for(let i of stat){
        state.unshift(i);
}
console.log(state.join(' '));

// Task 5
// Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

const a=[1, 2, 3];
const b = [...a];
b[0]=99;
console.log("Original: ", a," Copy: ",b);

// Task 6
// Given an array of student objects, print each student’s name and marks.

const result=[
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
];
for(let i=0; i<result.length; i++){
    console.log(result[i].name,' scored ',result[i].marks);
}

// Task 7
// Given a 2D array, update the value at second row first item to 99 and print the updated array.


const d2=[
  [1, 2],
  [3, 4],
  [5, 6]
];
d2[1][0]=99;
console.log(d2);

