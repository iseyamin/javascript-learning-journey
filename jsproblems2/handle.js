//handle unexpected parameters

function sum(a,b){
    if(typeof a!== 'number' || typeof b!== "number"){
        return 'please enter number';
    }
    return a+b;
}
console.log(sum(4,'5')); //please enter number

function name(a,b){
    if(typeof a!=='string' | typeof b!=='string'){
        return 'Please input string'
    }
    return a+' '+b;
}
console.log(name('rahim','ali')) //rahim ali
console.log(name('cr',7)) //Please input string

function obzect(obj){
    if(typeof obj!=='object'){
        return 'please input a object';
    }
    else if(Array.isArray(obj)==true){
        return 'please input a object not array'
    }
    return obj.name;
}
const bio={id:2345, name:'yasir', age:27}
const arr=[56,77];
console.log(obzect(bio)); //yasir
console.log(obzect(arr)); //please input a object not array
//on javascript array is normally shown type of object
console.log(obzect('f')); //please input a object