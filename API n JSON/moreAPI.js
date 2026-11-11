const headLoader= () =>{
    fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data=>{
    console.log(data);
    displayuser(data);
})
}

const displayuser=(user)=>{
   console.log(user[0])
}