module.exports = (app) => {
    const Measurement = require('../controllers/measurement.controller.js');
    const { requireSignin,adminMiddleware,superAdminMiddleware } = require('../utils/middleware');
    // Create a new measurement
    app.post('/api/measurement',requireSignin,adminMiddleware,superAdminMiddleware,Measurement.create);

    // Get all Measurements
    app.get('/api/measurement',requireSignin,Measurement.getAll);

    // Get a single Measurement by Id
    app.get('/api/measurement/:measurementId',requireSignin, Measurement.getById);


    // Update a Measurement by Id
    app.put('/api/measurement/:measurementId',adminMiddleware, Measurement.update);

    // Delete a Measurement by Id
    app.delete('/api/measurement/:measurementId',adminMiddleware, Measurement.delete);
}
