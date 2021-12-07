module.exports = (app) => {
    const Product = require('../controllers/product.controller.js');

    // Create a new post
    app.post('/create', Product.create);

    // Get all product
    app.get('/getall', Product.getAll);

    // Get a single products by Id
    app.get('/product/:productId', Product.getById);


    // Update a product by Id
    app.put('/entries/:entryId', Product.update);

    // Delete a product by Id
    app.delete('/product/:productId', Product.delete);
}
