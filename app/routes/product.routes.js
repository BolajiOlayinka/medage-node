module.exports = (app) => {
    const Product = require('../controllers/product.controller.js');
    const { requireSignin} = require('../utils/middleware');
    const upload  =require('../utils/multer')

    // Create a new post
    const pictureArr =[{name:'thumbnail_one',maxCount:1},{name:'thumbnail_two',maxCount:1},{name:'thumbnail_three',maxCount:1}]
    app.post('/api/product',upload.fields(pictureArr), requireSignin, Product.create);

    // Get all product
    app.get('/api/product', Product.getAll);

    // Get a single products by Id
    app.get('/api/product/:productId',Product.getById);


    // Update a product by Id
    app.put('/api/product/:productId',upload.fields(pictureArr), requireSignin, Product.update);

    // Delete a product by Id
    app.delete('/api/product/:productId',requireSignin, Product.delete);
}
