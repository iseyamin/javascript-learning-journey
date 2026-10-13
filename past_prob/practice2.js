let burger = 450;
let price;

price= burger>500? 0 : 30 ;
console.log('coke price = ' + price);

let weight = 65;
let hight = 1.25;
let BMI = weight / (hight*hight);
console.log(BMI);

BMI<18.5? console.log('you are underweight') : BMI>=18.5 && BMI<=24.9? console.log('you are normal weight') : 
BMI>=25 && BMI<=29.9? console.log("You are motku") : console.log('Tui morbi');

let mark = 8;
let grade;

grade = mark>= 90 && mark<=100? 'A' :
        mark>=80 && mark<90? 'B' :
        mark>=70 && mark<80? 'C' :
        mark>=60 && mark<70? 'D' :
        'tui fail bokachoda';
console.log('Yor grade is ' + grade);        

let myMark = 88;
let friendMark = 73;

myMark>=80?    friendMark>=80? console.log('Go to restaurent with friend') :
            friendMark>=70? console.log('Say good luck to friend') :
            friendMark>=60? console.log('Sawya paicho bondhu') :
            console.log('fail korli voxod, tour e chol')             :
console.log("Basay giye hat mari");