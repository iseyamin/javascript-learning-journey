//primitive(can copy) variable is immutable
let nam='Eusha';
const newname=nam;

 nam="Adhara";
 console.log(newname)  //eusha


 //non primitive(can not copy/ share memory address) variable is mutable
 let namary=['Eyamin','is'];
 let newnamary=namary;

 namary[1]='israfil';
 console.log(newnamary)