module.exports = (app) => {
    const Measurement = require('../controllers/measurement.controller.js');

    // Create a new measurement
    app.post('/api/measurement', Measurement.create);

    // Get all Measurements
    app.get('/api/measurement', Measurement.getAll);

    // Get a single Measurement by Id
    app.get('/api/measurement/:measurementId', Measurement.getById);


    // Update a Measurement by Id
    app.put('/api/measurement/:measurementId', Measurement.update);

    // Delete a Measurement by Id
    app.delete('/api/measurement/:measurementId', Measurement.delete);
}
