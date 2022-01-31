module.exports = (app) => {
    const AdminAuth =require('../../controllers/admin/auth.js');

    const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../../utils/validators');

    app.post('/api/admin/signup',validateSignupRequest, isRequestValidated,AdminAuth.signup);
    
    app.post('/api/admin/signin',validateSigninRequest, isRequestValidated, AdminAuth.signin);
    }