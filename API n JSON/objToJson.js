const person={
    name: "Sakib",
    age: 43,
    gender: 'Male',
    status: true
}

//Object to JSON
const newperson= JSON.stringify(person);

console.log(newperson);
console.log(typeof(newperson))  //string
console.log(typeof(person))  //object

//JSON to object
const newperson2= JSON.parse(newperson);

console.log(newperson2)