const section = document.querySelectorAll('section');
for(let sec of section){
    console.log(sec);
    sec.style.border= '2px solid orange';
    sec.style.marginBottom= '10px'
    sec.style.borderRadius= '20px'
    sec.style.textAlign= 'center'
}

const listItem = document.getElementsByTagName('li');

// Remove the bullet point
for(let lii of listItem){
    lii.style.listStyleType = 'none';
}

const tour = document.getElementById('tour-container');
tour.classList.add('yellow-bg'); //add new class