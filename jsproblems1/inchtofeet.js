//12 inch = 1 feet

//inch to feet
function itf(inc){
    // let h=~~(inc/12);
    let h=parseInt(inc/12);
    i=inc%12;
    console.log(h ,'feet', i ,'inch');
}

itf(75);