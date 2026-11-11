// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(res=>res.json()) //convert into object
// .then(data=> console.log(data))



//call by function
const handleLoadData=() =>{
   fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(res=>res.json()) //convert into object
.then(data=> console.log(data))
}