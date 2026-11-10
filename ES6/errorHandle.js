const cat={
    name:'Olivia',
    color:['White','Black'],
    gender:'Female',
    food:{
        fish:['hilsha','chingri','rui'],
        meat: 'Chicken'
    },
    age: 2,
    4:'yes'
}

// console.log(cat.height.inch) //showing error
console.log(cat.height?.inch) //showing undefined

console.log(cat[4]) //here . notetion could not use
