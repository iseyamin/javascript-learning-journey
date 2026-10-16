function dodouble(a , double){
    if(double==true){
        console.log(a*2);
        return true;
    } 
    else {
        console.log(a*3);
        return false;
    }

}

dodouble(33,true);
const c=dodouble(22,false);
console.log(c);

function add_array(ar){
    let sum=0;
    let i =0;
    while(i<ar.length){
        sum=sum+ar[i];
        i++;
    }
    console.log('Total: ',sum)
}
const ary=[22,32,1,21,10]
add_array(ary);