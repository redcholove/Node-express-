var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/shoppingcart');


var products = [
    new Product({
        imagePath: 'https://vignette3.wikia.nocookie.net/diablo/images/0/05/Diablo_Head.jpg/revision/latest?cb=20080910154202',
        title: 'Diablo Game',
        description: 'Awesome Game!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://downloads.2kgames.com/2k/staging/datastore/1643-nba2k17_kobegold_fob_esrb.jpg',
        title: 'NBA 2K17',
        description: 'Awesome Game!!!',
        price: 15
    }),
    new Product({
        imagePath: 'http://na.leagueoflegends.com/sites/default/files/styles/scale_xlarge/public/upload/patch-notes-banner-3.jpg?itok=dRD_FHKk',
        title: 'League of Legends',
        description: 'Awesome Game!!!',
        price: 12
    }),
    new Product({
        imagePath: 'http://i0.hdslb.com/bfs/archive/e93cf8918fc42e2eb2efbc272184eab29f50ae92.jpg',
        title: 'The Sim4',
        description: 'Awesome Game!!!',
        price: 30
    }),
];

var done = 0;

for ( var i = 0; i < products.length; i++ ) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length){
            exit();
        }
    });
}
function exit() {
    mongoose.disconnect();    
}