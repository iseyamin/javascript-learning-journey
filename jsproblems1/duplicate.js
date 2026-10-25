//check the duplicate values or string and remove


function dup(arr){
    arr2=[];
    for(let i of arr){
        // if(arr2.includes(i)==false){
        //     arr2.push(i);
        if(arr2.map(x => x.toLowerCase()).includes(i.toLowerCase())){
            continue;
        }
        else arr2.push(i);
    }
    return arr2;
}

const a=['sadia','ruma','tayeba','Eusha','prima','eusha','prima','adhara'];
a2=dup(a);
console.log(a2);