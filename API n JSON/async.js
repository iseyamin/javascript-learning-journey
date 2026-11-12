const handlePosts=() =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.jon()) //error 
    .then(data=> console.log(data))
  .catch(error=>console.log('error dhorlam', error))
}

handlePosts()


//js work synchronous way, but which need time it wait
//here first output a,a+b then fetch data
const a=10;
const b=5;
console.log(a);
console.log(a+b);

//now use synchronous way
const handlePosts2=async() =>{
   try{
    const response= await fetch('https://jsonplaceholder.typicode.com/posts')
    const data=await response.json()
     console.log(data)
   }
   catch{
    console.log('error dhorchi')
   }

   console.log(b)
  
}

handlePosts2()



