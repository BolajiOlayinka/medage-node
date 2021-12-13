module.exports = (app) => {
    const Product = require('../controllers/product.controller.js');

    // Create a new post
    app.post('/product', Product.create);

    // Get all product
    app.get('/product', Product.getAll);

    // Get a single products by Id
    app.get('/product/:productId', Product.getById);


    // Update a product by Id
    app.put('/product/:productId', Product.update);

    // Delete a product by Id
    app.delete('/product/:productId', Product.delete);
}
