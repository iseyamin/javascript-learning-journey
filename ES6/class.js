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