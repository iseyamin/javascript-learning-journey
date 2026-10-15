const name =['rafi', 'kafi', 'nafi', 'safi'];

for(let i=0; i<name.length; i++){
     console.log(name[i]);
}

//const rev = name.reverse(); //main array also will changed
//console.log(rev);

//using loop
const reverse=[];
for(let i of name){
    reverse.unshift(i);
}
console.log(reverse);
const newarr=[];
for(let i=reverse.length-1; i>=0; i--){
    newarr.push(reverse[i]);
}
console.log(newarr);

