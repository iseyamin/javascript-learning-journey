//forEach work like as map, but does not return anything

const phone=[
{id:1, model:'redmi 14 5g', price:24200, brand:'xiaomi'},
{id:2, model:'k20 pro', price:29000, brand:'xiaomi'},
{id:3, model:'pixel 5', price:48000, brand:'google'},
{id:4, model:'realme 10', price:26200, brand:'realme'},
{id:5, model:'galaxy a71', price:28000, brand:'samsung'}]

phone.forEach(element=>{
    if(element.price>=28000){
        console.log(`model: ${element.model}, brand: ${element.brand}`)
    }
})