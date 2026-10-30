//Where to be add 
const bon = document.getElementById('bon');
//what to be add
const li = document.createElement('li');
li.innerText='Kashbon';
//add to the place
bon.appendChild(li);

//-----------------------------------------------------------------------------------------------
//where to be added
const headerContainer = document.getElementById('headercontainer');
//what to be added
const section3 = document.createElement('section');
const h1 =document.createElement('h1');
h1.innerText='Welcome to Thanchi';
section3.appendChild(h1);

const ul =document.createElement('ul');
const li1=document.createElement('li');
li1.innerText='Bagher Mukh';
const li2=document.createElement('li');
li2.innerText='Saudong Para';
ul.appendChild(li1);
ul.appendChild(li2);
section3.appendChild(ul);

//add to the place
headerContainer.appendChild(section3);
//----------------------------------------------------------------------------------------------
//add inner HTML
const section4=document.createElement('section');
section4.innerHTML=`
<h1>Welcome to Rangamati</h1>
<ul>
<li>Kapati lake</li>
<li>Sita Pahar</li>
</ul>
`
headerContainer.appendChild(section4);