function weight_of_chagol(ber,doirgho){
    const body_weight=(ber*doirgho*ber)/660;
    const meat=body_weight-(body_weight*0.4); //mangsho 60%
    console.log("Total weight of chagol= ",body_weight.toFixed(2),'kg\nTotal mangsho= ',meat.toFixed(2),'kg'); 
}

const width=32;
const length=28;

weight_of_chagol(width,length);