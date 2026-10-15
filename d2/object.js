const bottle ={
    brand: 'apple',
    price: 20.78,
    color:'orange',
    isClean: false
}

console.log(bottle);

const price = bottle['price']; //access by third bra
const brand = bottle.brand; //access by dot

console.log('Price= '+price+'\n'+'Brand='+brand);