const mongoose = require('mongoose');

const SubCategorySchema = mongoose.Schema({
    name: {
     type: String,
     required: true
    },
    display_name:String,
    category_group:String,
    category_group:String
}, {
    timestamps: true
});

module.exports = mongoose.model('SubCategory', SubCategorySchema);