//multi layer discount

//first 100 -> 100tk
//101-200 -> 90tk
//200< -> 70tk

function disc(quantity){
    let price;
    if(quantity<=100){
        price = quantity*100;
        return price;
    }
    else if(quantity<=200){
        price = (100*100)+(quantity-100)*90;
        return price;
    }
    else price=(100*100)+(100*90)+(quantity-200)*70;
    return price;
}

const price=disc(202);
console.log('Total price with discount= ',price);