const loadPosts=() =>{
    fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json()).then(data=>postkor(data))
}

const postkor=(posts)=>{
    console.log(posts)
    const postContainer= document.getElementById('post_container')
    for(let i of posts){
     const div=document.createElement('div');
     div.classList.add('card')
     div.innerHTML=`
     <h1>${i.title}</h1>
     <p>${i.body}</p>
     
     `;
     postContainer.appendChild(div)
    }
}