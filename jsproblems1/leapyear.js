

function leapyear(year){
    
    if(year%100===0){
        if(year%400==0){
            return 'Leap year';
        }
        else return'Not leap year';
    }
    else if(year%4===0){
        return 'Leap year';
    }
    else return'Not leap year';
}

a=leapyear(2100)
console.log('2100 is '+ a);
console.log('2124 is ', leapyear(2124));
