const loadUser=() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>load(data))
}

const load=(users)=>{
    const usersContainer= document.getElementById('users');

    for(let i of users){
      const li=document.createElement('li');
      li.innerText=i.name;
      usersContainer.appendChild(li)
    }
}