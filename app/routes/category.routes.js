module.exports = (app) => {
    const Category = require('../controllers/category.controller.js');
    const { requireSignin,adminMiddleware,superAdminMiddleware } = require('../utils/middleware');
    // Create a new category
    app.post('/api/category',adminMiddleware,superAdminMiddleware,Category.create);

    // Get all Categories
    app.get('/api/category',requireSignin,Category.getAll);

    // Get a single Category by Id
    app.get('/api/category/:categoryId', requireSignin,Category.getById);


    // Update a Category by Id
    app.put('/api/category/:categoryId',requireSignin, Category.update);

    // Delete a Category by Id
    app.delete('/api/category/:categoryId',adminMiddleware,superAdminMiddleware,Category.delete);
}
