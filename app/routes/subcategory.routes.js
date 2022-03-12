module.exports = (app) => {
    const SubCategory = require('../controllers/subcategory.controller.js');
    const { requireSignin,adminMiddleware,superAdminMiddleware } = require('../utils/middleware');

    // Create a new category
    app.post('/api/sub_categories',requireSignin,adminMiddleware,adminMiddleware,SubCategory.create);

    // Get all Categories
    app.get('/api/sub_categories',requireSignin, SubCategory.getAll);

    // Get a single Category by Id
    app.get('/api/sub_categories/:sub_categoryId', SubCategory.getById);


    // Update a Category by Id
    app.put('/api/sub_categories/:sub_categoryId',requireSignin, adminMiddleware,superAdminMiddleware, SubCategory.update);

    // Delete a Category by Id
    app.delete('/api/sub_categories/:sub_categoryId',requireSignin, adminMiddleware,superAdminMiddleware, SubCategory.delete);
}
