const ary=[2,6,8,44,5,66];


// const nary=[];
// for(let ind of ary){
//     const temp=ind+10;
//     nary.push(temp)
// }

//using map
const nary= ary.map(value=>value+10);  //map built in function automatic use loop and out each element
//map always return a array

console.log(nary)


const friendss=['rahim', 'karim', 'hatim'];
const nfrienf=friends.map((element,indexx)=>{
    console.log(indexx);
    console.log(element);
})