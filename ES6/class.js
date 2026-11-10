class product{
     constructor(name,price,color){
        this.productName=name;
        this.productPrice=price;
        this.color=color;
     }

     details(){
        console.log(`Brand name: ${this.productName}
price: ${this.productPrice}`)
     }
}

const iphone=new product('iphone',49000,'orange');
console.log(iphone);
iphone.details();

const redmi=new product('redmi',4000,'pink')
redmi.details();

//inheritance 
class vehicle{
    constructor(name,price){
        this.vehicleName=name;
        this.vehiclePrice=price;
    }
    move(){
        console.log('i can move')
    }
}

class bus extends vehicle{
    constructor(name,price,sit){
        super(name,price) //name and price give to main(vehicle) class
        this.busSit=sit;
    }
}
const raida=new bus('Raida',1800000,48);
console.log(raida);

class truck extends vehicle{
    constructor(name,price,load,wheel){
        super(name,price)
        this.truckLoad=load;
        this.chaka=wheel;
    }
}
const madhumoti=new truck('madhumoti',2600000,'5ton',12);
console.log(madhumoti)