const age = 12;
/*
if(age>=18){
    console.log("You can vote.");
}
else {
    console.log('jao baccha ghumiye thako.');
}
    */
   //age>=18 ? console.log('you can vote') : console.log('jao baccha ghumao')

   let price = 501;
   isLeader = true;

 //isLeader == true ? price = 0 : price = price + 100 ;
// price = isLeader == true ?  0 :  price + 100 ;
price = isLeader ? price>500? price/2 : 0 : price+500;
   console.log(price);


   const isPass = false;
  /* if(isPass){
    console.log('aro poramu');
   }
   else {
    console.log('biya diya dimu');
   }
*/

isPass? console.log('aro poramu') : console.log('biya diya dimu');