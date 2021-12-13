module.exports = (app) => {
    const Category = require('../controllers/category.controller.js');

    // Create a new category
    app.post('/api/category', Category.create);

    // Get all Categories
    app.get('/api/category', Category.getAll);

    // Get a single Category by Id
    app.get('/category/:categoryId', Category.getById);


    // Update a Category by Id
    app.put('/category/:categoryId', Category.update);

    // Delete a Category by Id
    app.delete('/category/:categoryId', Category.delete);
}
