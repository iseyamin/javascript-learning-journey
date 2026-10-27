function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function dev(a,b){
    return a/b;
}

function calc(a,b,operator){
    if(operator==='+'){
        return add(a,b);
    }
    else if(operator==='-'){
        return sub(a,b);
    }
    else if(operator==='*'){
        return mul(a,b);
    }
    else if(operator==='/'){
        return dev(a,b);
    }
    else return 'Enter valid operator: + - * /';
}

console.log(calc(5,6,'*'));