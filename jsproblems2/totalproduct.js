//total sell from object of array


const sw_uttara=[
    {name:'chal', kg:21, payment: 'card'},
    {name:'dal', kg:2, payment: 'card'},
    {name:'chini', kg:3.5, payment: 'cash'},
    {name:'moyda', kg:10, payment: 'cripto'},
    {name:'chal', kg:16, payment: 'cash'},
    {name:'chal', kg:13, payment: 'cash'},
    {name:'moyda', kg:7, payment: 'card'},
    {name:'dal', kg:8, payment: 'cash'},
    {name:'moyda', kg:15, payment: 'cripto'},
    {name:'chal', kg:34, payment: 'cash'}
]
const sw_price={
    chal: 28,
    dal: 65,
    moyda: 45,
    chini: 75
}
console.log(sw_price)

function swapno(arr1,arr2,product){
    let totalkg=0;
    // const totalprice=0;
    for(let i of arr1){
        if(i.name===product){
            totalkg=totalkg+i.kg;
        }
    }
    let totalprice = totalkg * arr2[product];
    return totalprice;
}

const price = swapno(sw_uttara,sw_price,'');
console.log(price);