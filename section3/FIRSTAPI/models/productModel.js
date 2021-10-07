const mongoose = require('../connection');

const schema = new mongoose.Schema({
    
    name : String,
    price : Number,
    details : Array,
    category : String,
    created : Date
    
})

const model = mongoose.model('products', schema);

module.exports = model;