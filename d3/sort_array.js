const newarr =[ 'safi', 'nafi', 'kafi', 'rafi' ];



//sorting array
const sor= [...newarr].sort(); //[...newarr] -> copy array/not change main array
console.log(sor); //ascending order sort
console.log(newarr);


const num=[23,66,1,23,34,9,6,45,76];
const sor_des = [...num].sort(function(a,b){return b-a}); //perfect descending(work for number only)

console.log(sor_des);
