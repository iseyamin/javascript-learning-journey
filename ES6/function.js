//default parameter function

function sum(a=0,b=0){
    const sum=a+b;
    console.log(sum);
}

sum(10);

function fullname(a='first name empty',b='second name empty'){
    const name=a+' '+b;
    console.log(name);
}

fullname()