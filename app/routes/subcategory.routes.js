module.exports = (app) => {
    const SubCategory = require('../controllers/subcategory.controller.js');

    // Create a new category
    app.post('/api/sub_category', SubCategory.create);

    // Get all Categories
    app.get('/api/sub_category', SubCategory.getAll);

    // Get a single Category by Id
    app.get('/api/sub_category/:sub_categoryId', SubCategory.getById);


    // Update a Category by Id
    app.put('/api/sub_category/:sub_categoryId', SubCategory.update);

    // Delete a Category by Id
    app.delete('/api/sub_category/:sub_categoryId', SubCategory.delete);
}
