//when we have to use inner object,array items as a variable

//for object
const hena = {
    name: 'Hena',
    age: 23,
    dept: 'CSE',
    friends: ['rakib','tamima','lamia'],
    cgpa: 3.43
}

console.log(hena);
const {name, age,  dept, friends}=hena; //have to use same name
console.log(age);
console.log(...friends);

//for array
const students=['jamailla', 'kamailla', {name:'sajol', age: 34}, 'kashemmia'];
const [first,secons,third]=students;  //dont need to use same name
console.log(first);
console.log(third.name)