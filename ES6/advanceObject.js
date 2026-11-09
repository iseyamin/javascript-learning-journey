const heni = {
    name: 'Hena',
    age: 23,
    dept: 'CSE',
    friends: ['rakib','tamima','lamia'],
    cgpa: 3.43
}

//seal object (no key add)
// Object.seal(heni);

//freeze object (nothing change/update)
Object.freeze(heni);

heni.age=54;
heni.status='active';
console.log(heni);

// console.log(Object.keys(heni));
// console.log(Object.values(heni));
// console.log(Object.entries(heni));
