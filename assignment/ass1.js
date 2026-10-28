//Email is valid or not?

function mail(str){
    const last = str.slice(-4);
    if(typeof str !== 'string'){
        return 'Error input'
    }

    else if(str[0] === '-' || str[0] === '@' || str[0] === '.' || str[0] === '_' || str[0] === '+'){
        return false;
    }
    else if(str.includes(' ')){
        return false;
    }
    else if(str.includes('@') && last==='.com'){
            return true;
        }
    else return false;
    
    
}

const email= ['fsjghjsghf@gfh.com'];
console.log(mail(email));