//minimum value from object

const mobile=[
     {name:'oppo', price: 18000, camera: '12mp', color: 'woody'},
     {name:'vivo', price: 38000, camera: '12mp', color: 'woody'},
     {name:'pixel', price: 12000, camera: '12mp', color: 'woody'},
     {name:'nothing', price: 16500, camera: '12mp', color: 'woody'},
     {name:'xiaomi', price: 28000, camera: '12mp', color: 'woody'},
     {name:'samsung', price: 17800, camera: '12mp', color: 'woody'}]

     function min(arr){
        let min=arr[0].price;
        let obj = arr[0];
        for(let i of arr){
            if(i.price<min){
                min=i.price;
             obj=i;
            }
        }
        return obj;
     }

     const a = min(mobile);
     console.log(a.name,' phone and ', a.price,' tk');