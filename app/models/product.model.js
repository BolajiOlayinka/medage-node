const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: {
     type: String,
     required: true
    },
    display_title:String,
    quantity_available:String,
    price:Number,
    thumbnail_one:String,
    thumbnail_two:String,
    thumbnail_three:String,
    verification:Boolean,
    organisation_category:String,
    city:String,
    expiry_date:String,
    address:String,
    nafdac_reg:{
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    measurement:String,
    user:String,
    category_id:String,
    sub_category:String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);
