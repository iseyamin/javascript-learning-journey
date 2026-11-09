const person = {
    name: 'eusha',
    age: 21,
    dept: 'CSE',
    friends: ['rakib','tamima','lamia'],
    cgpa: 3.43
}

// for(let key in person){
//     console.log(`key: ${key}  value: ${person[key]}`)
// }



//for of loop in object (hardcore technique)
console.log(Object.entries(person)) //it create array of object, then here can apply for of loop
for(let [key,value] of Object.entries(person)){
    console.log(`key: ${key}  value: ${value}`)
}