function sum(){
    let counter=0;

    return function(){
        counter++;
         console.log(counter)
    }
   
}

let result=sum();
result() //1
result()  //2
result()  //3

let result2=sum();
result2()  //1
result2()  //2

result()  //4