const mobile= {
    name: 'poco x5',
    id: 4570023,
    'available location': ['bandarban', 'kaptai', 'bhola'], //use '' for gap 
    features :{
        network: "2g,3g,4g,5g",
        camera: "24mp"
    }

};


for (let i in mobile){
    console.log(i);
}

for (let i in mobile){
    console.log(i,':',mobile[i]);
}