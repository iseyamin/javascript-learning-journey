

let i=1;
let sum=0;
while (true){
    sum+=i;
   console.log('sum='+sum)
   if(sum<=18){
    break;
   }
   i++;
}

for(let i=1; i<100; i++){

        if (i==8 || i==64 || i==27){
            continue;
        }
     console.log(i);
}