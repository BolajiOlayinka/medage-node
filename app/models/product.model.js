const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    product_name: {
     type: String,
     required: true
    },
    product_description: {
        type:String,
        required:true
    },
   product_varieties:{
    color:{type:String},
    size:{type:String},
    quantity:{type:String},
    price:{type:String}
   },
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);
