//task 1
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

console.log('golden rod: ',colors['golden rod']);

//task 2
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

car['passenger capacity'] = 5;
console.log(car);

//task 3
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student.physics.marks);

//task4
//Count the number of properties
let studentt = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
const prop = Object.keys(studentt);
console.log('Total properties= ', prop.length);

//task 5
//Loop through an object and print the key-value pairs with their types
let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

for(i in myObject){
    console.log(i,': ',myObject[i],' | type: ',typeof(myObject[i]));
}