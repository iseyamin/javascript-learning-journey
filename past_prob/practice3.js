/* Ticket Fare Calculator 
  - children (age<10) = free
  - students (50% discount)
  -senior citizen (age>60) = 15% discount
  - regular ticket fare 800 tk
*/

let price = 800;
isStudent = false;
const age = 63;

price = isStudent? price/2: age<10? 0 : age>=60? price-price*.15 : price

console.log("Fare: " + price +'$')