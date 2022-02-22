// javascript object notation
// JSON;



const user = {id:11,name:'grib amir',jov:'actor'};

const stringfied = JSON.stringify(user);

// console.log(stringfied);
// console.log(user);



const shop = {
    name:'Alia Store',
    address:'ranbir road',
    profit:15000,
    products:['laptop','mobile','pepsi'],
    owner:{
        name:'alia bhatt',
        professor:'actor'
    },
    isExpencsive:false
}

const shopStringFie = JSON.stringify(shop);
console.log(shop);
console.log(shopStringFie);

// agiin conver a ful normal javascripit;
const converting = JSON.parse(shopStringFie);
console.log(converting)