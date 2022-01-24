module.exports = (app) => {
    const Product = require('../controllers/product.controller.js');
    const upload  =require('../utils/multer')

    // Create a new post
    const pictureArr =[{name:'thumbnail_one',maxCount:1},{name:'thumbnail_two',maxCount:1},{name:'thumbnail_three',maxCount:1}]
    app.post('/product',upload.fields(pictureArr), Product.create);

    // Get all product
    app.get('/product', Product.getAll);

    // Get a single products by Id
    app.get('/product/:productId', Product.getById);


    // Update a product by Id
    app.put('/product/:productId',upload.fields(pictureArr), Product.update);

    // Delete a product by Id
    app.delete('/product/:productId', Product.delete);
}
