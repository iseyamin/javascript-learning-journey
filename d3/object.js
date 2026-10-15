const info= {
    name: 'IS Eyamin',
    age: 23,
    'favourite places': ['bandarban', 'kaptai', 'bhola'], //use '' for gap 
    journey: [2022, 2023, 2024, 2024, 2025],
    education :{
        ssc: "Shibsrhst High School",
        HSC: "Charfassion Govt College"
    }

};


const gee = 'age';
info[gee]=35; //gee is variable thats why no need ''
console.log(info['age']); //age is a key thats why needed ''


console.log(info.education.HSC);

const key = Object.keys(info); //for find all keys of object
const value = Object.values(info); //for showing all values
console.log(key);
console.log(value);

info["favourite places"][2] = 'Savar'; //change value by index wise
console.log(info['favourite places']);

delete info.journey; //delete key
console.log(Object.keys(info));

