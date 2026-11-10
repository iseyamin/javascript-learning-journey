const phone2=[
{id:1, model:'redmi 14 5g', price:24200, brand:'xiaomi'},
{id:2, model:'k20 pro', price:29000, brand:'xiaomi'},
{id:3, model:'pixel 5', price:48000, brand:'google'},
{id:4, model:'realme 10', price:26200, brand:'realme'},
{id:5, model:'galaxy a71', price:28000, brand:'samsung'},
{id:6, model:'galaxy a25', price:32000, brand:'samsung'}]

//filter apply condition and return new array
const samsung=phone2.filter(element=>element.brand==='samsung');
console.log(samsung);

//find apply condition and return one single object
const k2=phone2.find(element=>element.model==='k20 pro');
console.log(k2.price)